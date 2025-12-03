import React from "react";
import { Model } from "../types";
import { cn } from "@/lib/utils";

interface VehicleCardProps {
  model: Model;
  categoryImage?: string | null;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ model, categoryImage }) => {
  return (
    <div
      className={cn(
        "group relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent",
      )}
    >
      <img
        src={categoryImage ?? ""}
        alt={model.modelNameEn}
        className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60  to-black/10 to-50% transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex items-end p-4">
        <span className="font-bold text-lg text-white tracking-wide">
          {model.modelNameEn}
        </span>
      </div>
    </div>
  );
};

export default VehicleCard;
