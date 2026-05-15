import { permanentRedirect } from "next/navigation";

export default function RoutesIndex() {
  return permanentRedirect("/services");
}
