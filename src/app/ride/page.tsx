"use client";
import MapLibreGlDirections, {
  LoadingIndicatorControl,
} from "@maplibre/maplibre-gl-directions";
import { Map, Marker, useMap } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { Clock, Loader2, MapPin, Navigation } from "lucide-react";
import * as React from "react";
import { gql, useLazyQuery } from "@apollo/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations, useLocale } from "next-intl";
import Place from "@/components/Place";
import { Button } from "@/components/ui/button";

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

export default function RidePage() {
  const t = useTranslations("ridePage");
  const mapT = useTranslations("map");
  const locale = useLocale();
  const { mymap } = useMap();
  const [isHere, setIsHere] = React.useState(false);
  const [directions, setDirections] =
    React.useState<MapLibreGlDirections | null>(null);
  const [cardOpen, setCardOpen] = React.useState(false);

  const [getPrice, queryInfo] = useLazyQuery(getPriceQuery, {
    variables: {
      userInput: {
        distance: 2923,
        duration: 3232,
      },
    },
  });

  const [startPlace, setStartPlace] = React.useState<[number, number]>();
  const [startPlaceName, setStartPlaceName] = React.useState<string>();
  const [endPlace, setEndPlace] = React.useState<[number, number]>();
  const [endPlaceName, setEndPlaceName] = React.useState<string>();
  const [userInput, setUserInput] = React.useState<{
    distance: number;
    duration: number;
  }>();

  const handleClick = () => {
    if (!startPlace || !endPlace || !userInput) {
      console.warn("Start place, end place, or route data is missing.");
      return;
    }
    console.log({ userInput });
    setCardOpen(true);
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
            duration: (event.data?.routes[0].duration as number) / 60,
            distance: (event.data?.routes[0].distance as number) / 1000,
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
      setStartPlaceName(mapT("yourLocation"));
    });
  };

  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <Navbar />
        <div className="flex items-center pt-14 flex-1 justify-center">
          <div className="flex gap-8 py-16 px-4 max-md:h-auto max-md:flex-col max-sm:px-4 w-full md:items-center max-w-screen-xl">
            <div className="flex flex-col flex-1 items-start relative">
              <div className="flex flex-col gap-4 items-start self-stretch">
                <div className="space-y-2">
                  <div className="self-stretch text-sm font-semibold text-foreground">
                    {t("title")}
                  </div>
                  <div className="self-stretch bg-gradient-to-r from-foreground to-foreground/70 text-clip text-transparent font-extrabold bg-clip-text text-3xl sm:text-4xl md:text-5xl ">
                    {t("subtitle")}
                  </div>
                </div>
              </div>
              <div className="flex flex-col self-stretch max-w-sm gap-5 pl-3 w-full my-6 md:my-9 relative">
                <div className="h-[76px] absolute top-6 left-0">
                  <div className="h-full w-0.5 bg-foreground/80 absolute"></div>
                  <div className="size-2 bg-foreground/80 absolute top-0 left-px rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="size-2 bg-foreground/80 absolute bottom-0 left-px rotate-45 -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <Place
                  placeholder={t("whereNow")}
                  isCurrent={isHere}
                  icon={<MapPin size={18} />}
                  defaultLatLng={startPlace}
                  defaultName={startPlaceName}
                  onChange={(place, name) => {
                    setIsHere(false);
                    setStartPlace(place);
                    setStartPlaceName(name);
                  }}
                />

                <Place
                  placeholder={t("whereHeading")}
                  icon={<Navigation size={18} />}
                  defaultLatLng={endPlace}
                  defaultName={endPlaceName}
                  onChange={(place, name) => {
                    setEndPlace(place);
                    setEndPlaceName(name);
                  }}
                />

                <button
                  onClick={handleCurrentLocationClick}
                  className="flex hover:bg-foreground/10 rounded-lg transition py-2 px-3 self-start gap-2 items-center"
                >
                  <MapPin size={20} />
                  <div className="text-sm font-medium text-foreground">
                    {t("useCurrentLocation")}
                  </div>
                </button>
              </div>

              <button
                onClick={handleClick}
                disabled={isLoading || !startPlace || !endPlace || !userInput} // Disable if loading or inputs/route missing
                className="flex items-center disabled:opacity-65 gap-2 px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-md cursor-pointer transition-opacity" // Removed mt-6, will use gap in parent
              >
                {isLoading && <Loader2 size={16} className="animate-spin" />}{" "}
                {t("seePrices")}
              </button>

              <div
                className={`mt-6 bg-gradient-to-tl from-white to-stone-100 dark:from-black dark:to-stone-900 shadow-md z-10 absolute top-4 py-6 px-4 sm:px-8 dark:shadow-neutral-600/5 rounded-xl border dark:border-stone-900 flex flex-col space-y-6 items-center justify-center motion-duration-[250ms] motion-duration-150/opacity ${cardOpen
                    ? "motion-scale-in-[0.25] motion-translate-x-in-[0%] motion-translate-y-in-[45%] motion-opacity-in-[0%]"
                    : "motion-scale-out-[0.25] motion-translate-x-out-[0%] motion-translate-y-out-[45%] motion-opacity-out-[0%]"
                  }`}
              >
                {!isLoading && hasResult && (
                  <>
                    {priceEstimate?.price && (
                      <div className="rounded-lg">
                        <span className="font-medium text-secondary-foreground block">
                          {t("estimatedPrice")}
                        </span>
                        <p className="text-3xl font-bold mb-4 text-primary">
                          {Number(priceEstimate.price).toLocaleString()} Birr
                        </p>

                        {startPlaceName && endPlaceName && (
                          <div className="mt-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-primary" />
                              <span>{startPlaceName}</span>
                            </div>
                            <div className="w-0.5 h-4 bg-muted-foreground/30 ml-2"></div>
                            <div className="flex items-center gap-2">
                              <Navigation size={16} className="text-primary" />
                              <span>{endPlaceName}</span>
                            </div>
                          </div>
                        )}

                        <div className="flex justify-between mt-6">
                          <div className="flex flex-col gap-2 mt-4">
                            <div className="text-sm font-medium text-muted-foreground">
                              {t("estimatedTime")}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={16} className="text-primary" />
                              <span>
                                {userInput?.duration.toLocaleString(locale, {
                                  style: "unit",
                                  unit: "minute",
                                })}{" "}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 mt-4">
                            <div className="text-sm font-medium text-muted-foreground">
                              {t("estimatedDistance")}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-primary" />
                              <span>
                                {userInput?.distance.toLocaleString(locale, {
                                  style: "unit",
                                  unit: "kilometer",
                                })}{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {priceEstimate?.errorMessage && (
                      <p className="text-sm font-medium text-red-500 p-4 bg-destructive/10 rounded-lg">
                        Error: {priceEstimate.errorMessage}
                      </p>
                    )}
                  </>
                )}
                <Button
                  size="lg"
                  className="rounded-lg self-end"
                  onClick={() => setCardOpen(!cardOpen)}
                >
                  {t("close") || "Close"}
                </Button>
              </div>
            </div>
            <div className="flex-1 max-md:w-full max-md:aspect-square md:max-w-[min(512px,60%)]  md:h-[60vh]">
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
