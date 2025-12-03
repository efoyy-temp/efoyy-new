import React from "react";
import { Model } from "./types";

interface VehicleCardProps {
  model: Model;
  language: "en" | "am";
}

const VehicleCard: React.FC<VehicleCardProps> = ({ model, language }) => {
  const getModelName = () => {
    switch (language) {
      case "am":
        return model.modelNameAm || model.modelNameEn;
      default:
        return model.modelNameEn;
    }
  };

  return (
    <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      {/* Background Image */}
      <img
        src={`https://picsum.photos/seed/${model.modelNameEn}123/800/600`}
        alt={model.modelNameEn}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

      {/* Glassmorphic Name Tag (Centered) */}
      <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent to-30% ">
        <span className="text-white font-bold text-xl tracking-wide backdrop-blur-sm w-full shadow-sm text-center">
          {getModelName()}
        </span>
      </div>
    </div>
  );
};

export default VehicleCard;
