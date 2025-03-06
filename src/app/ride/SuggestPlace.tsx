import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { ComponentProps, useEffect, useState } from "react";
import AsyncSelect from "react-select/async";

type Props = ComponentProps<
  typeof AsyncSelect<{
    label: string;
    value: google.maps.places.PlaceGeometry | undefined;
  }>
>;

const SuggestPlace = (props: Props) => {
  const map = useMap();
  const placesLib = useMapsLibrary("places");
  const [svc, setSvc] = useState<google.maps.places.PlacesService | null>(null);

  useEffect(() => {
    if (!placesLib || !map) return;

    const svc = new placesLib.PlacesService(map);
    setSvc(svc);
  }, [placesLib, map]);

  const loadOptions = (
    inputValue: string,
    callback: (
      options: {
        label: string;
        value: google.maps.places.PlaceGeometry | undefined;
      }[],
    ) => void,
  ) => {
    if (inputValue && svc)
      svc.textSearch(
        {
          query: inputValue,
        },
        (value) => {
          callback(
            value?.map((place) => ({
              label: place.name ?? "",
              value: place.geometry,
            })) ?? [],
          );
        },
      );
  };

  return (
    <AsyncSelect
      loadOptions={loadOptions}
      theme={(theme) => ({
        ...theme,
        borderRadius: 8,
        colors: {
          ...theme.colors,
          primary: "#FF6E61",
          neutral0: "#161616",
        },
      })}
      classNames={{
        indicatorSeparator: () => "!hidden",
        dropdownIndicator: () => "!text-[#79797993]",
        control: (co) =>
          `!border ${co.isFocused ? "border-primary" : "!border-[#79797993]"}`,
        input: () =>
          "!py-1 !placeholder:text-[#797979CA] !text-foreground transition-all ease-in-out",
        singleValue: () => "!text-foreground",
        menuList: () => "!bg-[#161616] !rounded-lg",
        option: (op) =>
          `!text-foreground/70 !text-sm ${op.isFocused ? "!bg-secondary" : ""} `,
      }}
      noOptionsMessage={() => null}
      {...props}
    />
  );
};

export default SuggestPlace;
