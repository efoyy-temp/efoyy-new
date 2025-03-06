"use client";
import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div className="sticky bg-background top-0 w-full z-10 flex py-4 px-4 md:px-8">
        <div className="w-full max-w-screen-2xl flex justify-between mx-auto pt-2 items-center">
          <Logo height={28} />
          <div className="flex text-sm flex-1 justify-end items-center gap-6 tracking-wide">
            <a className="font-medium text-white/70 cursor-pointer hover:text-white transition hover:underline">
              Safety
            </a>
            <a className="font-medium text-white/70 cursor-pointer hover:text-white transition hover:underline">
              Features
            </a>
            <a className="font-medium text-white/70 cursor-pointer hover:text-white transition hover:underline">
              Contact Us
            </a>
            <a className="group hover:brightness-125 tranition ease-out text-primary-foreground bg-primary rounded-md cursor-pointer pl-6 pr-3 py-2 flex gap-1.5">
              <span className="font-medium">Login</span>
              <ArrowUpRight
                size={20}
                className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all ease-out"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
