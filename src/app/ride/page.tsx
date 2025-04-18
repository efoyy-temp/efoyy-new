"use client";
import MapLibreGlDirections, {
  LoadingIndicatorControl,
} from "@maplibre/maplibre-gl-directions";
import { Map, Marker, useMap } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { Loader2, MapPin } from "lucide-react";
import * as React from "react";
import SuggestPlace from "./SuggestPlace";
import { gql, useLazyQuery } from "@apollo/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "next-themes";

const INITIAL_CAMERA = {
  zoom: 12,
  center: {
    lat: 9.005,
    lng: 38.763,
  },
};

const getPriceQuery = gql`
  query CalcPriceEstimate($userInput: calcPriceEstimateInputType) {
    calcPriceEstimate(userInput: $userInput) {
      price
      statusCode
      errorMessage
    }
  }
`;

export default function MyComponent() {
  const { theme } = useTheme();
  const { mymap } = useMap();
  const [isHere, setIsHere] = React.useState(false);
  const [directions, setDirections] =
    React.useState<MapLibreGlDirections | null>(null);

  const [getPrice, queryInfo] = useLazyQuery(getPriceQuery, {
    variables: {
      userInput: {
        distance: 2923,
        duration: 3232,
      },
    },
  });

  console.log(queryInfo?.data?.calcPriceEstimate);

  const [startPlace, setStartPlace] = React.useState<[number, number]>();
  const [endPlace, setEndPlace] = React.useState<[number, number]>();
  const [userInput, setUserInput] = React.useState<{
    distance: number;
    duration: number;
  }>();

  const handleClick = () => {
    if (!startPlace || !endPlace || !userInput) {
      // Optionally handle the case where inputs are missing
      console.warn("Start place, end place, or route data is missing.");
      // Maybe show a user-facing message here
      return;
    }
    console.log({ userInput });
    getPrice({
      variables: {
        userInput,
      },
    });
  };

  React.useEffect(() => {
    if (!mymap) return;
    mymap.on("load", () => {
      console.log("loaded");
      const directions = new MapLibreGlDirections(mymap.getMap());
      setDirections(directions);
      mymap.addControl(new LoadingIndicatorControl(directions));
      directions.on("fetchroutesend", (event) => {
        console.log(event.data);
        if (event.data?.code == "Ok" && event.data?.routes?.length > 0)
          setUserInput({
            duration: event.data?.routes[0].duration as number,
            distance: event.data?.routes[0].distance as number,
          });
      });
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

  const priceEstimate = queryInfo.data?.calcPriceEstimate;
  const isLoading = queryInfo.loading;
  const hasResult = !!priceEstimate; // Check if we have any result (price or error)

  const handleCurrentLocationClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      // Update state first
      const currentLoc: [number, number] = [
        position.coords.latitude,
        position.coords.longitude,
      ];
      setIsHere(true);
      setStartPlace(currentLoc);

      // Then update directions if available
    });
  };

  return (
    <>
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
                  <div className="self-stretch bg-gradient-to-r from-foreground to-foreground/70 text-clip text-transparent font-extrabold bg-clip-text text-3xl sm:text-4xl md:text-5xl ">
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
                {/* ... existing code for input decoration and SuggestPlace components ... */}
                <SuggestPlace
                  placeholder="Where are you now?" // Swapped placeholders for clarity
                  isCurrent={isHere}
                  onChange={(place) => {
                    setIsHere(false);
                    return setStartPlace(place);
                  }}
                />
                <SuggestPlace
                  placeholder="Where are you heading?" // Swapped placeholders for clarity
                  onChange={setEndPlace}
                />
                <button
                  onClick={handleCurrentLocationClick}
                  className="flex hover:bg-foreground/10 rounded-lg transition py-2 px-3 self-start gap-2 items-center"
                >
                  <MapPin size={20} />
                  <div className="text-sm font-medium text-foreground">
                    Use current location
                  </div>
                </button>
              </div>
              <button
                onClick={handleClick}
                disabled={isLoading || !startPlace || !endPlace || !userInput} // Disable if loading or inputs/route missing
                className="flex items-center disabled:opacity-65 gap-2 px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-md cursor-pointer transition-opacity" // Removed mt-6, will use gap in parent
              >
                {isLoading && <Loader2 size={16} className="animate-spin" />}{" "}
                {/* Use animate-spin */}
                See Prices
              </button>

              {/* Result Display Area */}
              <div className="mt-2 h-10">
                {" "}
                {/* Added fixed height container to prevent layout shifts */}
                {!isLoading && hasResult && (
                  <>
                    {priceEstimate?.price && (
                      <p className="text-xl font-semibold text-foreground mt-4">
                        <span className="text-sm font-regular block opacity-85">
                          Estimated Price{" "}
                        </span>
                        {Number(priceEstimate.price).toLocaleString()} Birr
                        {/* Assuming ETB */}
                      </p>
                    )}
                    {priceEstimate?.errorMessage && (
                      <p className="text-sm font-medium text-red-500">
                        Error: {priceEstimate.errorMessage}
                      </p>
                    )}
                  </>
                )}
              </div>
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
                  mapStyle={
                    "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
                  }
                >
                  {startPlace && (
                    <Marker
                      latitude={startPlace[0]}
                      longitude={startPlace[1]}
                    />
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

      <Footer />
    </>
  );
}
