"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { QRCodeSVG } from "qrcode.react";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import Link from "next/link";
import { config } from "@/config/links";
import { useTranslations } from "next-intl";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

// --- Desktop View Components ---

const SocialQRCode = ({
  href,
  name,
  icon,
}: {
  href: string;
  name: string;
  icon: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-3 p-3 rounded-lg transition-all hover:bg-foreground/10"
  >
    <div className="p-2 bg-white rounded-md">
      <QRCodeSVG
        value={href}
        size={100}
        imageSettings={{ src: icon, width: 24, height: 24, excavate: true }}
      />
    </div>
    <div className="flex items-center gap-2">
      <Image src={icon} alt={`${name} logo`} width={24} height={24} />
      <p className="font-semibold text-sm text-foreground/90">{name}</p>
    </div>
  </Link>
);

const DesktopView = () => {
  const t = useTranslations("dialogs.socials");
  return (
    <div className="grid grid-cols-3 ">
      <SocialQRCode
        href={config.social.whatsapp.passengerUrl}
        {...config.social.whatsapp}
        name={t("whatsapp")}
      />
      <SocialQRCode
        href={config.social.telegram.passengerUrl}
        {...config.social.telegram}
        name={t("telegram")}
      />
      <SocialQRCode
        href={config.social.instagram.passengerUrl}
        {...config.social.instagram}
        name={t("instagram")}
      />
    </div>
  );
};

// --- Mobile View Components ---

const MobileLink = ({
  href,
  name,
  icon,
}: {
  href: string;
  name: string;
  icon: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors w-full"
    style={{
      boxShadow: `inset  2px  2px 1px 0px rgba(255, 255, 255, 0.1),
                      inset -2px -2px 1px 0px rgba(255, 255, 255, 0.1),
                      0 2px 6px 0 rgba(0, 0, 0, 0.1)`,
    }}
  >
    <Image src={icon} alt={`${name} logo`} width={32} height={32} />
    <p className="font-semibold text-foreground/90">{name}</p>
  </Link>
);

const MobileView = () => {
  return (
    <div className="space-y-3">
      <MobileLink
        href={config.social.whatsapp.passengerUrl}
        {...config.social.whatsapp}
        name={"Whatsapp"}
      />
      <MobileLink
        href={config.social.telegram.passengerUrl}
        {...config.social.telegram}
        name={"Telegram"}
      />
      <MobileLink
        href={config.social.instagram.passengerUrl}
        {...config.social.instagram}
        name={"Instagram"}
      />
    </div>
  );
};

// --- Main Dialog Component ---

export const PassengerDialog = (props: Props) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const t = useTranslations("dialogs.passenger");

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent className="text-center">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold tracking-tight">
            {t("title")}
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground pb-2 -mt-2">
          {t("explanation")}
        </p>
        {isMobile ? <MobileView /> : <DesktopView />}
      </DialogContent>
    </Dialog>
  );
};
