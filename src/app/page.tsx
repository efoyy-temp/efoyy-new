"use client";
import Navbar from "../components/Navbar";
import Overview from "../components/Home/Overview";
import Features from "../components/Home/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="h-screen flex max-sm:flex-col pb-8 sm:pb-12 md:pb-20 px-6 sm:px-8 md:px-12 lg:px-16 justify-center sm:justify-end items-end  ">
          <img
            src="./hero-buildings.png"
            style={{
              maskImage: "linear-gradient(30deg, #00000020 20%, #000000)",
            }}
            className="inset-0 overflow-hidden top-auto h-[80vh] -z-10 w-full object-cover absolute motion-translate-y-in-[8%] motion-opacity-in-[80%] motion-blur-in-[2px]  motion-ease-out-cubic motion-duration-500"
          />
          <div className="flex items-start max-sm:my-auto justify-center w-full flex-col gap-4 ">
            <div className="text-sm font-semibold text-primary motion-translate-y-in-[30%] motion-opacity-in-[0%] motion-blur-in-[1px]  motion-ease-out-cubic motion-duration-[1s] motion-delay-1000">
              4k+ drivers working 24/7
            </div>
            <h1 className="max-w-[600px] text-5xl font-semibold bg-gradient-to-r from-foreground to-secondary-foreground/60 text-clip text-transparent bg-clip-text max-sm:text-4xl motion-translate-y-in-[20%] motion-opacity-in-[0%] motion-blur-in-[1px]  motion-ease-out-cubic motion-duration-1000 motion-delay-300">
              Where Do You Want <br /> To Go?
            </h1>
            <p className="font-medium max-w-lg text-sm mt-2 leading-6 motion-translate-y-in-[20%] motion-opacity-in-[0%] motion-blur-in-[1px]  motion-ease-out-cubic motion-duration-1000 motion-delay-700">
              Wherever you are in Addis, we've got your back with unbeatable
              pricing, lightning-fast responses, and top-notch customer service
              available 24/7! 🚀 Ready for your next ride? Download our app and
              hop on board today!
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
    </>
  );
}
