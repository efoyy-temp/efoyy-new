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
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
  isLanding?: boolean;
};

const Navbar = (props: Props) => {
  const { setTheme, theme } = useTheme();
  const [scrolled, setScrolled] = useState(false); // State to track scroll
  const t = useTranslations("navbar");
  console.log({ scrolled, ladning: props.isLanding });

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
    <div className="hidden md:flex text-sm flex-1 justify-end items-center gap-5 tracking-wide mr-2">
      <NavLink
        scrolled={scrolled}
        label={t("pricing")}
        href="/ride"
        isLanding={props.isLanding}
      />
      <NavLink
        scrolled={scrolled}
        label={t("safety")}
        href="/safety"
        isLanding={props.isLanding}
      />
      <NavLink
        scrolled={scrolled}
        label={t("features")}
        href="/features"
        isLanding={props.isLanding}
      />
      <NavLink
        scrolled={scrolled}
        label={t("contactUs")}
        href="/contact"
        isLanding={props.isLanding}
      />
    </div>
  );

  return (
    <>
      {/* Conditionally apply background and blur classes based on scrolled state */}
      <div
        className={clsx(
          `fixed  top-0 w-full bg-gradient-to-b to-transparent z-50 flex py-4 px-4 md:px-6 lg:px-8 transition-all duration-300 ease-out ${props.isLanding && !scrolled ? "via-transparent via-60% from-transparent" : "via-background/50 from-background/80 "}`,
          {
            "backdrop-blur ": scrolled, // Apply these classes only when scrolled
          },
        )}
      >
        <div className="w-full max-w-screen-2xl flex justify-between mx-auto items-center">
          <Link href="/">
            <Logo
              height={28}
              theme={props.isLanding && !scrolled ? "dark" : undefined}
            />
          </Link>

          {/* Desktop Navigation Links - Hidden below md */}
          <div className="hidden md:flex text-sm flex-1 justify-end items-center tracking-wide">
            <NavLinks />
            <LanguageSwitcher isLanding={props.isLanding} scrolled={scrolled} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className={`${!scrolled && props.isLanding ? "text-white/80" : "text-foreground/80"}`}
            >
              {theme === "dark" ? (
                <Sun size={18} className="transition-none" />
              ) : (
                <Moon size={18} className="transition-none" />
              )}
            </Button>
          </div>

          {/* Mobile Menu - Visible below md */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher isLanding={props.isLanding} scrolled={scrolled} />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className={`${!scrolled && props.isLanding ? "text-white/80" : "text-foreground/80"}`}
            >
              {theme === "dark" ? (
                <Sun size={18} className="transition-none" />
              ) : (
                <Moon size={18} className="transition-none" />
              )}
            </Button>
            {/* Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${!scrolled && props.isLanding ? "text-white border-white" : ""}`}
                >
                  <Menu />
                  <span className="sr-only">{t("openMenu")}</span>
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
                    {t("pricing")}
                  </Link>
                </DropdownMenuItem>
                <Link href="/safety" className="w-full">
                  <DropdownMenuItem className="px-3 hover:bg-foreground/10">
                    {t("safety")}
                  </DropdownMenuItem>
                </Link>
                <Link href="/features" className="w-full">
                  <DropdownMenuItem className="px-3 hover:bg-foreground/10">
                    {t("features")}
                  </DropdownMenuItem>
                </Link>
                <Link href="/contact" className="w-full">
                  <DropdownMenuItem className="px-3 hover:bg-foreground/10">
                    {t("contactUs")}
                  </DropdownMenuItem>
                </Link>
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
