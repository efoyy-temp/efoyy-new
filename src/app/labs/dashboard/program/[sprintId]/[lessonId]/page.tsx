"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
    PlayCircle,
    ChevronLeft,
    ChevronRight,
    BookOpen,
    Terminal,
    MessageCircle,
    Maximize2,
    CheckCircle2,
    Lock,
    ArrowLeft,
    Zap,
    Cpu,
    Settings
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function LessonDetailPage() {
    const params = useParams();
    const [completed, setCompleted] = useState(false);

    return (
        <div className="h-full flex flex-col bg-background text-foreground overflow-hidden">
            {/* Dynamic Lesson Header: Standardized */}
            <header className="h-24 border-b-4 border-border/20 px-12 flex items-center justify-between shrink-0 bg-background/50 backdrop-blur-3xl z-40 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />

                <div className="flex items-center gap-10 relative z-10">
                    <Link href={`/labs/program/${params.sprintId}`} className="group flex items-center gap-5">
                        <div className="size-12 rounded-2xl bg-card border-2 border-border/40 flex items-center justify-center group-hover:border-primary/40 transition-all shadow-2xl group-hover:-translate-x-1">
                            <ArrowLeft className="size-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="space-y-0.5">
                            <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">SPRINT {params.sprintId} · NODE 04</p>
                            <h2 className="text-xl font-black italic tracking-tighter leading-none uppercase">Input & Change Events</h2>
                        </div>
                    </Link>
                    <div className="h-10 w-1 bg-border/40 rounded-full mx-2" />
                    <div className="flex items-center gap-6">
                        <div className="space-y-2">
                            <div className="w-56 h-3 bg-muted rounded-full overflow-hidden border-2 border-border/20 shadow-inner">
                                <div className="h-full bg-primary w-[75%] shadow-[0_0_20px_rgba(var(--primary-rgb),0.6)] animate-pulse" />
                            </div>
                            <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.4em] text-center">Neural Sync: 75%</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6 relative z-10">
                    <Button variant="outline" className="h-14 border-4 border-border/40 font-black italic uppercase tracking-[0.2em] text-[11px] rounded-2xl px-10 hover:bg-muted group transition-all">
                        COMMS <MessageCircle className="size-5 ml-4 group-hover:rotate-12 transition-transform" />
                    </Button>
                    <Button
                        disabled={completed}
                        onClick={() => setCompleted(true)}
                        className={cn(
                            "h-14 px-12 font-black italic uppercase tracking-[0.2em] text-[11px] rounded-2xl shadow-3xl transition-all duration-700 transform hover:scale-105",
                            completed ? "bg-green-500 hover:bg-green-600 shadow-green-500/30" : "bg-primary shadow-primary/30"
                        )}
                    >
                        {completed ? <CheckCircle2 className="size-5 mr-3" /> : <Zap className="size-5 mr-3" />}
                        {completed ? "VERIFIED" : "SYNC PROGRESS"}
                    </Button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Left Side: Video & Content */}
                <div className="flex-1 flex flex-col overflow-y-auto p-16 space-y-20 bg-muted/5 relative scrollbar-hide">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(var(--primary-rgb),0.03),transparent_60%)] pointer-events-none" />

                    {/* High-Fidelity Video Player */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="aspect-video w-full rounded-[4rem] bg-[#050505] border-8 border-border/40 shadow-4xl relative overflow-hidden cursor-pointer transform group-hover:scale-[1.01] transition-transform duration-700">
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent flex items-center justify-center">
                                <div className="size-32 rounded-full bg-primary flex items-center justify-center shadow-4xl group-hover:scale-110 transition-transform relative">
                                    <div className="absolute inset-0 bg-white/20 animate-ping rounded-full" />
                                    <PlayCircle className="size-16 fill-white ml-2 z-10" />
                                </div>
                            </div>
                            {/* Visual Data Overlay */}
                            <div className="absolute top-12 right-12 flex flex-col items-end gap-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                                <Badge className="bg-black/60 backdrop-blur-xl border-2 border-white/10 text-[9px] font-black tracking-widest px-4 py-2">HD 4K TRANSMISSION</Badge>
                                <Badge className="bg-primary/20 backdrop-blur-xl border-2 border-primary/40 text-primary text-[9px] font-black tracking-widest px-4 py-2 italic">LIVE SYNC ENABLED</Badge>
                            </div>
                        </div>
                    </div>

                    {/* Refined Content Area */}
                    <article className="max-w-4xl space-y-12 relative z-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-1 w-8 bg-primary rounded-full" />
                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] italic">Strategic Deep-Dive</p>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase leading-tight">Capturing <br /><span className="text-primary NOT-italic opacity-80 decoration-4 md:decoration-8 decoration-primary/20 underline-offset-8 underline">Intent.</span></h3>
                        </div>

                        <div className="text-xl md:text-2xl font-medium text-muted-foreground/80 leading-relaxed italic border-l-8 border-primary/20 pl-8 py-6 bg-primary/5 rounded-r-3xl shadow-sm transform -rotate-1">
                            How do we know when a user is interacting with our input fields? In this module, we dissect the <code>'input'</code> and <code>'change'</code> sensors. Mastering real-time UI is not an option—it is the prerequisite for modern engineering.
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">
                            {[
                                { icon: Terminal, title: "Neural Drill", desc: "Construct a live character frequency analyzer." },
                                { icon: BookOpen, title: "Tech Library", desc: "Dissect the event bubbling and delegation architecture." }
                            ].map((card, i) => (
                                <Card key={i} className="p-10 rounded-[3.5rem] bg-card border-4 border-border/40 space-y-6 hover:border-primary/40 transition-all duration-500 group shadow-2xl hover:-translate-y-2">
                                    <div className="size-18 rounded-[1.5rem] bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-2xl border-2 border-primary/10">
                                        <card.icon className="size-8" />
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-black italic tracking-tighter uppercase mb-2">{card.title}</h5>
                                        <p className="text-muted-foreground text-sm leading-relaxed font-medium opacity-80 italic">{card.desc}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </article>
                </div>

                {/* Neural Sandbox: Ultra High-Fidelity */}
                <div className="w-[500px] border-l-4 border-border/20 bg-[#080808] flex flex-col shrink-0 relative overflow-hidden">
                    {/* Dark glass background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                    <div className="h-24 border-b-4 border-border/20 flex items-center justify-between px-10 bg-[#0a0a0a]/80 backdrop-blur-3xl shrink-0 z-20">
                        <div className="flex items-center gap-4">
                            <div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                <Cpu className="size-4 text-primary animate-pulse" />
                            </div>
                            <p className="text-[11px] font-black uppercase tracking-[0.5em] text-primary italic">Neural Terminal v2.4</p>
                        </div>
                        <Settings className="size-5 text-muted-foreground/40 cursor-pointer hover:rotate-90 transition-transform" />
                    </div>

                    <div className="flex-1 p-10 overflow-y-auto space-y-12 relative z-10 scrollbar-hide">
                        <section className="space-y-8">
                            <div className="flex items-center justify-between">
                                <h4 className="text-2xl font-black tracking-tighter italic uppercase text-white/90">Main.js</h4>
                                <Badge variant="outline" className="text-[8px] font-black border-white/10 text-white/40 tracking-widest px-3 py-1 uppercase">Read Only</Badge>
                            </div>

                            <div className="p-10 rounded-[3rem] bg-[#030303] font-mono text-base leading-relaxed border-4 border-white/5 shadow-4xl min-h-[500px] relative group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="flex items-center gap-3 mb-10 opacity-30">
                                    <div className="size-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                    <div className="size-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                                    <div className="size-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                </div>

                                <div className="space-y-3 relative z-10">
                                    <p className="flex gap-4"><span className="text-[#555] select-none italic text-right w-6">01</span><span className="text-white/80"><span className="text-purple-400">const</span> sensor <span className="text-pink-400">=</span> document.querySelector(<span className="text-yellow-200">'#u_input'</span>);</span></p>
                                    <p className="flex gap-4"><span className="text-[#555] select-none italic text-right w-6">02</span><span className="text-white/80"><span className="text-purple-400">const</span> log <span className="text-pink-400">=</span> (e) <span className="text-pink-400">=&gt;</span> &#123;</span></p>
                                    <p className="flex gap-4"><span className="text-[#555] select-none italic text-right w-6">03</span><span className="text-white/60 ml-8">console.log(<span className="text-blue-400">`Signal Detect: $&#123;e.target.value&#125;`</span>);</span></p>
                                    <p className="flex gap-4"><span className="text-[#555] select-none italic text-right w-6">04</span><span className="text-white/80">&#125;;</span></p>
                                    <p className="flex gap-4"><span className="text-[#555] select-none italic text-right w-6">05</span><span className="text-white/40 italic">// Establish dynamic link</span></p>
                                    <p className="flex gap-4"><span className="text-[#555] select-none italic text-right w-6">06</span><span className="text-white/80">sensor.addEventListener(<span className="text-yellow-200">'input'</span>, log);</span></p>
                                </div>

                                <div className="absolute bottom-10 right-10">
                                    <Button size="icon" className="size-20 rounded-3xl bg-primary hover:bg-primary-600 shadow-4xl shadow-primary/40 transform hover:scale-110 transition-all active:scale-95 group">
                                        <PlayCircle className="size-10 fill-white" />
                                    </Button>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h4 className="text-2xl font-black tracking-tighter italic uppercase text-white/90 underline decoration-primary decoration-8 decoration-primary/20 underline-offset-8 mt-2">Neural Briefing</h4>
                            <div className="space-y-5">
                                {[
                                    { label: "SENSOR CLASS", val: "Dynamic Input", color: "text-blue-400" },
                                    { label: "PRIORITY", val: "Critical Path", color: "text-red-400" },
                                    { label: "SYNC STATUS", val: "Operational", color: "text-green-400" },
                                ].map((row, i) => (
                                    <div key={i} className="flex items-center justify-between p-8 rounded-[2rem] border-2 border-white/5 bg-white/5 hover:bg-white/10 transition-all transform hover:translate-x-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">{row.label}</span>
                                        <span className={cn("text-lg font-black italic tracking-tighter uppercase", row.color)}>{row.val}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="p-10 border-t-4 border-border/20 bg-[#0a0a0a]/90 backdrop-blur-3xl relative z-20">
                        <Button variant="outline" className="w-full h-20 rounded-[2rem] border-4 border-border/40 font-black italic text-xl flex items-center justify-between px-12 hover:bg-white/5 hover:border-primary/40 group transition-all">
                            NEXT TRANSMISSION <ChevronRight className="size-8 text-primary group-hover:translate-x-3 transition-transform duration-500" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
