"use client";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { useState } from "react";
import { QrDialog } from "../qr-dialog";

const Overview = () => {
  const t = useTranslations("home.overview");
  const [isQrDialogOpen, setIsQrDialogOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <QrDialog open={isQrDialogOpen} onOpenChange={setIsQrDialogOpen} />
      <div className="max-w-screen-xl px-6 pt-12 mb-9 flex flex-col gap-6 justify-center">
        <div className="flex items-center flex-col gap-4">
          <h2 className="text-6xl max-w-2xl text-center text-foreground bg-clip-text font-bold animate-in fade-in delay-300">
            {t("subtitle")}
          </h2>
          <p className="text-secondary-foreground text-center font-semibold animate-in fade-in delay-500">
            {t("description")}
          </p>
        </div>
        <div className="flex flex-row gap-6 my-auto mt-6 animate-in fade-in justify-center ">
          <Button
            size="lg"
            className="min-w-[160px]"
            onClick={() => setIsQrDialogOpen(true)}
          >
            Get Efoyy Driver
          </Button>
          <Button
            size="lg"
            className="min-w-[160px] bg-muted"
            variant="secondary"
          >
            Get Efoyy Passanger
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
