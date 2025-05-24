"use client";
import { useTranslations } from "next-intl";

const Overview = () => {
  const t = useTranslations("home.overview");

  // Get the items from translation
  const items = [
    {
      title: t("items.0.title"),
      paragraph: t("items.0.paragraph"),
      img: "car-rent.png",
    },
    {
      title: t("items.1.title"),
      paragraph: t("items.1.paragraph"),
      img: "car-rent.png",
    },
    {
      title: t("items.2.title"),
      paragraph: t("items.2.paragraph"),
      img: "car-rent.png",
    },
  ];

  return (
    <div className="flex justify-center ">
      <div className="min-h-[min(100vh,1024px)] max-w-screen-xl px-6 py-20 flex flex-col gap-6 justify-center">
        <div className="flex items-center flex-col gap-2">
          <p className="text-primary font-bold text-sm">{t("title")}</p>
          <h2 className="text-4xl bg-gradient-to-r leading-relaxed from-foreground to-foreground/60 text-clip text-transparent bg-clip-text font-bold ">
            {t("subtitle")}
          </h2>
          <p className="text-xs font-semibold">{t("description")}</p>
        </div>
        <div className="flex max-md:flex-col mt-[10vh] justify-between gap-12 ">
          {items.map((item, index) => (
            <div
              key={index}
              className="gap-8 md:max-w-sm flex items-center flex-col bordr shrink border-red-300"
            >
              <div className="p-4">
                <img
                  src={item.img}
                  className="h-28"
                  alt="promotion illustration"
                />
              </div>
              <div className="space-y-3 flex flex-col items-center">
                <h5 className="font-semibold">{item.title}</h5>
                <p className="text-xs font-medium leading-relaxed text-center text-secondary-foreground text-balance">
                  {item.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
