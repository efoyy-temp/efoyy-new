"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LabsEnroll() {
  return (
    <div className="min-h-screen pt-24 flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 p-6 md:p-16 lg:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-md w-full mx-auto md:mx-0"
        >
          <div className="mb-10">
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Application</h1>
            <p className="text-muted-foreground font-light">
              Begin your application for the Summer 2026 cohort. Spaces are strictly limited.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-xs uppercase tracking-widest text-muted-foreground">Student First Name</Label>
                <Input id="firstName" className="h-12 border-border/50 bg-muted/10 focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-xs uppercase tracking-widest text-muted-foreground">Student Last Name</Label>
                <Input id="lastName" className="h-12 border-border/50 bg-muted/10 focus-visible:ring-primary" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="grade" className="text-xs uppercase tracking-widest text-muted-foreground">Current Grade Level</Label>
              <Select>
                <SelectTrigger id="grade" className="h-12 border-border/50 bg-muted/10 focus:ring-primary">
                  <SelectValue placeholder="Select Grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5th Grade</SelectItem>
                  <SelectItem value="6">6th Grade</SelectItem>
                  <SelectItem value="7">7th Grade</SelectItem>
                  <SelectItem value="8">8th Grade</SelectItem>
                  <SelectItem value="9">9th Grade</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="parentEmail" className="text-xs uppercase tracking-widest text-muted-foreground">Parent/Guardian Email</Label>
              <Input id="parentEmail" type="email" className="h-12 border-border/50 bg-muted/10 focus-visible:ring-primary" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience" className="text-xs uppercase tracking-widest text-muted-foreground">Prior Coding Experience (Optional)</Label>
              <Textarea 
                id="experience" 
                className="min-h-[100px] border-border/50 bg-muted/10 focus-visible:ring-primary"
                placeholder="Briefly describe any prior experience..."
              />
            </div>

            <Button type="submit" className="w-full h-14 text-base mt-8">
              Submit Application
            </Button>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              By submitting, you agree to our Admissions Policy.
            </p>
          </form>
        </motion.div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden md:block w-1/2 relative bg-muted/20 border-l border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg aspect-square"
          >
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
              alt="Coding setup" 
              className="object-cover w-full h-full rounded-sm shadow-2xl grayscale opacity-80 mix-blend-luminosity"
            />
            <div className="absolute inset-0 border border-border/50 mix-blend-overlay"></div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center">
              <span className="font-mono text-xs text-primary">SYS.INIT</span>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-12 bg-background border border-border/50 flex items-center justify-center">
              <span className="font-mono text-xs tracking-widest">COHORT_26</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
