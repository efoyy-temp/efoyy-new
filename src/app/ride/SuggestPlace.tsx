import axios from "axios";
import { ComponentProps } from "react";
import AsyncSelect from "react-select/async";

type Props = ComponentProps<
  typeof AsyncSelect<{
    label: string;
    value: [number, number];
  }>
>;

interface PlaceResult {
  features: Feature[];
  type: string;
}

interface Feature {
  geometry: Geometry;
  type: string;
  properties: Properties;
}

interface Geometry {
  coordinates: number[];
  type: string;
}

interface Properties {
  osm_type: string;
  osm_id: number;
  extent?: number[];
  country: string;
  osm_key: string;
  countrycode: string;
  osm_value: string;
  name: string;
  type: string;
  city?: string;
  postcode?: string;
  locality?: string;
  street?: string;
  district?: string;
  county?: string;
  state?: string;
}

const SuggestPlace = (props: Props) => {
  const loadOptions = async (inputValue: string) => {
    if (!inputValue) return [];
    const res = await axios.get<PlaceResult>(
      `https://photon.komoot.io/api/?q=${encodeURIComponent(inputValue)}&lat=9.005&lon=38.763`,
    );
    res.data.features;
    return res.data.features.map((f) => ({
      label: f.properties.name,
      value: [f.geometry.coordinates[1], f.geometry.coordinates[0]] as [
        number,
        number,
      ],
    }));
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
          neutral0: "hsl(var(--background))",
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
        menuList: () => "!bg-neutral-900 !rounded-lg",
        option: (op) =>
          `!text-foreground/70 !text-sm ${op.isFocused ? "!bg-secondary" : ""} `,
      }}
      noOptionsMessage={() => null}
      {...props}
    />
  );
};

export default SuggestPlace;
