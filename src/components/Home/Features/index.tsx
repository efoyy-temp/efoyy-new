"use client";

import { cn } from "@/lib/utils";
import { Cpu } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("home.features");
  const cardRef = useRef<HTMLDivElement>(null);

  // Get features data from translations
  const features = [
    {
      title: t("items.0.title"),
      description: t("items.0.description"),
      className: "sm:row-span-2",
    },
    {
      title: t("items.1.title"),
      description: t("items.1.description"),
    },
    {
      title: t("items.2.title"),
      description: t("items.2.description"),
    },
    {
      title: t("items.3.title"),
      description: t("items.3.description"),
      className: "sm:col-span-2",
    },
  ];

  useEffect(() => {
    let frame: number | undefined;
    const onMouseMove = (e: MouseEvent) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        // @ts-expect-error dom
        card.style.setProperty("--mouse-x", `${x}px`);
        // @ts-expect-error dom
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
    cardRef.current?.addEventListener("mousemove", onMouseMove);
    return () => {
      cardRef.current?.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="min-h-[min(100vh,1024px)]  group flex justify-center items-center px-5 py-16">
      <div
        ref={cardRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-screen-xl gap-3 "
      >
        {features.map((feature, index) => (
          <Card feature={feature} key={index} />
        ))}
      </div>
    </div>
  );
};

const Card = (props: {
  feature: { title: string; description: string; className?: string };
}) => {
  return (
    <div
      className={cn(
        "card relative transition-all p-px bg-primary/20 ease-out duration-75 backdrop-blur-sm overflow-hidden",
        props.feature.className,
      )}
    >
      <div className="absolute group-hover:block hidden transition-all ease-out bg-primary rounded-full blur-xl size-64 origin-center translate-x-[calc(var(--mouse-x)-50%)] translate-y-[calc(var(--mouse-y)-50%)]" />
      <div className="card !rounded-[15px] bg-primary">
        <div className="card-content bg-gradient-to-br from-background/90 to-background justify-evenly p-3 sm:p-6 md:p-8">
          <div className="rounded-full self-start p-5 bg-primary/20">
            <Cpu className="text-primary size-8" />
          </div>
          <div className="">
            <div className="">
              <div className="space-y-4 mt-4">
                <h3 className="text-lg font-bold">{props.feature.title}</h3>
                <p className="text-xs font-medium leading-relaxed text-foreground/70 ">
                  {props.feature.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
