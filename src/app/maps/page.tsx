import { MapProvider } from "@/providers/map-provider";
import MapComponent from "@/components/ui/map";

export default function Home() {
  return (
    <MapProvider>
      <main>
        <MapComponent />
      </main>
    </MapProvider>
  );
}