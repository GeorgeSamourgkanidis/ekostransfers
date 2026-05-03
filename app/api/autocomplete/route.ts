import { NextRequest, NextResponse } from "next/server";

const NOMINATIM_BASE = "https://nominatim.openstreetmap.org";
const USER_AGENT = "DemisDriver/1.0 (info@demisdriver.gr)";

interface NominatimResult {
  lat: string;
  lon: string;
  display_name: string;
  type: string;
  importance: number;
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q");

  if (!query || query.trim().length < 2) {
    return NextResponse.json([]);
  }

  try {
    const url = `${NOMINATIM_BASE}/search?q=${encodeURIComponent(query.trim())}&format=json&limit=5&countrycodes=gr&addressdetails=0`;

    const response = await fetch(url, {
      headers: { "User-Agent": USER_AGENT },
      next: { revalidate: 3600 }, // cache for 1 hour
    });

    if (!response.ok) {
      return NextResponse.json([]);
    }

    const results: NominatimResult[] = await response.json();

    const suggestions = results.map((r) => ({
      label: r.display_name,
      lat: parseFloat(r.lat),
      lon: parseFloat(r.lon),
    }));

    return NextResponse.json(suggestions);
  } catch {
    return NextResponse.json([]);
  }
}
