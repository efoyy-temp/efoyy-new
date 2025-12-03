import React from "react";
import { VehicleCategory } from "../types";
import { useTranslations } from "next-intl";

interface FeaturedCategoryProps {
  category: VehicleCategory;
}

const FeaturedCategory: React.FC<FeaturedCategoryProps> = ({ category }) => {
  const t = useTranslations("vehicles");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 my-12">
      <div className="w-full aspect-video rounded-2xl overflow-hidden bg-secondary">
        <img
          src={`https://api.efoyy.com/images/category/${category.categoryImage}`}
          alt={category.categoryNameEn}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          {/* @ts-expect-error this is valid */}
          {t(`${category.categoryNameEn}.name`, {
            defaultMessage: category.categoryNameEn,
          })}
        </h2>
        <p className="text-muted-foreground max-w-prose">
          {/* @ts-expect-error this is valid */}
          {t(`${category.categoryNameEn}.comment`, {
            defaultMessage: category.comment,
          })}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCategory;
