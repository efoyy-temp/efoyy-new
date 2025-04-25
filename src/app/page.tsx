"use client";
import Navbar from "../components/Navbar";
import Overview from "../components/Home/Overview";
import Features from "../components/Home/Features";
import Footer from "../components/Footer";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home.hero");

  return (
    <>
      <Navbar isLanding />
      <div>
        <div className="h-screen flex max-sm:flex-col relative pb-8 sm:pb-12 md:pb-20 px-6 sm:px-8 md:px-12 lg:px-16 justify-center sm:justify-end items-end bg-">
          <div className="inset-0 bg-black absolute -z-20"></div>
          <img
            src="./addis.jpg"
            style={{
              maskImage:
                "linear-gradient(30deg,#0000 20%, #00000040 40%, #000000)",
            }}
            className="inset-0 overflow-hidden top-auto h-screen -z-10 w-full object-cover absolute motion-blur-in-[5px]  motion-ease-out-cubic motion-duration-500"
          />
          <div className="flex items-start max-sm:my-auto justify-center w-full flex-col gap-4 ">
            <div className="text-sm font-semibold text-primary motion-translate-y-in-[30%] motion-opacity-in-[0%] motion-blur-in-[1px]  motion-ease-out-cubic motion-duration-[1s] motion-delay-1000">
              {t("drivers")}
            </div>
            <h1 className="max-w-[600px] text-5xl font-semibold bg-gradient-to-r from-white to-white/40 text-clip text-transparent bg-clip-text max-sm:text-4xl motion-translate-y-in-[20%] motion-opacity-in-[0%] motion-blur-in-[1px]  motion-ease-out-cubic motion-duration-1000 motion-delay-300">
              {t("title")}
            </h1>
            <p className="font-medium max-w-lg text-white/80 text-sm mt-2 leading-6 motion-translate-y-in-[20%] motion-opacity-in-[0%] motion-blur-in-[1px]  motion-ease-out-cubic motion-duration-1000 motion-delay-700">
              {t("description")}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <a
              className="hover:scale-105 transition ease-in-out"
              href="#android"
            >
              <img
                className="h-12 sm:h-16 object-contain"
                src="./playbadge.png"
              />
            </a>
            <a className="hover:scale-105 transition ease-in-out" href="#play">
              <img
                className="h-12 py-1.5 sm:h-16 sm:py-2.5 object-contain"
                src="./appbadge.png"
              />
            </a>
          </div>
        </div>
      </div>
      <Overview />
      <Features />
      <Footer />
    </>
  );
}
