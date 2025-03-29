"use client";
import { ArrowUpRight, Moon, Sun, Menu } from "lucide-react"; // Import Menu icon
import Logo from "./Logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx"; // Import clsx for conditional classes
// Import DropdownMenu components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Assuming this is the correct path
import { Button } from "@/components/ui/button"; // Import Button for the trigger

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false); // State to track scroll

  useEffect(() => {
    const currentTheme = document.body.classList.contains("dark");
    if (currentTheme !== isDark) {
      document.body.classList.toggle("dark");
    }
  }, [isDark]);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user scrolls down more than 10px, else false
      setScrolled(window.scrollY > 40);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    setScrolled(window.scrollY > 40);
    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount and cleanup on unmount

  // Helper component for nav links to avoid repetition
  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      <Link
        href="/ride"
        className={clsx(
          "font-medium text-foreground/80 cursor-pointer hover:text-foreground transition hover:underline",
          isMobile && "w-full p-2 text-left", // Mobile specific styles
        )}
      >
        Pricing
      </Link>
      <a
        className={clsx(
          "font-medium text-foreground/80 cursor-pointer hover:text-foreground transition hover:underline",
          isMobile && "w-full p-2 text-left", // Mobile specific styles
        )}
      >
        Safety
      </a>
      <a
        className={clsx(
          "font-medium text-foreground/80 cursor-pointer hover:text-foreground transition hover:underline",
          isMobile && "w-full p-2 text-left", // Mobile specific styles
        )}
      >
        Features
      </a>
      <a
        className={clsx(
          "font-medium text-foreground/80 cursor-pointer hover:text-foreground transition hover:underline",
          isMobile && "w-full p-2 text-left", // Mobile specific styles
        )}
      >
        Contact Us
      </a>
      <a
        className={clsx(
          "group hover:brightness-125 tranition ease-out text-primary-foreground bg-primary rounded-md cursor-pointer pl-6 pr-3 py-2 flex gap-1.5 items-center",
          isMobile &&
          "w-full p-2 justify-between bg-transparent text-foreground/80 hover:text-foreground hover:bg-accent", // Mobile specific styles for login
        )}
      >
        <span className="font-medium">Login</span>
        <ArrowUpRight
          size={20}
          className={clsx(
            "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all ease-out",
            isMobile && "hidden", // Hide arrow on mobile dropdown item
          )}
        />
      </a>
    </>
  );

  return (
    <>
      {/* Conditionally apply background and blur classes based on scrolled state */}
      <div
        className={clsx(
          "fixed top-0 w-full z-10 flex py-4 px-4 md:px-8 transition-all duration-300 ease-out", // Added transition for smooth effect
          {
            "backdrop-blur bg-gradient-to-b from-background/80 to-background/20":
              scrolled, // Apply these classes only when scrolled
            "bg-transparent": !scrolled, // Apply transparent background when not scrolled
          },
        )}
      >
        <div className="w-full max-w-screen-2xl flex justify-between mx-auto pt-2 items-center">
          <Link href="/">
            <Logo height={28} />
          </Link>

          {/* Desktop Navigation Links - Hidden below md */}
          <div className="hidden md:flex text-sm flex-1 justify-end items-center gap-6 tracking-wide">
            <NavLinks />
            {/* Theme Toggle Button - Moved inside desktop nav container */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="rounded outline-none p-2 hover:bg-foreground/20 "
              aria-label="Toggle theme" // Added aria-label for accessibility
            >
              {isDark ? (
                <Sun className="transition-none" />
              ) : (
                <Moon className="transition-none" />
              )}
            </button>
          </div>

          {/* Mobile Menu - Visible below md */}
          <div className="flex md:hidden items-center gap-2">
            {/* Theme Toggle Button - Also needed for mobile */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="rounded outline-none p-2 hover:bg-foreground/20 "
              aria-label="Toggle theme" // Added aria-label for accessibility
            >
              {isDark ? (
                <Sun className="transition-none" />
              ) : (
                <Moon className="transition-none" />
              )}
            </button>
            {/* Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>{" "}
                  {/* Accessibility */}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 z-10"
                sideOffset={12}
              >
                {/* Render links inside DropdownMenuItem */}
                <DropdownMenuItem className="px-3 hover:bg-foreground/10">
                  <Link href="/ride" className="w-full">
                    Pricing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3 hover:bg-foreground/10">
                  <a className="w-full">Safety</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3 hover:bg-foreground/10">
                  <a className="w-full">Features</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3 hover:bg-foreground/10">
                  <a className="w-full">Contact Us</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3 hover:bg-foreground/10">
                  <a
                    href="#"
                    className="w-full flex justify-between items-center"
                  >
                    Login <ArrowUpRight size={16} />
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
