import React from "react";
import { VehicleCategory } from "./types";
import { ArrowRight } from "lucide-react";

interface CategoryGridProps {
  categories: VehicleCategory[];
  onSelect: (category: VehicleCategory) => void;
  language: "en" | "am";
}

const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  onSelect,
  language,
}) => {
  const getCategoryName = (cat: VehicleCategory) => {
    switch (language) {
      case "am":
        return cat.categoryNameAm || cat.categoryNameEn;
      default:
        return cat.categoryNameEn;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
      {categories.map((cat, index) => (
        <button
          key={cat.categoryNameEn}
          onClick={() => onSelect(cat)}
          className="group relative h-64 md:h-80 w-full rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 text-left"
        >
          {/* Background Image */}
          <img
            src={cat.categoryImage}
            alt={cat.categoryNameEn}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:via-black/50 transition-colors"></div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
            <div className="transform transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              {/* Marker Icon & Name */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center p-1.5 border border-white/20">
                  <img
                    src={cat.categoryMarkerImage}
                    alt=""
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  {getCategoryName(cat)}
                </h3>
              </div>

              {/* Price Estimate */}
              <p className="text-emerald-300 font-medium mb-4 pl-11 opacity-90">
                {cat.priceEstimate || "Contact for pricing"}
              </p>

              {/* Description - Fades in on hover */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                <div className="overflow-hidden">
                  <p className="text-gray-300 text-sm leading-relaxed pl-11 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {cat.comment}
                  </p>
                  <div className="pl-11 flex items-center text-white text-sm font-bold gap-2 group-hover:gap-4 transition-all">
                    <span>Explore Fleet</span>
                    <ArrowRight size={16} className="text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;
