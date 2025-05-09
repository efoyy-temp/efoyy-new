"use client";

import { useLocale } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Locale } from "@/i18n/config";
import { useTransition } from "react";
import { setUserLocale } from "@/services/locale";

type Props = {
  isLanding?: boolean;
  scrolled?: boolean;
};

export default function LanguageSwitcher(props: Props) {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    const locale = newLocale as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`${!props.scrolled && props.isLanding ? "text-white/80" : "text-foreground/80"}`}
        >
          <Globe size={18} />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem
          className={locale === "en" ? "bg-accent/50" : ""}
          onClick={() => switchLocale("en")}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          className={locale === "am" ? "bg-accent/50" : ""}
          onClick={() => switchLocale("am")}
        >
          አማርኛ (Amharic)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
