"use client";
import { Moon, Sun, Menu } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
  isLanding?: boolean;
};

const Navbar = (props: Props) => {
  const { setTheme, theme } = useTheme();
  const t = useTranslations("navbar");

  // Helper component for nav links to avoid repetition
  const NavLinks = () => (
    <div className="hidden md:flex text-sm flex-1 justify-end items-center gap-5 tracking-wide mr-2">
      <NavLink label={t("pricing")} href="/ride" isLanding={props.isLanding} />
      <NavLink label={t("safety")} href="/safety" isLanding={props.isLanding} />
      <NavLink
        label={t("features")}
        href="/features"
        isLanding={props.isLanding}
      />
      <NavLink
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
          `fixed  top-2 w-[80vw] left-1/2 backdrop-blur-[10px] -translate-x-1/2 rounded-2xl border-white/20 z-50 flex py-2 bg-gray-300/20 px-4 md:px-6 lg:px-8 transition-all duration-300 ease-out `,
        )}
        style={{
          boxShadow: `inset 2px 2px 0px 0 rgba(255, 255, 255, 0.2),
inset -2px -2px 2px 0px rgba(255, 255, 255, 0.2),
0 2px 6px 0 rgba(0, 0, 0, 0.2)
`,
        }}
      >
        <div className="w-full max-w-screen-2xl flex justify-between mx-auto items-center">
          <Link href="/">
            <Logo height={28} />
          </Link>

          {/* Desktop Navigation Links - Hidden below md */}
          <div className="hidden md:flex text-sm flex-1 justify-end items-center tracking-wide">
            <NavLinks />
            <LanguageSwitcher isLanding={props.isLanding} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className={`${"text-foreground/80"}`}
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
            <LanguageSwitcher isLanding={props.isLanding} />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className={`text-foreground/80`}
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
                <Button variant="ghost" size="icon">
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
      className={`font-medium cursor-pointer text-foreground transition hover:underline `}
    >
      {props.label}
    </a>
  );
}

export default Navbar;
