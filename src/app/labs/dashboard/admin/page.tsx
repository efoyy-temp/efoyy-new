"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Users,
    GraduationCap,
    Settings,
    Activity,
    ArrowRight,
    Database,
    Lock,
    PlusSquare
} from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-16 pb-32">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-4">
                        <Badge className="bg-primary/20 text-primary border-primary/20 font-black tracking-[0.3em] uppercase text-[11px] px-6 py-1.5 rounded-full">
                            CORE INFRASTRUCTURE
                        </Badge>
                        <div className="h-1.5 w-1.5 rounded-full bg-border" />
                        <span className="text-xs font-black text-muted-foreground uppercase tracking-widest opacity-60">Super Admin · Root Access</span>
                    </div>
                    <h1 className="text-8xl font-black tracking-tighter leading-[0.8]">Master <span className="text-primary italic">Terminal.</span></h1>
                    <p className="text-2xl text-muted-foreground font-medium max-w-3xl leading-relaxed italic border-l-4 border-primary/40 pl-8">
                        Govern the entire educational machine. Manage users, monitor global trajectories, and configure system-wide parameters.
                    </p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                    <Button className="h-20 px-10 text-xl font-black rounded-3xl shadow-2xl shadow-primary/30 group uppercase tracking-tighter">
                        PROVISION USERS <PlusSquare className="size-6 ml-3 group-hover:rotate-90 transition-transform" />
                    </Button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {[
                    { label: "Total Nodes", value: "2,481", icon: Users, sub: "Active Students" },
                    { label: "Intelligence Hubs", value: "12", icon: GraduationCap, sub: "Regional Labs" },
                    { label: "System Uptime", value: "99.9%", icon: Activity, sub: "High Priority" },
                    { label: "Data Integrity", value: "VERIFIED", icon: Database, sub: "Blockchain Sync" },
                ].map((stat, i) => (
                    <Card key={i} className="border-border/40 bg-card/50 backdrop-blur-xl shadow-2xl rounded-[2.5rem] overflow-hidden group hover:border-primary/20 transition-all duration-500">
                        <CardContent className="p-8 flex items-center gap-6">
                            <div className="size-16 rounded-[1.2rem] bg-primary/10 flex items-center justify-center text-primary border border-primary/10 shadow-lg group-hover:bg-primary group-hover:text-white transition-all">
                                <stat.icon className="size-8" />
                            </div>
                            <div>
                                <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-1 opacity-60">{stat.label}</p>
                                <p className="text-3xl font-black italic tracking-tighter">{stat.value}</p>
                                <p className="text-[10px] text-primary font-black uppercase tracking-widest mt-1 opacity-80">{stat.sub}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <Card className="lg:col-span-2 border-border/40 bg-background/50 backdrop-blur-xl rounded-[3rem] shadow-2xl border-b-8 border-b-primary/40">
                    <CardContent className="p-12 space-y-10">
                        <h2 className="text-4xl font-black tracking-tighter italic uppercase underline decoration-primary decoration-4 underline-offset-8">Global Trajectories</h2>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center justify-between p-8 rounded-[2rem] border-2 border-border/40 hover:bg-muted/20 transition-all group cursor-pointer shadow-sm">
                                    <div className="flex items-center gap-6">
                                        <div className="size-12 rounded-xl bg-muted/40 border-2 border-border/40 flex items-center justify-center font-black text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-all">
                                            {i}
                                        </div>
                                        <div>
                                            <p className="text-lg font-black italic italic">Lab Hub {i} · Region Delta</p>
                                            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1 opacity-60">Current Mission: SPRINT 4 DATA FLOW</p>
                                        </div>
                                    </div>
                                    <Badge className="bg-primary/10 text-primary border-none font-black px-6 py-2 rounded-full uppercase tracking-widest text-[10px]">OPERATIONAL</Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-10">
                    <Card className="border-border/40 bg-destructive/5 backdrop-blur-xl rounded-[3rem] shadow-2xl border-b-8 border-b-destructive/40 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Lock className="size-20 text-destructive" />
                        </div>
                        <CardContent className="p-12 space-y-8 relative z-10">
                            <h3 className="text-3xl font-black italic tracking-tighter uppercase text-destructive">Security Core</h3>
                            <p className="text-lg font-black text-destructive/70 leading-relaxed italic opacity-80 uppercase tracking-tighter">
                                Automatic firewalls engaged. No unauthorized access attempts detected in last 24 cycles.
                            </p>
                            <Button variant="outline" className="w-full h-16 border-2 border-destructive/40 font-black rounded-2xl gap-3 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/60 transition-all uppercase tracking-widest text-destructive">
                                SECURITY RECOVERY
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="border-border/40 bg-card/80 backdrop-blur-xl rounded-[3rem] shadow-2xl border-b-8 border-b-border/40">
                        <CardContent className="p-12 space-y-8">
                            <h3 className="text-3xl font-black italic tracking-tighter uppercase">Settings Lab</h3>
                            <div className="space-y-4">
                                <Button variant="ghost" className="w-full h-14 justify-between font-black uppercase tracking-tighter border-2 border-transparent hover:border-primary/20 hover:bg-primary/5 hover:text-primary transition-all rounded-2xl px-6">
                                    System Sync <ArrowRight className="size-5" />
                                </Button>
                                <Button variant="ghost" className="w-full h-14 justify-between font-black uppercase tracking-tighter border-2 border-transparent hover:border-primary/20 hover:bg-primary/5 hover:text-primary transition-all rounded-2xl px-6">
                                    Node Permissions <ArrowRight className="size-5" />
                                </Button>
                                <Button variant="ghost" className="w-full h-14 justify-between font-black uppercase tracking-tighter border-2 border-transparent hover:border-primary/20 hover:bg-primary/5 hover:text-primary transition-all rounded-2xl px-6">
                                    Global Comms <ArrowRight className="size-5" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
