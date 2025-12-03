"use client";
import React, { useState, useMemo } from "react";
import { VehicleCategory } from "./types";
import Categories from "../../../vehicles.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryGrid from "./CategoryTabs"; // Using the repurposed file
import VehicleCard from "./VehicleCard";
import { Search, Sparkles } from "lucide-react";
import { useLocale } from "next-intl";

const App: React.FC = () => {
  const language = useLocale();
  const [selectedCategory, setSelectedCategory] =
    useState<VehicleCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const getLocalizedText = (en: string, am: string) => {
    switch (language) {
      case "am":
        return am || en;
      default:
        return en;
    }
  };

  const getCategoryName = (cat: VehicleCategory) => {
    return getLocalizedText(cat.categoryNameEn, cat.categoryNameAm);
  };

  // Filter vehicles based on search query
  const filteredBrands = useMemo(() => {
    if (!selectedCategory) return [];
    if (!searchQuery.trim())
      return selectedCategory.brands.filter((l) => l.models.length > 0);

    const query = searchQuery.toLowerCase();

    // Filter logic: Check brand name OR model name
    return selectedCategory.brands
      .map((brand) => {
        const brandMatch =
          brand.brandNameEn.toLowerCase().includes(query) ||
          brand.brandNameAm.includes(query) ||
          brand.brandNameTi.includes(query) ||
          brand.brandNameOr.includes(query);

        const matchingModels = brand.models.filter(
          (model) =>
            model.modelNameEn.toLowerCase().includes(query) ||
            model.modelNameAm.includes(query) ||
            model.modelNameTi.includes(query) ||
            model.modelNameOr.includes(query),
        );

        // If brand matches, return all models. If brand doesn't match, return only matching models.
        // If neither matches, return null (to be filtered out later)
        if (brandMatch) return brand;
        if (matchingModels.length > 0)
          return { ...brand, models: matchingModels };
        return null;
      })
      .filter((v) => v?.models?.length && v?.models?.length > 0)
      .filter(Boolean) as typeof selectedCategory.brands;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Main Content Area */}
      <main className="pt-24 pb-20">
        {/* STEP 1: CATEGORY SELECTION */}
        {!selectedCategory && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-12 px-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={12} className="text-emerald-500" />
                {language === "en" ? "Select a Category" : "ምድብ ይምረጡ"}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                {getLocalizedText("Choose your ride", "የጉዞ አይነት ይምረጡ")}
              </h1>
              <p className="text-gray-500 max-w-xl mx-auto">
                {getLocalizedText(
                  "From economical daily commuters to luxurious comfort, we have the perfect vehicle for every journey.",
                  "ከቀላል የዕለት ተዕለት ጉዞ እስከ የቅንጦት ምቾት፣ ለሁሉም ጉዞ ተስማሚ ተሽከርካሪ አለን።",
                )}
              </p>
            </div>

            <CategoryGrid
              categories={Categories}
              onSelect={(cat) => {
                setSelectedCategory(cat);
                window.scrollTo(0, 0);
              }}
              language={language}
            />
          </div>
        )}

        {/* STEP 2: VEHICLE SHOWCASE */}
        {selectedCategory && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
            {/* Sticky Header with Tabs and Search */}
            <div className="sticky top-20 z-30 backdrop-blur-xl border-b border-gray-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 mb-8 shadow-sm transition-all">
              <div className="flex flex-col gap-6">
                {/* Category Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                  {Categories.map((cat) => (
                    <button
                      key={cat.categoryNameEn}
                      onClick={() => {
                        setSelectedCategory(cat);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${selectedCategory.categoryNameEn === cat.categoryNameEn
                          ? "bg-gray-900 text-white shadow-lg shadow-gray-900/20 scale-105"
                          : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                    >
                      {getCategoryName(cat)}
                    </button>
                  ))}
                </div>

                {/* Title and Search */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                      {getCategoryName(selectedCategory)}
                    </h2>
                    <p className="text-emerald-600 text-xs font-bold uppercase tracking-wide mt-1">
                      {/* {selectedCategory.} */}
                    </p>
                  </div>

                  {/* Search Bar */}
                  <div className="relative w-full md:w-80 group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search
                        size={16}
                        className="text-gray-400 group-focus-within:text-emerald-500 transition-colors"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder={
                        language === "en" ? "Search models..." : "ሞዴል ይፈልጉ..."
                      }
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm font-medium shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle List */}
            <div className="space-y-8 min-h-[50vh]">
              {filteredBrands.map((brand) => (
                <div key={brand.brandNameEn} className="relative">
                  {/* Minimal Brand Badge Separator */}
                  <div className="flex items-center justify-center mb-10 relative">
                    <div className="relative flex justify-center">
                      <span className="bg-secondary px-6 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-[0.2em] border border-gray-100 rounded-full shadow-sm">
                        {getLocalizedText(brand.brandNameEn, brand.brandNameAm)}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                    {brand.models.map((model) => (
                      <VehicleCard
                        key={model.modelNameEn}
                        model={model}
                        language={language}
                      />
                    ))}
                  </div>
                </div>
              ))}

              {filteredBrands.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <Search size={24} className="text-gray-300" />
                  </div>
                  <p className="text-lg font-medium text-gray-900">
                    No vehicles found
                  </p>
                  <p className="text-sm">Try adjusting your search query</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
