"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Overview from "../components/Home/Overview";
import Features from "../components/Home/Features";
import Footer from "../components/Footer";

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!imageRef.current) return;
          imageRef.current.style.transform = `scale(${1.2 + Math.pow(1 - entry.intersectionRatio, 2) * 0.15})`;
        });
      },
      { threshold: new Array(10).fill(0).map((_, i) => i / 10) },
    );
    io.observe(headerRef.current!);
    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div ref={headerRef}>
        <div className="flex sticky top-16 mt-24 mb-20 flex-col items-center py-2 ">
          <Overview />
        </div>
      </div>
      <div className="bg-background relative z-[1]">
        <div className="w-full overflow-hidden relative h-[50vh] sm:h-[70vh]">
          <Image
            alt="logo"
            src="/addis-ababa.png"
            fill
            className="size-full object-cover transition-all ease-in-out"
            ref={imageRef}
            style={{
              transform: `scale(1.2)`,
            }}
          />
        </div>
        <div className="flex flex-col bg-gradient-to-b from-primary/80 to-white ">
          <div className=" self-center max-w-2xl pt-20 pb-12 text-center">
            <h3 className="text-6xl font-bold">
              Drive around without your internet on
            </h3>
            <p className="font-semibold mt-6">
              We’re here with a new solution to your ride booking problems. all
              using AI with Efoyy you can book a ride from any of your social
              media{" "}
            </p>
          </div>
          <Image
            src="/hand-carrying-phone.png"
            height={1038}
            width={1440}
            alt="hand-iphone"
          />
        </div>
        <Features />
        <Footer />
      </div>
    </>
  );
}
