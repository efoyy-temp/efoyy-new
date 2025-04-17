'use client';
import { Car, Clock, CreditCard } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useTranslations } from 'next-intl'

export function RideOptions() {
  const t = useTranslations('ride');
  
  return (
    <div className="space-y-4">
      <div className="text-sm font-medium">{t('chooseRideType')}</div>
      <RadioGroup defaultValue="standard" className="grid grid-cols-3 gap-4">
        <div>
          <RadioGroupItem value="economy" id="economy" className="peer sr-only" />
          <Label
            htmlFor="economy"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Car className="mb-3 h-6 w-6" />
            <span className="text-sm font-medium">{t('economy')}</span>
            <span className="text-xs text-muted-foreground">{t('economyPrice')}</span>
          </Label>
        </div>
        <div>
          <RadioGroupItem value="standard" id="standard" className="peer sr-only" />
          <Label
            htmlFor="standard"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Car className="mb-3 h-6 w-6" />
            <span className="text-sm font-medium">{t('standard')}</span>
            <span className="text-xs text-muted-foreground">{t('standardPrice')}</span>
          </Label>
        </div>
        <div>
          <RadioGroupItem value="premium" id="premium" className="peer sr-only" />
          <Label
            htmlFor="premium"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Car className="mb-3 h-6 w-6" />
            <span className="text-sm font-medium">{t('premium')}</span>
            <span className="text-xs text-muted-foreground">{t('premiumPrice')}</span>
          </Label>
        </div>
      </RadioGroup>
      <div className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-2">
          <CreditCard className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{t('paymentMethod')}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{t('estimatedTime')}</span>
        </div>
      </div>
    </div>
  )
}
