"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Trophy,
    Calendar,
    MessageCircle,
    CheckCircle2,
    AlertTriangle,
    ArrowRight,
    TrendingUp,
    User,
    Activity,
    Zap
} from "lucide-react";

export default function ParentDashboard() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-16 pb-32">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-4">
                        <Badge className="bg-primary/20 text-primary border-primary/20 font-black tracking-[0.3em] uppercase text-[11px] px-6 py-1.5 rounded-full">
                            PARENT OVERWATCH
                        </Badge>
                        <div className="h-1.5 w-1.5 rounded-full bg-border" />
                        <span className="text-xs font-black text-muted-foreground uppercase tracking-widest opacity-60">Hana · Grade 6</span>
                    </div>
                    <h1 className="text-8xl font-black tracking-tighter leading-[0.8]">Hana's <span className="text-primary italic">Trajectory.</span></h1>
                    <p className="text-2xl text-muted-foreground font-medium max-w-3xl leading-relaxed italic border-l-4 border-primary/40 pl-8">
                        Monitor attendance, track sprint progress, and read latest mentor feedback. Ensure the trajectory remains optimal.
                    </p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                    <Button variant="outline" className="gap-3 border-4 border-border/40 font-black h-20 px-10 text-xl rounded-3xl hover:bg-muted group uppercase tracking-tighter">
                        <Calendar className="size-6 text-primary group-hover:scale-110 transition-transform" /> Sync Meeting
                    </Button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Stats Cards */}
                <Card className="border-border/40 bg-card/50 backdrop-blur-xl shadow-2xl rounded-[2.5rem] overflow-hidden group hover:border-primary/20 transition-all duration-500">
                    <CardContent className="p-10 flex items-center gap-8">
                        <div className="size-20 rounded-[1.5rem] bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl border border-primary/10">
                            <TrendingUp className="size-10" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-1 opacity-60">Attendance</p>
                            <p className="text-5xl font-black italic tracking-tighter">90%</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-border/40 bg-card/50 backdrop-blur-xl shadow-2xl rounded-[2.5rem] overflow-hidden group hover:border-primary/20 transition-all duration-500">
                    <CardContent className="p-10 flex items-center gap-8">
                        <div className="size-20 rounded-[1.5rem] bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl border border-primary/10">
                            <Activity className="size-10" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-1 opacity-60">Current Mission</p>
                            <p className="text-5xl font-black italic tracking-tighter uppercase">Sprint 3</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-border/40 bg-primary/5 shadow-2xl rounded-[2.5rem] overflow-hidden group hover:border-primary/20 transition-all duration-500 border-2 border-dashed">
                    <CardContent className="p-10 flex items-center gap-8">
                        <div className="size-20 rounded-[1.5rem] bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-500 shadow-xl border border-green-500/10">
                            <CheckCircle2 className="size-10" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-1 opacity-60">Status</p>
                            <p className="text-5xl font-black italic tracking-tighter uppercase text-green-500">ON TRACK</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Feedback History */}
                <section className="space-y-10">
                    <h2 className="text-4xl font-black tracking-tighter flex items-center gap-4 italic uppercase">
                        <div className="size-1 w-8 bg-primary rounded-full" />
                        MENTOR CRITIQUE
                    </h2>
                    <Card className="border-border/40 bg-background/50 backdrop-blur-xl overflow-hidden rounded-[3rem] shadow-2xl border-b-8 border-b-primary/40">
                        <CardContent className="p-12 space-y-10">
                            <div className="p-10 rounded-[2.5rem] bg-muted/20 border-2 border-border/40 space-y-8 relative group hover:bg-muted/30 transition-all duration-500">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <div className="size-14 rounded-2xl bg-primary/20 flex items-center justify-center font-black border-2 border-primary/20 text-sm shadow-xl">JS</div>
                                        <div>
                                            <p className="text-xl font-black italic italic">Solomon Joseph</p>
                                            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1 opacity-60">Software Engineer Mentor</p>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-4 py-1.5 border-border/40 rounded-full h-8 flex items-center">MAR 5, 2026</Badge>
                                </div>
                                <p className="text-2xl font-black italic text-muted-foreground leading-relaxed italic border-l-4 border-primary/40 pl-8">
                                    "Hana has made great progress with HTML. She is beginning to understand CSS layouts and is participating well in group discussions. Her banking project logic is coming along nicely."
                                </p>
                            </div>
                            <Button variant="outline" className="w-full h-20 font-black italic text-xl gap-4 border-4 border-border/40 rounded-[2rem] hover:bg-muted transition-all uppercase tracking-tighter">
                                Archived Sessions <ArrowRight className="size-6 text-primary" />
                            </Button>
                        </CardContent>
                    </Card>
                </section>

                {/* Attendance Log */}
                <section className="space-y-10">
                    <h2 className="text-4xl font-black tracking-tighter flex items-center gap-4 italic uppercase">
                        <div className="size-1 w-8 bg-primary rounded-full" />
                        SENSORY LOG
                    </h2>
                    <Card className="border-border/40 bg-background/50 backdrop-blur-xl overflow-hidden rounded-[3rem] shadow-2xl border-b-8 border-b-destructive/40">
                        <CardContent className="p-12 space-y-10">
                            {/* Warning State */}
                            <div className="flex items-start gap-8 p-10 rounded-[2.5rem] bg-destructive/5 border-2 border-destructive/20 group hover:bg-destructive/10 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-10">
                                    <AlertTriangle className="size-20 text-destructive" />
                                </div>
                                <AlertTriangle className="size-14 text-destructive shrink-0 mt-3 animate-pulse" />
                                <div className="space-y-2 relative z-10">
                                    <h4 className="text-3xl font-black italic tracking-tighter uppercase text-destructive">Anomaly Detected</h4>
                                    <p className="text-lg font-black text-destructive/70 leading-relaxed italic opacity-80 max-w-sm uppercase tracking-tighter">
                                        Student has missed 2 sessions in the last month. Ensure catch-up on Sprint 2 materials is prioritized.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { date: "Feb 2", status: "PRESENT" },
                                    { date: "Feb 9", status: "PRESENT" },
                                    { date: "Feb 16", status: "ABSENT" },
                                    { date: "Feb 23", status: "ABSENT" },
                                    { date: "Mar 2", status: "PRESENT" },
                                ].reverse().map((log, i) => (
                                    <div key={i} className="flex items-center justify-between p-8 rounded-[1.8rem] border-2 border-border/40 hover:bg-muted/20 transition-all group cursor-pointer shadow-sm">
                                        <span className="font-black italic text-xl uppercase tracking-tighter text-muted-foreground group-hover:text-foreground transition-colors">{log.date}, 2026</span>
                                        <Badge
                                            className={log.status === 'PRESENT'
                                                ? 'bg-green-500/10 text-green-500 border-2 border-green-500/20 text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-sm'
                                                : 'bg-destructive/10 text-destructive border-2 border-destructive/20 text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-sm'}
                                        >
                                            {log.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    );
}
