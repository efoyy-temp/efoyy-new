"use client";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { useState } from "react";
import { QrDialog } from "../qr-dialog";
import { PassengerDialog } from "../passenger-dialog";

const Overview = () => {
  const t = useTranslations("home.overview");
  const [isDriverDialogOpen, setIsDriverDialogOpen] = useState(false);
  const [isPassengerDialogOpen, setIsPassengerDialogOpen] = useState(false);

  return (
    <div className="flex justify-center min-h-screen items-center">
      <QrDialog open={isDriverDialogOpen} onOpenChange={setIsDriverDialogOpen} />
      <PassengerDialog
        open={isPassengerDialogOpen}
        onOpenChange={setIsPassengerDialogOpen}
      />
      <div className="max-w-screen-xl px-6 -mt-20 mb-9 flex flex-col gap-6 justify-center">
        <div className="flex items-center flex-col gap-4">
          <h2 className="text-6xl max-w-2xl text-center leading-tight text-foreground bg-clip-text font-bold animate-in fade-in delay-300">
            {t("subtitle")}
          </h2>
          <p className="text-secondary-foreground max-w-xl text-center font-semibold animate-in fade-in delay-500">
            {t("description")}
          </p>
        </div>
        <div className="flex flex-row gap-6 my-auto mt-6 animate-in fade-in justify-center ">
          <Button
            size="lg"
            className="min-w-[160px]"
            onClick={() => setIsPassengerDialogOpen(true)}
          >
            {t("getForPassenger")}
          </Button>
          <Button
            size="lg"
            className="min-w-[160px] bg-muted"
            variant="secondary"
            onClick={() => setIsDriverDialogOpen(true)}
          >
            {t("getForDriver")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
