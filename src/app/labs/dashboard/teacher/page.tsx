"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Users,
    MessageCircle,
    FileText,
    CheckCircle2,
    PlusSquare,
    Activity,
    ArrowRight,
    UserCheck,
    Zap
} from "lucide-react";

export default function TeacherDashboard() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-16 pb-32">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-4">
                        <Badge className="bg-primary/20 text-primary border-primary/20 font-black tracking-[0.3em] uppercase text-[11px] px-6 py-1.5 rounded-full">
                            MENTOR JUNCTION
                        </Badge>
                        <div className="h-1.5 w-1.5 rounded-full bg-border" />
                        <span className="text-xs font-black text-muted-foreground uppercase tracking-widest opacity-60">Mr. Solomon · Software Mentor</span>
                    </div>
                    <h1 className="text-8xl font-black tracking-tighter leading-[0.8]">Mentor <span className="text-primary italic">Cockpit.</span></h1>
                    <p className="text-2xl text-muted-foreground font-medium max-w-3xl leading-relaxed italic border-l-4 border-primary/40 pl-8">
                        Review builds, analyze trajectory data, and broadcast direct signals to your student nodes. Influence the craft.
                    </p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                    <Button className="h-20 px-10 text-xl font-black rounded-3xl shadow-2xl shadow-primary/30 group uppercase tracking-tighter">
                        BROADCAST SIGNAL <Zap className="size-6 ml-3 group-hover:animate-bounce transition-transform" />
                    </Button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {[
                    { label: "Active Nodes", value: "48", icon: Users, sub: "Synced Students" },
                    { label: "Pending Builds", value: "12", icon: FileText, sub: "Critique Required" },
                    { label: "Class Pulse", value: "85%", icon: Activity, sub: "Engagement Level" },
                    { label: "Verified Today", value: "9", icon: UserCheck, sub: "Mastery Confirmed" },
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
                        <h2 className="text-4xl font-black tracking-tighter italic uppercase underline decoration-primary decoration-4 underline-offset-8">Critical Transmissions</h2>
                        <div className="space-y-4">
                            {[
                                { name: "HANA WORK", mission: "SPRINT 3 BANKING FORM", status: "WAITING CRITIQUE" },
                                { name: "YOHAN DESSA", mission: "SPRINT 2 CSS GRID", status: "WAITING CRITIQUE" },
                                { name: "BETHEL ABEX", mission: "SPRINT 3 BANKING FORM", status: "RESUBMISSION" },
                                { name: "DAWIT KALEB", mission: "SPRINT 1 SEMANTIC HTML", status: "WAITING CRITIQUE" },
                            ].map((stu, i) => (
                                <div key={i} className="flex items-center justify-between p-8 rounded-[2rem] border-2 border-border/40 hover:bg-muted/20 transition-all group cursor-pointer shadow-sm">
                                    <div className="flex items-center gap-6">
                                        <div className="size-14 rounded-2xl bg-muted/40 border-2 border-border/40 flex items-center justify-center font-black text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-all">
                                            {stu.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className="text-xl font-black italic italic">{stu.name}</p>
                                            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1 opacity-60">MISSION: {stu.mission}</p>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="text-primary border-primary/40 font-black px-6 py-2 rounded-full uppercase tracking-widest text-[10px] bg-primary/5">{stu.status}</Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-10">
                    <Card className="border-border/40 bg-card/80 backdrop-blur-xl rounded-[3rem] shadow-2xl border-b-8 border-b-border/40">
                        <CardHeader className="p-10 border-b border-border/20">
                            <h3 className="text-3xl font-black italic tracking-tighter uppercase flex items-center gap-4">
                                <MessageCircle className="size-8 text-primary" /> Signal Stream
                            </h3>
                        </CardHeader>
                        <CardContent className="p-10 space-y-8">
                            <div className="space-y-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-start gap-5 p-4 rounded-2xl border-2 border-border/20 bg-muted/10 opacity-60">
                                        <div className="size-10 rounded-xl bg-muted/40 shrink-0" />
                                        <div className="space-y-1">
                                            <p className="text-sm font-black italic">Lab Node {i}</p>
                                            <p className="text-xs text-muted-foreground italic">"Mentor help requested for Grid layout..."</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full h-16 font-black italic text-xl gap-4 rounded-2xl shadow-xl shadow-primary/20 group uppercase tracking-tighter">
                                OPEN COMMS <ArrowRight className="size-6 group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
