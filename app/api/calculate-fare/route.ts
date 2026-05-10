import { NextRequest, NextResponse } from "next/server";
import { PRICING } from "@/lib/pricing";

const NOMINATIM_BASE = "https://nominatim.openstreetmap.org";
const OSRM_BASE = "https://router.project-osrm.org";
const USER_AGENT = "DemisDriver/1.0 (info@demisdriver.gr)";

interface NominatimResult {
  lat: string;
  lon: string;
  display_name: string;
}

interface OsrmRoute {
  distance: number; // meters
  duration: number; // seconds
}

interface OsrmResponse {
  code: string;
  routes: OsrmRoute[];
}

async function geocode(address: string): Promise<{
  lat: number;
  lon: number;
  displayName: string;
} | null> {
  const url = `${NOMINATIM_BASE}/search?q=${encodeURIComponent(address)}&format=json&limit=1&countrycodes=gr`;

  const response = await fetch(url, {
    headers: { "User-Agent": USER_AGENT },
  });

  if (!response.ok) return null;

  const results: NominatimResult[] = await response.json();
  if (results.length === 0) return null;

  return {
    lat: parseFloat(results[0].lat),
    lon: parseFloat(results[0].lon),
    displayName: results[0].display_name,
  };
}

async function getRoute(
  fromLat: number,
  fromLon: number,
  toLat: number,
  toLon: number,
): Promise<{ distanceKm: number; durationMin: number } | null> {
  const url = `${OSRM_BASE}/route/v1/driving/${fromLon},${fromLat};${toLon},${toLat}?overview=false`;

  const response = await fetch(url, {
    headers: { "User-Agent": USER_AGENT },
  });

  if (!response.ok) return null;

  const data: OsrmResponse = await response.json();
  if (data.code !== "Ok" || data.routes.length === 0) return null;

  return {
    distanceKm: Math.round(data.routes[0].distance / 100) / 10, // round to 1 decimal
    durationMin: Math.round(data.routes[0].duration / 60),
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fromAddress, toAddress, fromLat, fromLon, toLat, toLon } = body;

    if (!fromAddress || !toAddress) {
      return NextResponse.json(
        { error: "Both 'from' and 'to' addresses are required." },
        { status: 400 },
      );
    }

    // Use coordinates directly if provided (from autocomplete), otherwise geocode
    let fromGeo: { lat: number; lon: number; displayName: string } | null;
    let toGeo: { lat: number; lon: number; displayName: string } | null;

    if (fromLat != null && fromLon != null) {
      fromGeo = { lat: fromLat, lon: fromLon, displayName: fromAddress };
    } else {
      fromGeo = await geocode(fromAddress);
      if (!fromGeo) {
        return NextResponse.json(
          {
            error: `Could not find the location: "${fromAddress}". Please try a more specific address.`,
          },
          { status: 400 },
        );
      }
      // Small delay to respect Nominatim rate limits (1 req/sec)
      await new Promise((resolve) => setTimeout(resolve, 1100));
    }

    if (toLat != null && toLon != null) {
      toGeo = { lat: toLat, lon: toLon, displayName: toAddress };
    } else {
      if (fromLat == null) {
        // Only delay if we already made a geocode call above
        await new Promise((resolve) => setTimeout(resolve, 1100));
      }
      toGeo = await geocode(toAddress);
      if (!toGeo) {
        return NextResponse.json(
          {
            error: `Could not find the location: "${toAddress}". Please try a more specific address.`,
          },
          { status: 400 },
        );
      }
    }

    // Get driving route from OSRM
    const route = await getRoute(
      fromGeo.lat,
      fromGeo.lon,
      toGeo.lat,
      toGeo.lon,
    );
    if (!route) {
      return NextResponse.json(
        {
          error:
            "Could not calculate a driving route between these locations. They may not be reachable by road.",
        },
        { status: 400 },
      );
    }

    // Calculate fare
    const fare = PRICING.baseFare + route.distanceKm * PRICING.perKmRate;
    const finalFare = Math.max(fare, PRICING.minimumFare);

    return NextResponse.json({
      from: fromGeo.displayName,
      to: toGeo.displayName,
      distanceKm: route.distanceKm,
      durationMin: route.durationMin,
      fareEur: Math.round(finalFare * 100) / 100,
      currency: PRICING.currency,
    });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
