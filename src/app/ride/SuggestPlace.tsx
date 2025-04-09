import axios from "axios";
import AsyncSelect from "react-select/async";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useState, useCallback } from "react"; // Import useCallback
import { debounce } from "../../lib/debounce"; // Import debounce

type Props = {
  isCurrent?: boolean;
  placeholder: string;
  onChange: (location: [number, number]) => void;
};

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

type Loc = {
  label: string;
  value: [number, number];
};

const SuggestPlace = (props: Props) => {
  const [value, setValue] = useState<Loc | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [locations, setLocations] = useState<Loc[]>([]);

  // Define the core logic for loading options
  const fetchLocations = async (inputValue: string) => {
    if (!inputValue) {
      setLocations([]); // Clear locations if input is empty
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const res = await axios.get<PlaceResult>(
        `https://photon.komoot.io/api/?q=${encodeURIComponent(inputValue)}&lat=9.005&lon=38.763&&limit=8`,
      );
      setLocations(
        res.data.features.map((f) => ({
          label: f.properties.name,
          value: [f.geometry.coordinates[1], f.geometry.coordinates[0]],
        })),
      );
    } catch (e) {
      setError("something went wrong");
      setLocations([]); // Clear locations on error
    } finally {
      setIsLoading(false);
    }
  };

  // Create a debounced version of fetchLocations
  // useCallback ensures the debounced function is not recreated on every render
  // Adjust the debounce delay (e.g., 300ms) as needed
  const debouncedLoadOptions = useCallback(
    debounce((inputValue: string) => {
      fetchLocations(inputValue);
    }, 300),
    [], // Empty dependency array means this callback is created once
  );

  return (
    <>
      <Combobox
        value={value}
        onChange={(val) => {
          setValue(val);
          if (val) props.onChange(val?.value);
        }}
      >
        <ComboboxInput
          aria-label="Assignee"
          displayValue={(location: Loc | null) =>
            props.isCurrent ? "Here" : (location?.label ?? "")
          }
          placeholder={props.placeholder}
          onChange={(event) => {
            // Call the debounced function
            debouncedLoadOptions(event.target.value);
          }}
          className={
            "bg-background px-3 py-2.5 data-[focus]:border-primary !placeholder:text-[#797979CA] !text-foreground transition-all ease-in-out border rounded-md w-full" // Added w-full for consistency
          }
        />
        <ComboboxOptions
          anchor="bottom"
          transition
          className="origin-top border transition duration-200 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0 bg-neutral-950 mt-2 rounded-lg py-2 px-1 w-[var(--input-width)]"
        >
          {isLoading && (
            <div className="px-5 py-2 text-sm opacity-40">
              <p>Loading...</p>
            </div>
          )}
          {!isLoading &&
            !error &&
            locations.map((location, index) => (
              <ComboboxOption
                key={location.label + index}
                value={location}
                className={`text-foreground/70 !text-sm data-[focus]:bg-secondary/80  p-2 rounded `}
              >
                {location.label}
              </ComboboxOption>
            ))}
          {props.isCurrent && (
            <ComboboxOption
              value={{
                label: "Here",
                value: [],
              }}
              className={`text-foreground/70 !text-sm data-[focus]:bg-secondary/80  p-2 rounded `}
            >
              Here
            </ComboboxOption>
          )}
          {error && (
            <ComboboxOption
              value={error}
              className={`text-foreground/70 !text-sm data-[focus]:bg-secondary/80  p-2 rounded `}
            >
              {error}
            </ComboboxOption>
          )}
        </ComboboxOptions>
      </Combobox>
    </>
  );
};

export default SuggestPlace;
