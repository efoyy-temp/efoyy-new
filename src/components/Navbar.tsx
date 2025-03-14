"use client";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(
    document.body.classList.contains("dark"),
  );

  useEffect(() => {
    const currentTheme = document.body.classList.contains("dark");
    if (currentTheme !== isDark) {
      document.body.classList.toggle("dark");
    }
  }, [isDark]);

  return (
    <>
      <div className="fixed backdrop-blur bg-gradient-to-b from-background/80 to-background/20 top-0 w-full z-10 flex py-4 px-4 md:px-8">
        <div className="w-full max-w-screen-2xl flex justify-between mx-auto pt-2 items-center">
          <Link href="/">
            <Logo height={28} />
          </Link>
          <div className="flex text-sm flex-1 justify-end items-center gap-6 tracking-wide">
            <button
              onClick={() => setIsDark(!isDark)}
              className="rounded outline-none p-2 hover:bg-foreground/20 "
            >
              {isDark ? (
                <Sun className="transition-none" />
              ) : (
                <Moon className="transition-none" />
              )}
            </button>
            <Link
              href="/ride"
              className="font-medium text-foreground/80 cursor-pointer hover:text-foreground transition hover:underline"
            >
              Pricing
            </Link>
            <a className="font-medium text-foreground/80 cursor-pointer hover:text-foreground transition hover:underline">
              Safety
            </a>
            <a className="font-medium text-foreground/80 cursor-pointer hover:text-foreground transition hover:underline">
              Features
            </a>
            <a className="font-medium text-foreground/80 cursor-pointer hover:text-foreground transition hover:underline">
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
