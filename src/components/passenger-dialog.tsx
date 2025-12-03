"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import { Rocket } from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const PassengerDialog = (props: Props) => {
  const t = useTranslations("dialogs.passenger");

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent className="sm:max-w-md text-center p-8">
        <DialogHeader>
          <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
            <Rocket className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-center text-2xl font-bold tracking-tight pt-4">
            {t("comingSoon.title")}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-muted-foreground text-center">
            {t("comingSoon.description")}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
