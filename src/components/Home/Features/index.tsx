"use client";

import { cn } from "@/lib/utils";
import { Cpu } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTranslations } from 'next-intl';

const Features = () => {
  const t = useTranslations('home.features');
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Get features data from translations
  const features = [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
      className: "sm:row-span-2",
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
    },
    {
      title: t('items.3.title'),
      description: t('items.3.description'),
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

        if (x > 0 && y > 0 && x < rect.width && y < rect.height) {
          const centerX = Math.round(rect.width * 0.5);
          const centerY = Math.round(rect.height * 0.5);

          const xOffset = (centerX - x) / rect.width;
          const yOffset = (centerY - y) / rect.height;
          if (frame !== undefined) {
            cancelAnimationFrame(frame);
            frame = undefined;
          }
          frame = requestAnimationFrame(() => {
            card.style.setProperty(
              "--rotate-y",
              `${Math.round(xOffset * -10)}deg`,
            );
            card.style.setProperty(
              "--rotate-x",
              `${Math.round(yOffset * 10)}deg`,
            );
          });
        }
      }
    };
    cardRef.current?.addEventListener("mousemove", onMouseMove);
    return () => {
      cardRef.current?.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <div className="min-h-[min(100vh,1024px)]  flex justify-center items-center px-5 py-12">
      <div
        ref={cardRef}
        style={{
          perspective: 1000,
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-screen-xl gap-3 "
      >
        {features.map((feature, index) => (
          <Card feature={feature} key={index} />
        ))}
      </div>
    </div>
  );
};

const Card = (props: { feature: { title: string; description: string; className?: string } }) => {
  return (
    <div
      className={cn(
        "card bg-primary/80 dark:bg-gray-600/70  backdrop-blur-sm",
        props.feature.className,
      )}
    >
      <div className="card-content bg-gradient-to-br from-background/80 to-background justify-evenly p-3 sm:p-6 md:p-8">
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
  );
};

export default Features;
