"use client";

import { Map, Marker, useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import {
  MapContainer,
  Marker as LeftMarker,
  Popup,
  TileLayer,
} from "react-leaflet";
import Navbar from "@/src/components/Navbar";
import { MapPin } from "lucide-react";
import * as React from "react";
import SuggestPlace from "./SuggestPlace";

const INITIAL_CAMERA = {
  zoom: 12,
  center: {
    lat: 9.005,
    lng: 38.763,
  },
};

const position = [51.505, -0.09];
export default function MyComponent() {
  const { flyTo } = useMapAnimation();

  const map = useMap();
  const [startPlace, setStartPlace] = React.useState<[number, number]>();
  const [endPlace, setEndPlace] = React.useState<[number, number]>();

  React.useEffect(() => {
    if (!map) return;
    const bounds = new google.maps.LatLngBounds();
    if (startPlace)
      bounds.extend({
        lat: startPlace[0],
        lng: startPlace[1],
      });
    if (endPlace)
      bounds.extend({
        lat: endPlace[0],
        lng: endPlace[1],
      });

    const zoom = calculateZoom(
      bounds,
      map.getDiv().clientWidth,
      map.getDiv().clientWidth,
    );
    flyTo(bounds.getCenter().toJSON(), zoom);
  }, [startPlace, endPlace]);

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <div className="flex items-center flex-1 justify-center">
        <div className="flex gap-8 py-0 px-4 max-md:h-auto max-md:flex-col max-sm:p-4 w-full md:items-center max-w-screen-xl">
          <div className="flex flex-col flex-1 items-start">
            <div className="flex flex-col gap-4 items-start self-stretch">
              <div className="space-y-2">
                <div className="self-stretch text-sm font-semibold text-foreground">
                  Amazing pricing
                </div>
                <div className="self-stretch text-6xl bg-gradient-to-r from-white to-[#999999] text-clip text-transparent font-extrabold bg-clip-text max-sm:text-4xl">
                  Check Out Our Prices
                </div>
              </div>
            </div>
            <div className="flex flex-col self-stretch max-w-sm gap-6 pl-3 w-full my-6 md:my-12 relative">
              <div className=" h-[76px] absolute top-6 left-0">
                <div className="h-full w-0.5 bg-white/80 absolute "></div>
                <div className="size-2 bg-white/80 absolute top-0 left-px rotate-45 -translate-x-1/2 -translate-y-1/2 "></div>
                <div className="size-2 bg-white/80 absolute bottom-0 left-px rotate-45 -translate-x-1/2 translate-y-1/2 "></div>
              </div>

              <SuggestPlace
                placeholder="Where you are heading"
                onChange={(place) => setStartPlace(place?.value)}
              />
              <SuggestPlace
                placeholder="Where you are now"
                onChange={(place) => setEndPlace(place?.value)}
              />
              <div className="flex gap-2 items-center">
                <MapPin size={20} />
                <div className="text-sm font-medium text-white">
                  Use current location
                </div>
              </div>
            </div>
            <a className=" mt-6 px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-md cursor-pointer">
              See Prices
            </a>
          </div>
          <div className="flex-1 max-md:w-full max-md:aspect-square md:max-w-[min(512px,40%)]  md:h-[60vh]">
            <div className="size-full rounded-3xl overflow-hidden relative">
              <Map
                mapTypeControl={false}
                fullscreenControl={false}
                defaultZoom={INITIAL_CAMERA.zoom}
                defaultCenter={INITIAL_CAMERA.center}
                colorScheme="DARK"
                mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPID || "DEMO_MAP_ID"}
              >
                {startPlace && (
                  <Marker
                    position={{
                      lat: startPlace[0],
                      lng: startPlace[1],
                    }}
                  />
                )}
                {endPlace && (
                  <Marker
                    position={{
                      lat: endPlace[0],
                      lng: endPlace[1],
                    }}
                  />
                )}
                {startPlace && endPlace && (
                  <Directions start={startPlace} end={endPlace} />
                )}
              </Map>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80vw] h-[600px] bg-red-700 overflow-hidden">
        <MapContainer center={[INITIAL_CAMERA.center.lat, INITIAL_CAMERA.center.lng]} zoom={14} className="size-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LeftMarker position={[INITIAL_CAMERA.center.lat, INITIAL_CAMERA.center.lng]}>
            <Popup>
              A pretty CSS3 popup. <br />
            </Popup>
          </LeftMarker>
        </MapContainer>
      </div>
    </div>
  );
}

function Directions({
  start,
  end,
}: {
  start: [number, number];
  end: [number, number];
}) {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [dxnService, setDxnService] =
    React.useState<google.maps.DirectionsService>();
  const [dxnRenderer, setDxnRenderer] =
    React.useState<google.maps.DirectionsRenderer>();

  React.useEffect(() => {
    if (!routesLibrary || !map) return;
    setDxnService(new routesLibrary.DirectionsService());
    setDxnRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  React.useEffect(() => {
    if (!dxnService || !dxnRenderer) return;
    dxnService
      .route({
        origin: {
          lat: start[0],
          lng: start[1],
        },

        destination: {
          lat: end[0],
          lng: end[1],
        },
        travelMode: google.maps.TravelMode.DRIVING,
        optimizeWaypoints: true,
      })
      .then((res) => {
        dxnRenderer.setDirections(res);
        dxnRenderer.setOptions({
          suppressMarkers: true,
        });
      });
  }, [dxnService, dxnRenderer, location, start, end]);

  return null;
}

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

function useMapAnimation() {
  const map = useMap();

  const flyTo = React.useCallback(
    (toLatLng: google.maps.LatLngLiteral, toZoom: number) => {
      const startTime = performance.now();
      if (!map) return;

      const { lat, lng } = map.getCenter()?.toJSON() || { lat: 0, lng: 0 };
      const zoom = map.getZoom() || 0;
      let frame: number | undefined;

      function loop() {
        if (!map) return;
        const now = performance.now();
        const elapsed = now - startTime;
        let t = elapsed / 700;
        if (t > 1) t = 1;
        const easedT = easeOutQuart(t);
        if (t >= 1) {
          map.moveCamera({ center: toLatLng, zoom: toZoom });
          if (frame) cancelAnimationFrame(frame);
          return;
        }
        const newLat = lat + (toLatLng.lat - lat) * easedT;
        const newLng = lng + (toLatLng.lng - lng) * easedT;
        const newZoom = zoom + (toZoom - zoom) * easedT;
        map.moveCamera({
          center: {
            lat: newLat,
            lng: newLng,
          },
          zoom: newZoom,
        });
        frame = requestAnimationFrame(loop);
      }
      loop();
    },
    [map],
  );

  React.useEffect(() => {
    console.log("map changed");
  }, [map]);
  return { flyTo };
}

function calculateZoom(
  bounds: google.maps.LatLngBounds,
  mapWidth: number,
  mapHeight: number,
) {
  const WORLD_DIM = { width: 256, height: 256 };

  function latRad(lat: number) {
    const sin = Math.sin((lat * Math.PI) / 180);
    const radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
    return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
  }

  function zoom(mapPx: number, worldPx: number, fraction: number) {
    return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
  }

  const ne = bounds.getNorthEast();
  const sw = bounds.getSouthWest();

  const latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;
  const lngDiff = ne.lng() - sw.lng();
  const lngFraction = (lngDiff < 0 ? lngDiff + 360 : lngDiff) / 360;

  const latZoom = zoom(mapHeight, WORLD_DIM.height, latFraction);
  const lngZoom = zoom(mapWidth, WORLD_DIM.width, lngFraction);

  return Math.min(latZoom, lngZoom);
}
