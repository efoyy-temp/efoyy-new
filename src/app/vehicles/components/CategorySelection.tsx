import React from "react";
import { Sparkles } from "lucide-react";
import { VehicleCategory } from "../types";
import CategoryGrid from "./CategoryGrid";
import { useTranslations } from "next-intl";

interface CategorySelectionProps {
  categories: VehicleCategory[];
}

const CategorySelection: React.FC<CategorySelectionProps> = ({
  categories,
}) => {
  const t = useTranslations("vehicles");

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-12 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-muted-foreground text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles size={12} className="text-primary" />
          {t("selectCategory")}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
          {t("chooseRide")}
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {t("categorySelectionSubtitle")}
        </p>
      </div>
      <CategoryGrid categories={categories} />
    </div>
  );
};

export default CategorySelection;
