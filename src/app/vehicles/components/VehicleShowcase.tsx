"use client";
import React, { useMemo } from "react";
import { VehicleCategory, Brand } from "../types";
import CategoryTabs from "./CategoryTabs";
import VehicleSearch from "./VehicleSearch";
import VehicleList from "./VehicleList";
import FeaturedCategory from "./FeaturedCategory";
import { useTranslations, useLocale } from "next-intl";

interface VehicleShowcaseProps {
  categories: VehicleCategory[];
  selectedCategory: VehicleCategory;
  searchQuery: string;
}

const VehicleShowcase: React.FC<VehicleShowcaseProps> = ({
  categories,
  selectedCategory,
  searchQuery,
}) => {
  const t = useTranslations("vehicles");
  const locale = useLocale();

  const getCategoryName = (cat: VehicleCategory) => {
    return locale === "am"
      ? cat.categoryNameAm || cat.categoryNameEn
      : cat.categoryNameEn;
  };

  const filteredBrands = useMemo(() => {
    if (!searchQuery.trim()) {
      return selectedCategory.brands.filter((brand) => brand.models.length > 0);
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    return selectedCategory.brands
      .map((brand) => {
        const brandMatch =
          brand.brandNameEn.toLowerCase().includes(lowerCaseQuery) ||
          (brand.brandNameAm &&
            brand.brandNameAm.toLowerCase().includes(lowerCaseQuery));

        const matchingModels = brand.models.filter(
          (model) =>
            model.modelNameEn.toLowerCase().includes(lowerCaseQuery) ||
            (model.modelNameAm &&
              model.modelNameAm.toLowerCase().includes(lowerCaseQuery)),
        );

        if (brandMatch) return brand;
        if (matchingModels.length > 0)
          return { ...brand, models: matchingModels };
        return null;
      })
      .filter((v): v is Brand => v !== null && v.models.length > 0);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col animate-fade-in">
      <CategoryTabs categories={categories} getCategoryName={getCategoryName} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FeaturedCategory category={selectedCategory} />
        <VehicleList
          categoryImage={`https://api.efoyy.com/images/category/${selectedCategory.categoryImage}`}
          brands={filteredBrands}
        />
      </div>
    </div>
  );
};

export default VehicleShowcase;
