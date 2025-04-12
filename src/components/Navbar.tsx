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
import { useTheme } from "next-themes";

type Props = {
  isLanding?: boolean;
};

const Navbar = (props: Props) => {
  const { setTheme, theme } = useTheme();
  const [scrolled, setScrolled] = useState(false); // State to track scroll

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user scrolls down more than 10px, else false
      setScrolled(window.scrollY > window.innerHeight - 80);
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
      <NavLink
        scrolled={scrolled}
        label="Pricing"
        href="/ride"
        isLanding={props.isLanding}
      />
      <NavLink
        scrolled={scrolled}
        label="Safety"
        href="/safety"
        isLanding={props.isLanding}
      />
      <NavLink
        scrolled={scrolled}
        label="Features"
        href="/"
        isLanding={props.isLanding}
      />
      <NavLink
        scrolled={scrolled}
        label="Contact Us"
        href="/contact"
        isLanding={props.isLanding}
      />
      <Link
        href="/"
        className={clsx(
          "group hover:brightness-125 tranition ease-out text-primary-foreground bg-primary rounded-md cursor-pointer pl-5 pr-2 py-1.5 flex gap-1.5 items-center",
          isMobile &&
            "w-full p-2 justify-between bg-transparent hover:bg-accent",
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
      </Link>
    </>
  );

  return (
    <>
      {/* Conditionally apply background and blur classes based on scrolled state */}
      <div
        className={clsx(
          `fixed top-0 w-full bg-gradient-to-b to-transparent z-10 flex py-4 px-4 md:px-8 transition-all duration-300 ease-out ${props.isLanding && !scrolled ? "via-black/50 via-60% from-black/80" : "via-background/50 from-background/80 "}`,
          {
            "backdrop-blur ": scrolled, // Apply these classes only when scrolled
          },
        )}
      >
        <div className="w-full max-w-screen-2xl flex justify-between mx-auto items-center">
          <Link href="/">
            <Logo height={28} />
          </Link>

          {/* Desktop Navigation Links - Hidden below md */}
          <div className="hidden md:flex text-sm flex-1 justify-end items-center gap-5 tracking-wide">
            <NavLinks />
            {/* Theme Toggle Button - Moved inside desktop nav container */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`rounded outline-none p-1 hover:bg-foreground/20 ${props.isLanding && !scrolled ? "text-white/80" : "text-foreground"}`}
              aria-label="Toggle theme" // Added aria-label for accessibility
            >
              {theme === "dark" ? (
                <Sun size={18} className="transition-none" />
              ) : (
                <Moon size={18} className="transition-none" />
              )}
            </button>
          </div>

          {/* Mobile Menu - Visible below md */}
          <div className="flex md:hidden items-center gap-2">
            {/* Theme Toggle Button - Also needed for mobile */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded outline-none p-2 hover:bg-foreground/20 "
              aria-label="Toggle theme" // Added aria-label for accessibility
            >
              {theme === "dark" ? (
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
                <Link href="/safety" className="w-full">
                  <DropdownMenuItem className="px-3 hover:bg-foreground/10">
                    <a className="w-full">Safety</a>
                  </DropdownMenuItem>
                </Link>
                <Link href="/" className="w-full">
                  <DropdownMenuItem className="px-3 hover:bg-foreground/10">
                    <a className="w-full">Features</a>
                  </DropdownMenuItem>
                </Link>
                <Link href="/contact" className="w-full">
                  <DropdownMenuItem className="px-3 hover:bg-foreground/10">
                    <a className="w-full">Contact Us</a>
                  </DropdownMenuItem>
                </Link>
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

function NavLink(props: {
  label: string;
  href: string;
  isLanding?: boolean;
  scrolled?: boolean;
}) {
  //
  //
  return (
    <a
      href={props.href}
      className={`font-medium cursor-pointer transition hover:underline text-sm ${props.isLanding && !props.scrolled ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-foreground"}`}
    >
      {props.label}
    </a>
  );
}

export default Navbar;
