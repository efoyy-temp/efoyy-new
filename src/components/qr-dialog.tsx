"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        size={180}
        imageSettings={{ src: icon, width: 24, height: 24, excavate: true }}
      />
    </div>
    <div className="flex items-center gap-2">
      <Image src={icon} alt={`${name} logo`} width={24} height={24} />
      <p className="font-semibold text-sm text-foreground/90">{name}</p>
    </div>
  </Link>
);

const DesktopSocialGroup = () => {
  return (
    <div className="grid grid-cols-1 ">
      <SocialQRCode
        href={config.social.telegram.driverUrl}
        {...config.social.telegram}
        name={"Telegram"}
      />
    </div>
  );
};

const DesktopDriverApp = ({
  url,
  platformName,
  qrIcon,
}: {
  url: string;
  platformName: string;
  qrIcon: string;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-3 p-2 hover:bg-primary/10 rounded-lg hover:border-primary/50 transition-all border border-transparent"
  >
    <div className="rounded-lg bg-white p-3">
      <QRCodeSVG
        value={url}
        size={160}
        imageSettings={{ src: qrIcon, width: 35, height: 35, excavate: true }}
      />
    </div>
    <p className="text-sm font-semibold text-foreground/90">{platformName}</p>
  </a>
);

const DesktopDriverApps = () => {
  const t = useTranslations("dialogs.driver");
  return (
    <div className="flex flex-row justify-center items-start gap-4">
      <DesktopDriverApp
        url={config.driver.ios.url}
        platformName={t("appStore")}
        qrIcon={config.driver.ios.qrIcon}
      />
      <DesktopDriverApp
        url={config.driver.android.url}
        platformName={t("googlePlay")}
        qrIcon={config.driver.android.qrIcon}
      />
    </div>
  );
};

const DesktopView = () => {
  const t = useTranslations("dialogs.driver");
  return (
    <Tabs defaultValue="driver" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-foreground/5">
        <TabsTrigger value="driver">{t("driverAppTab")}</TabsTrigger>
        <TabsTrigger value="copilot">{t("copilotTab")}</TabsTrigger>
      </TabsList>
      <TabsContent value="driver" className="pt-4 space-y-6">
        <DesktopDriverApps />
        {/* <DesktopSocialGroup /> */}
      </TabsContent>
      <TabsContent value="copilot" className="pt-4">
        <DesktopSocialGroup />
      </TabsContent>
    </Tabs>
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

const MobileDriverLinks = () => {
  const t = useTranslations("dialogs.driver");
  return (
    <div className="space-y-3">
      <MobileLink
        href={config.driver.ios.url}
        name={t("downloadIos")}
        icon={config.driver.ios.qrIcon}
      />
      <MobileLink
        href={config.driver.android.url}
        name={t("downloadAndroid")}
        icon={config.driver.android.qrIcon}
      />
    </div>
  );
};

const MobileSocialLinks = () => {
  return (
    <div className="space-y-3">
      <MobileLink
        href={config.social.telegram.driverUrl}
        {...config.social.telegram}
        name={"Telegram"}
      />
    </div>
  );
};

const MobileView = () => {
  const t = useTranslations("dialogs.driver");
  return (
    <Tabs defaultValue="driver" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-foreground/5">
        <TabsTrigger value="driver">{t("driverAppTab")}</TabsTrigger>
        <TabsTrigger value="copilot">{t("copilotTab")}</TabsTrigger>
      </TabsList>
      <TabsContent value="driver" className="pt-4 space-y-4">
        <MobileDriverLinks />
        <hr className="border-foreground/10" />
        <MobileSocialLinks />
      </TabsContent>
      <TabsContent value="copilot" className="pt-4">
        <MobileSocialLinks />
      </TabsContent>
    </Tabs>
  );
};

// --- Main Dialog Component ---

export const QrDialog = (props: Props) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const t = useTranslations("dialogs.driver");

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold tracking-tight">
            {t("title")}
          </DialogTitle>
        </DialogHeader>
        {isMobile ? <MobileView /> : <DesktopView />}
      </DialogContent>
    </Dialog>
  );
};
