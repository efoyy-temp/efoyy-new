"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { VehicleCategory } from "../types";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  categories: VehicleCategory[];
  getCategoryName: (category: VehicleCategory) => string;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  getCategoryName,
}) => {
  const searchParams = useSearchParams();
  const selectedCategoryName = searchParams.get("category");

  return (
    <div
      style={{
        boxShadow: `inset 2px 2px 6px 0 rgba(255, 255, 255, 0.10),
          inset -2px -2px 6px 0px rgba(255, 255, 255, 0.10),
          0 2px 6px 0 rgba(0, 0, 0, 0.2)`,
      }}
      className="sticky backdrop-blur-[10px] top-16 z-30 border rounded-2xl border-white/10 bg-neutral-300/25 dark:bg-background/20 self-center mx-4 sm:mx-6 lg:-mx-8 py-2 mb-8 shadow-sm"
    >
      <div className="flex flex-wrap gap-1 sm:gap-2 justify-evenly px-2">
        {categories.map((cat) => (
          <Link
            key={cat.categoryNameEn}
            href={`/vehicles?category=${encodeURIComponent(cat.categoryNameEn)}`}
            scroll={false}
            className={cn(
              "flex items-center gap-2 px-2 sm:px-5 py-1 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300",
              selectedCategoryName === cat.categoryNameEn
                ? "bg-foreground text-background shadow-lg scale-105"
                : "bg-secondary text-secondary-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {getCategoryName(cat)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
