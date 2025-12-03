"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Search } from "lucide-react";

interface VehicleSearchProps {
  placeholder: string;
}

const VehicleSearch: React.FC<VehicleSearchProps> = ({ placeholder }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    router.push(pathname + "?" + createQueryString("query", query), {
      scroll: false,
    });
  }, [query, router, pathname, createQueryString]);

  return (
    <div className="relative w-full md:w-80 group">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search
          size={16}
          className="text-muted-foreground group-focus-within:text-primary transition-colors"
        />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="block w-full pl-10 pr-3 py-2.5 border rounded-xl bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium shadow-sm hover:shadow-md"
      />
    </div>
  );
};

export default VehicleSearch;
