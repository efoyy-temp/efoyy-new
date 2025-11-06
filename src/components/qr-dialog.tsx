"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QRCodeSVG } from "qrcode.react";
import { usePlatform } from "@/hooks/use-platform";
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { config } from "@/config/links";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

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
        imageSettings={{
          src: icon,
          width: 24,
          height: 24,
          excavate: true,
        }}
      />
    </div>
    <div className="flex items-center gap-2">
      <Image src={icon} alt={`${name} logo`} width={24} height={24} />
      <p className="font-semibold text-sm text-foreground/90">{name}</p>
    </div>
  </Link>
);

const SocialLinksGroup = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 ">
    <SocialQRCode
      href={config.social.whatsapp.url}
      name="WhatsApp"
      icon={config.social.whatsapp.icon}
    />
    <SocialQRCode
      href={config.social.telegram.url}
      name="Telegram"
      icon={config.social.telegram.icon}
    />
    <SocialQRCode
      href={config.social.instagram.url}
      name="Instagram"
      icon={config.social.instagram.icon}
    />
  </div>
);

const DriverAppQRCode = ({
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
        imageSettings={{
          src: qrIcon,
          width: 35,
          height: 35,
          excavate: true,
        }}
      />
    </div>
    <p className="text-sm font-semibold text-foreground/90">{platformName}</p>
  </a>
);

const DriverApps = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-start gap-4">
      <DriverAppQRCode
        url={config.driver.ios.url}
        platformName="App Store"
        qrIcon={config.driver.ios.qrIcon}
      />
      <DriverAppQRCode
        url={config.driver.android.url}
        platformName="Google Play"
        qrIcon={config.driver.android.qrIcon}
      />
    </div>
  );
};

export const QrDialog = (props: Props) => {
  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent
        className="backdrop-blur-[10px] bg-neutral-100/50 dark:bg-neutral-800/50 border-white/20"
        style={{
          boxShadow: `inset 2px 2px 0px 0 rgba(255, 255, 255, 0.2),
                      inset -2px -2px 2px 0px rgba(255, 255, 255, 0.2),
                      0 2px 6px 0 rgba(0, 0, 0, 0.2)`,
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold tracking-tight">
            Get Efoyy
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="driver" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-foreground/5">
            <TabsTrigger value="driver">Driver App</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>
          <TabsContent value="driver" className="pt-4 space-y-6">
            <DriverApps />
            <SocialLinksGroup />
          </TabsContent>
          <TabsContent value="community" className="pt-4">
            <SocialLinksGroup />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
