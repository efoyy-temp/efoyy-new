import React from "react";
import Categories from "../../../vehicles.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategorySelection from "./components/CategorySelection";
import VehicleShowcase from "./components/VehicleShowcase";
import { VehicleCategory } from "./types";

interface VehiclesPageProps {
  searchParams: Promise<{
    category?: string;
    query?: string;
  }>;
}

const VehiclesPage: React.FC<VehiclesPageProps> = async ({ searchParams }) => {
  const { category: selectedCategoryName, query: searchQuery } =
    await searchParams;
  const categories: VehicleCategory[] = Categories;

  const selectedCategory = selectedCategoryName
    ? categories.find((c) => c.categoryNameEn === selectedCategoryName)
    : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        {selectedCategory ? (
          <VehicleShowcase
            categories={categories}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery || ""}
          />
        ) : (
          <CategorySelection categories={categories} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default VehiclesPage;
