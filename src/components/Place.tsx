import { MapPin } from "lucide-react";
import { useState, useCallback } from "react";
import axios from "axios";
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { debounce } from "../lib/debounce";
import { useTranslations } from 'next-intl';

type PlaceProps = {
  label?: string;
  placeholder: string;
  isCurrent?: boolean;
  icon?: React.ReactNode;
  onChange: (location: [number, number], name: string) => void;
  className?: string;
  defaultLatLng?: [number, number];
  defaultName?: string;
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

type Location = {
  label: string;
  value: [number, number];
};

const Place = ({
  label,
  placeholder,
  isCurrent = false,
  icon = <MapPin size={18} />,
  onChange,
  className = "",
  defaultLatLng,
  defaultName,
}: PlaceProps) => {
  const [value, setValue] = useState<Location | null>(
    defaultLatLng && defaultName 
      ? { 
          label: defaultName, 
          value: defaultLatLng 
        } 
      : null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [locations, setLocations] = useState<Location[]>([]);
  const t = useTranslations();

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
          label: getDisplayName(f.properties),
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

  // Helper function to format display name from properties
  const getDisplayName = (props: Properties): string => {
    const parts = [];
    
    if (props.name) parts.push(props.name);
    
    // Add additional context if available
    const context = [];
    if (props.street && !props.name.includes(props.street)) context.push(props.street);
    if (props.district) context.push(props.district);
    if (props.city) context.push(props.city);
    
    if (context.length > 0) {
      parts.push(`(${context.join(', ')})`);
    }
    
    return parts.join(' ');
  };

  // Create a debounced version of fetchLocations
  const debouncedLoadOptions = useCallback(
    debounce((inputValue: string) => {
      fetchLocations(inputValue);
    }, 300),
    [],
  );

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium mb-2">{label}</label>
      )}
      <div className="relative w-full">
        <Combobox
          value={value}
          onChange={(val) => {
            setValue(val);
            if (val) onChange(val.value, val.label);
          }}
        >
          <div className="relative w-full">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
            <ComboboxInput
              aria-label={placeholder}
              displayValue={(location: Location | null) =>
                isCurrent ? t('map.yourLocation') : (location?.label ?? "")
              }
              placeholder={placeholder}
              onChange={(event) => {
                debouncedLoadOptions(event.target.value);
              }}
              className="bg-background w-full pl-10 pr-3 py-2.5 border rounded-md transition-all ease-in-out focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <ComboboxOptions
            anchor="bottom"
            transition
            className="absolute z-10 w-full mt-1 origin-top border transition duration-200 ease-out empty:invisible overflow-hidden shadow-lg bg-background rounded-md py-1 max-h-60 overflow-auto"
          >
            {isLoading && (
              <div className="px-5 py-2 text-sm opacity-40">
                <p>Loading...</p>
              </div>
            )}
            
            {isCurrent && (
              <ComboboxOption
                value={{
                  label: t('map.yourLocation'),
                  value: [] as any,
                }}
                className="text-sm px-3 py-2 cursor-pointer hover:bg-secondary/20 focus:bg-secondary/20"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  {t('map.yourLocation')}
                </div>
              </ComboboxOption>
            )}
            
            {!isLoading &&
              !error &&
              locations.map((location, index) => (
                <ComboboxOption
                  key={`${location.label}-${index}`}
                  value={location}
                  className="text-sm px-3 py-2 cursor-pointer hover:bg-secondary/20 focus:bg-secondary/20"
                >
                  {location.label}
                </ComboboxOption>
              ))}
              
            {error && (
              <div className="px-3 py-2 text-sm text-destructive">
                {error}
              </div>
            )}
          </ComboboxOptions>
        </Combobox>
      </div>
    </div>
  );
};

export default Place; 