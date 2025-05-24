"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type SlideContent = {
  type: "image" | "video";
  src: string;
  alt?: string;
  heading: string;
  subheading: string;
  tagline?: string;
};

type HeroSliderProps = {
  slides: SlideContent[];
  autoPlayInterval?: number;
  className?: string;
};

export function HeroSlider({
  slides,
  autoPlayInterval = 5000,
  className,
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const slidesCount = slides.length;

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Reset timer when slide changes
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (isPlaying) {
      timerRef.current = setTimeout(goToNextSlide, autoPlayInterval);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentSlide, isPlaying, autoPlayInterval]);

  // Pause autoplay when user interacts with controls
  const handleControlClick = (callback: () => void) => {
    setIsPlaying(false);
    callback();
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsPlaying(true), 10000);
  };

  return (
    <div className={cn("relative w-full h-screen overflow-hidden", className)}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          {slide.type === "image" ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.src})` }}
              aria-hidden="true"
            />
          ) : (
            <video
              src={slide.src}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          )}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

          {/* Content container */}
          <div className="absolute inset-0 max-w-screen-2xl w-full mx-auto px-4 md:px-8 flex flex-col justify-center z-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Text content - left side */}
              <div className="md:col-span-7 lg:col-span-6 min-h-56">
                {slide.tagline && (
                  <p className="text-primary font-semibold mb-2">
                    {slide.tagline}
                  </p>
                )}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-white/40 text-clip text-transparent bg-clip-text mb-6 leading-tight">
                  {slide.heading}
                </h2>
                <p className="text-base md:text-lg text-white/90 font-medium mb-8 max-w-2xl">
                  {slide.subheading}
                </p>
              </div>

              {/* Buttons - right side */}
              <div className="md:col-span-5 lg:col-span-6 flex justify-start md:justify-end">
                <div className="flex max-md:flex-row gap-3 items-center flex-col">
                  <a
                    className="hover:scale-105 transition ease-in-out"
                    href="#android"
                  >
                    <Image
                      className="h-10 object-contain"
                      height={40}
                      width={138}
                      alt="google play logo"
                      src="/Google Play.png"
                    />
                  </a>
                  <a
                    className="hover:scale-105 transition ease-in-out"
                    href="#play"
                  >
                    <Image
                      className="h-10 object-contain"
                      height={40}
                      width={138}
                      alt="app store logo"
                      src="/App Store.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom navigation container */}
      <div className="absolute bottom-8 left-0 flex justify-center right-0 z-20">
        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Navigation arrows */}
            <div className="flex space-x-4">
              <button
                onClick={() => handleControlClick(goToPrevSlide)}
                className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={() => handleControlClick(goToNextSlide)}
                className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Dots navigation */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleControlClick(() => goToSlide(index))}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    index === currentSlide
                      ? "bg-primary"
                      : "bg-white/50 hover:bg-white/70",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentSlide ? "true" : "false"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
