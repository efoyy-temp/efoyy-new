"use client";
import { useState } from "react";
import { Menu, Sparkles, X, Sun, Moon } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import clsx from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "next-themes";

type Props = {
  isLanding?: boolean;
};

const navSections = [
  {
    id: "discover",
    titleKey: "discover.title",
    links: [
      { href: "/features", labelKey: "features", source: "navbar" },
      { href: "/ride", labelKey: "pricing", source: "navbar" },
      { href: "/safety", labelKey: "safety", source: "navbar" },
      { href: "/blog", labelKey: "blog", source: "navbar" },
      { href: "/vehicles", labelKey: "vehicles", source: "navbar" },
      { href: "/about", labelKey: "aboutUs", source: "navbar" },
    ],
  },
  {
    id: "forUsers",
    titleKey: "forUsers.title",
    links: [
      { href: "/contact", labelKey: "contactUs", source: "navbar" },
      {
        href: "/incentives/driver",
        labelKey: "driverIncentives",
        source: "navbar",
      },
      {
        href: "/incentives/passenger",
        labelKey: "passengerIncentives",
        source: "navbar",
      },
      { href: "/faq", labelKey: "resources.faqs", source: "footer" },
    ],
  },
  {
    id: "legal",
    titleKey: "legal.title",
    links: [
      {
        href: "/driver-privacy-policy",
        labelKey: "resources.driverPrivacyPolicy",
        source: "footer",
      },
      {
        href: "/privacy-policy",
        labelKey: "resources.privacyPolicy",
        source: "footer",
      },
      {
        href: "/terms",
        labelKey: "resources.termsOfService",
        source: "footer",
      },
    ],
  },
] as const;

const Navbar = () => {
  const t = useTranslations("navbar");
  const tFooter = useTranslations("footer");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  return (
    <div
      data-state={isMenuOpen ? "open" : "close"}
      className={clsx(
        "fixed top-2 w-[calc(100vw-36px)] ease-in-out left-1/2 backdrop-blur-[10px] -translate-x-1/2 rounded-2xl border-white/20 z-50 transition-all duration-300 ",
        isMenuOpen
          ? "bg-neutral-300/75 dark:bg-background/70 md:w-[840px] "
          : "bg-neutral-300/25 dark:bg-background/20 md:w-[50vw]",
      )}
      style={{
        boxShadow: isMenuOpen ? "" : `inset 2px 2px 6px 0 rgba(255, 255, 255, 0.15),
          inset -2px -2px 6px 0px rgba(255, 255, 255, 0.15),
          0 2px 6px 0 rgba(0, 0, 0, 0.2)`,
      }}
    >
      <div className="w-full flex justify-between mx-auto items-center px-4 py-2">
        <Link href="/">
          <Logo height={28} />
        </Link>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="group bg-gradient-to-br from-green-500 hover:from-teal-500 via-cyan-500 hover:via-blue-500 to-purple-500 hover:to-fuchsia-500">
            <Sparkles className="!size-5 group-hover:scale-110 transition ease-in-out" />
          </Button>
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} className="transition-none" />
            ) : (
              <Moon size={18} className="transition-none" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <Accordion
        type="single"
        collapsible
        value={isMenuOpen ? "item-1" : ""}
        onValueChange={(value) => setIsMenuOpen(value === "item-1")}
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="hidden" />
          <AccordionContent>
            <div className="p-4 sm:p-6 pb-4 ">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {navSections.map((section, index) => (
                  <div
                    key={section.id}
                    className={clsx(
                      "md:min-w-64 md:px-4 shrink-0",
                      index < navSections.length - 1 &&
                      "md:border-r md:border-border ",
                    )}
                  >
                    <h3 className="text-sm font-semibold mb-4 text-muted-foreground">
                      {tFooter(section.titleKey)}
                    </h3>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="text-xs sm:text-sm font-medium hover:text-primary transition-colors block p-2 rounded-md hover:bg-muted"
                          >
                            {link.source === "navbar"
                              ? t(link.labelKey)
                              : tFooter(link.labelKey)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="text-center mt-2 border-t pt-4">
                <p className="text-xs text-muted-foreground">
                  Efoyy &copy; {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Navbar;
