import React from "react";
import { Brand, Model } from "../types";
import VehicleCard from "./VehicleCard";
import { useTranslations } from "next-intl";

interface VehicleListProps {
  brands: Brand[];
  categoryImage?: string | null;
}

const VehicleList: React.FC<VehicleListProps> = ({ brands, categoryImage }) => {
  const t = useTranslations("vehicles");

  if (brands.length === 0) {
    return null;
  }
  const models = brands
    .map((brand) => brand.models)
    .flat()
    .slice(0, 15);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-muted-foreground text-lg font-medium">
          Some of the models of this category
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-6 ">
        {models.map((model) => (
          <VehicleCard
            key={model.modelNameEn}
            model={model}
            categoryImage={categoryImage}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleList;
