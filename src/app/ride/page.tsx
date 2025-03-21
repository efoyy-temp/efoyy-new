"use client";
import MapLibreGlDirections, {
  LoadingIndicatorControl,
} from "@maplibre/maplibre-gl-directions";
import { Map, Marker, useMap } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
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

export default function MyComponent() {
  const { mymap } = useMap();
  const [directions, setDirections] =
    React.useState<MapLibreGlDirections | null>(null);

  const [startPlace, setStartPlace] = React.useState<[number, number]>();
  const [endPlace, setEndPlace] = React.useState<[number, number]>();

  React.useEffect(() => {
    if (!mymap) return;
    mymap.on("load", () => {
      console.log("loaded");
      const directions = new MapLibreGlDirections(mymap.getMap());
      setDirections(directions);
      mymap.addControl(new LoadingIndicatorControl(directions));
      directions.on('fetchroutesend', console.log)
    });
  }, [mymap]);

  React.useEffect(() => {
    if (!directions) return;
    if (!startPlace || !endPlace) {
      return;
    }

    directions.setWaypoints([
      [startPlace[1], startPlace[0]],
      [endPlace[1], endPlace[0]],
    ]);

  }, [directions, startPlace, endPlace]);

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <div className="flex items-center pt-14 flex-1 justify-center">
        <div className="flex gap-8 py-16 px-4 max-md:h-auto max-md:flex-col max-sm:px-4 w-full md:items-center max-w-screen-xl">
          <div className="flex flex-col flex-1 items-start">
            <div className="flex flex-col gap-4 items-start self-stretch">
              <div className="space-y-2">
                <div className="self-stretch text-sm font-semibold text-foreground">
                  Amazing pricing
                </div>
                <div className="self-stretch text-6xl bg-gradient-to-r from-foreground to-foreground/70 text-clip text-transparent font-extrabold bg-clip-text max-sm:text-4xl">
                  Check Out Our Prices
                </div>
              </div>
            </div>
            <div className="flex flex-col self-stretch max-w-sm gap-6 pl-3 w-full my-6 md:my-12 relative">
              <div className=" h-[76px] absolute top-6 left-0">
                <div className="h-full w-0.5 bg-foreground/80 absolute "></div>
                <div className="size-2 bg-foreground/80 absolute top-0 left-px rotate-45 -translate-x-1/2 -translate-y-1/2 "></div>
                <div className="size-2 bg-foreground/80 absolute bottom-0 left-px rotate-45 -translate-x-1/2 translate-y-1/2 "></div>
              </div>
              <SuggestPlace
                placeholder="Where you are heading"
                onChange={(place) => setStartPlace(place?.value)}
              />
              <SuggestPlace
                placeholder="Where you are now"
                onChange={(place) => setEndPlace(place?.value)}
              />
              <button
                onClick={() => {
                  navigator.geolocation.getCurrentPosition((position) => {
                    if (directions)
                      directions.addWaypoint(
                        [position.coords.latitude, position.coords.longitude],
                        0,
                      );
                    setStartPlace([
                      position.coords.latitude,
                      position.coords.longitude,
                    ]);
                  });
                }}
                className="flex hover:bg-foreground/10 rounded-lg transition py-2 px-3 self-start gap-2 items-center"
              >
                <MapPin size={20} />
                <div className="text-sm font-medium text-foreground">
                  Use current location
                </div>
              </button>
            </div>
            <a className=" mt-6 px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-md cursor-pointer">
              See Prices
            </a>
          </div>
          <div className="flex-1 max-md:w-full max-md:aspect-square md:max-w-[min(512px,40%)]  md:h-[60vh]">
            <div className="size-full rounded-3xl overflow-hidden relative">
              <Map
                initialViewState={{
                  latitude: INITIAL_CAMERA.center.lat,
                  longitude: INITIAL_CAMERA.center.lng,
                  zoom: INITIAL_CAMERA.zoom,
                }}
                id="mymap"
                style={{ width: "100%", height: "100%" }}
                mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
              >
                {startPlace && (
                  <Marker latitude={startPlace[0]} longitude={startPlace[1]} />
                )}
                {endPlace && (
                  <Marker
                    color="red"
                    latitude={endPlace[0]}
                    longitude={endPlace[1]}
                  />
                )}
              </Map>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
