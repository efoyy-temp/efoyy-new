import React from "react";
import { VehicleCategory } from "../types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface CategoryGridProps {
  categories: VehicleCategory[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  const t = useTranslations("vehicles");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {categories.map((cat) => (
        <Link
          key={cat.categoryNameEn}
          style={{
            boxShadow: `2px 2px 4px 0 rgba(255, 255, 255, 0.10),
inset 2px 2px 4px 0 rgba(255, 255, 255, 0.10),
          inset -2px -2px 6px 0px rgba(255, 255, 255, 0.10),
          0 2px 6px 0 rgba(0, 0, 0, 0.2)`,
          }}
          href={`/vehicles?category=${encodeURIComponent(cat.categoryNameEn)}`}
          className="group relative h-64 md:h-80 w-full rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 text-left"
        >
          <img
            src={`https://api.efoyy.com/images/category/${cat.categoryImage}`}
            alt={cat.categoryNameEn}
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/5 group-hover:from-black group-hover:via-black/70 group-hover:to-black/30 transition-colors"></div>
          <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end h-full">
            <div className="transform transition-all duration-500 p-6 translate-y-2 group-hover:translate-y-0">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {/* @ts-expect-error this is a valid key */}
                  {t(`${cat.categoryNameEn as any}.name`, {
                    defaultMessage: cat.categoryNameEn,
                  })}
                </h3>

                <div className="pl-11 flex items-center text-white text-sm font-bold gap-2 transition-all">
                  <span>More</span>
                  <ArrowRight size={16} className="text-primary" />
                </div>
              </div>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                <div className="overflow-hidden">
                  <p className="text-zinc-200 font-medium text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {/* @ts-expect-error this is a valid key */}
                    {t(`${cat.categoryNameEn}.comment`, {
                      defaultMessage: cat.comment,
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;
