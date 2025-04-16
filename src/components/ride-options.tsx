import { Car, Clock, CreditCard } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function RideOptions() {
  return (
    <div className="space-y-4">
      <div className="text-sm font-medium">Choose a ride type</div>
      <RadioGroup defaultValue="standard" className="grid grid-cols-3 gap-4">
        <div>
          <RadioGroupItem value="economy" id="economy" className="peer sr-only" />
          <Label
            htmlFor="economy"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Car className="mb-3 h-6 w-6" />
            <span className="text-sm font-medium">Economy</span>
            <span className="text-xs text-muted-foreground">$12-15</span>
          </Label>
        </div>
        <div>
          <RadioGroupItem value="standard" id="standard" className="peer sr-only" />
          <Label
            htmlFor="standard"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Car className="mb-3 h-6 w-6" />
            <span className="text-sm font-medium">Standard</span>
            <span className="text-xs text-muted-foreground">$18-22</span>
          </Label>
        </div>
        <div>
          <RadioGroupItem value="premium" id="premium" className="peer sr-only" />
          <Label
            htmlFor="premium"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Car className="mb-3 h-6 w-6" />
            <span className="text-sm font-medium">Premium</span>
            <span className="text-xs text-muted-foreground">$25-30</span>
          </Label>
        </div>
      </RadioGroup>
      <div className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-2">
          <CreditCard className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Visa •••• 4242</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">5 min away</span>
        </div>
      </div>
    </div>
  )
}
