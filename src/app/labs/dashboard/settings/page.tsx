"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
    User,
    Bell,
    ShieldCheck,
    CreditCard,
    Globe,
    Camera,
    Layout,
    Terminal,
    Save,
    Trash2,
    ChevronRight
} from "lucide-react";

const SETTING_SECTIONS = [
    { id: "profile", label: "Identity", icon: User },
    { id: "notifications", label: "Signals", icon: Bell },
    { id: "privacy", label: "Security", icon: ShieldCheck },
    { id: "billing", label: "Tier", icon: CreditCard },
    { id: "language", label: "System", icon: Globe },
];

export default function SettingsPage() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-16 pb-32">
            <header className="space-y-6">
                <Badge className="bg-primary/20 text-primary border-primary/20 font-black tracking-[0.3em] uppercase text-[10px] px-6 py-1.5 rounded-full">
                    System Preferences
                </Badge>
                <h1 className="text-8xl font-black tracking-tighter leading-[0.8]">The <span className="text-primary italic">Config.</span></h1>
                <p className="text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed italic border-l-4 border-primary/40 pl-8">
                    Adjust your machine settings, update your identity, and fine-tune your signal density.
                </p>
            </header>

            <div className="flex flex-col lg:flex-row gap-16">
                {/* Settings Nav */}
                <nav className="w-full lg:w-72 shrink-0 space-y-3">
                    {SETTING_SECTIONS.map((s) => (
                        <button
                            key={s.id}
                            className={`w-full flex items-center justify-between p-6 rounded-[2rem] transition-all duration-500
                ${s.id === "profile"
                                    ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/20 scale-[1.05] italic"
                                    : "bg-muted/10 border-2 border-transparent text-muted-foreground hover:bg-muted/40 hover:border-border/40"}`}
                        >
                            <div className="flex items-center gap-4">
                                <s.icon className="size-6 shrink-0" />
                                <span className="text-xl font-black uppercase tracking-tighter">{s.label}</span>
                            </div>
                            {s.id === "profile" && <ChevronRight className="size-6" />}
                        </button>
                    ))}

                    <div className="pt-20">
                        <Button variant="ghost" className="w-full h-16 rounded-2xl text-destructive font-black gap-3 hover:bg-destructive/5 hover:text-destructive uppercase tracking-widest text-[10px]">
                            <Trash2 className="size-5" /> Deactivate Grid Profile
                        </Button>
                    </div>
                </nav>

                {/* Form Area */}
                <div className="flex-1 space-y-20">
                    {/* Identity section */}
                    <section className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-5xl font-black italic tracking-tighter leading-none">VITAL SIGNS</h2>
                            <p className="text-lg text-muted-foreground font-medium opacity-60">Update your primary identity on the global network.</p>
                        </div>

                        <div className="flex items-center gap-10 p-10 rounded-[3rem] bg-muted/20 border-2 border-border/40 group hover:border-primary/20 transition-all duration-500">
                            <div className="relative group/avatar">
                                <div className="size-32 rounded-[2.5rem] bg-primary/20 flex items-center justify-center text-5xl font-black text-primary border-4 border-primary/10 shadow-2xl transform transition-transform group-hover/avatar:rotate-6">
                                    Z
                                </div>
                                <button className="absolute -right-4 -bottom-4 size-16 bg-background rounded-full border-4 border-border/40 flex items-center justify-center shadow-2xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                    <Camera className="size-6" />
                                </button>
                            </div>
                            <div className="space-y-3">
                                <p className="text-2xl font-black italic tracking-tighter">Avatar Synchronization</p>
                                <p className="text-sm text-muted-foreground font-medium max-w-sm">JPG, GIF or PNG. Max size 2MB. Your avatar represents you globally.</p>
                                <div className="flex gap-4 pt-2">
                                    <Button className="font-black px-6 rounded-xl text-xs h-10 shadow-lg shadow-primary/10 uppercase tracking-widest">Upgrade Intel</Button>
                                    <Button variant="ghost" className="font-black px-6 rounded-xl text-xs h-10 uppercase tracking-widest text-muted-foreground">Destroy</Button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-12 rounded-[3rem] bg-card border-2 border-border/40 shadow-2xl">
                            <div className="space-y-4">
                                <Label htmlFor="firstName" className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Grid First Name</Label>
                                <Input id="firstName" defaultValue="ZIANA" className="h-16 bg-muted/30 border-2 border-border/40 focus:border-primary/50 text-xl rounded-2xl font-black italic px-6" />
                            </div>
                            <div className="space-y-4">
                                <Label htmlFor="lastName" className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Grid Last Name</Label>
                                <Input id="lastName" defaultValue="WORK" className="h-16 bg-muted/30 border-2 border-border/40 focus:border-primary/50 text-xl rounded-2xl font-black italic px-6" />
                            </div>
                            <div className="md:col-span-2 space-y-4">
                                <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Neural Email Sync</Label>
                                <Input id="email" type="email" defaultValue="ziana@efoyy.com" className="h-16 bg-muted/30 border-2 border-border/40 focus:border-primary/50 text-xl rounded-2xl font-black italic px-6" />
                            </div>
                            <div className="md:col-span-2 space-y-4">
                                <Label htmlFor="bio" className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Identity Narrative</Label>
                                <textarea
                                    id="bio"
                                    rows={4}
                                    placeholder="Briefly explain your mission on the platform..."
                                    className="w-full rounded-[2rem] border-2 border-border/40 bg-muted/30 p-8 text-lg font-black italic focus:outline-none focus:ring-8 focus:ring-primary/5 transition-all resize-none italic"
                                />
                            </div>
                        </div>
                    </section>

                    <Separator className="bg-border/20 h-1 rounded-full" />

                    {/* Signal Patterns */}
                    <section className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-5xl font-black italic tracking-tighter leading-none">SIGNAL DENSITY</h2>
                            <p className="text-lg text-muted-foreground font-medium opacity-60">Control how information flows into your sensory array.</p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { label: "Course Pulse", sub: "Instructor announcements and global updates", active: true },
                                { label: "Builder Signal", sub: "Alerts when new modules or missions go live", active: true },
                                { label: "Feedback Relay", sub: "Critique and scores from your mentors", active: true },
                                { label: "Neural Promos", sub: "Discounts and access codes for higher tiers", active: false },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-8 rounded-[2rem] border-2 border-border/40 bg-card hover:bg-muted/10 transition-all duration-300">
                                    <div className="space-y-1">
                                        <p className="text-2xl font-black tracking-tighter uppercase italic">{item.label}</p>
                                        <p className="text-sm text-muted-foreground font-medium opacity-60">{item.sub}</p>
                                    </div>
                                    <div className={`h-12 w-20 rounded-full cursor-pointer p-2 transition-all duration-500 flex ${item.active ? 'bg-primary justify-end pr-3' : 'bg-muted justify-start pl-3'} items-center`}>
                                        <div className="size-6 bg-white rounded-full shadow-2xl" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="flex flex-col md:flex-row gap-6 pt-10">
                        <Button className="h-24 px-16 text-2xl font-black rounded-[2rem] shadow-2xl shadow-primary/30 flex-1 group">
                            SAVE CONFIGURATION <Save className="size-8 ml-4 group-hover:scale-110 transition-transform" />
                        </Button>
                        <Button variant="outline" className="h-24 px-12 text-xl font-black border-4 border-border/40 rounded-[2.5rem] hover:bg-muted group">
                            CANCEL <Layout className="size-6 ml-4 opacity-50 group-hover:opacity-100 transition-all" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
