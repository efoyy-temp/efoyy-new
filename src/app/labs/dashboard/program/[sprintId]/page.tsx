"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    ArrowLeft,
    PlayCircle,
    CheckCircle2,
    Lock,
    Clock,
    Terminal,
    ChevronRight,
    Zap,
    Layout,
    Layers
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";

const SPRINT_DETAILS = {
    3: {
        title: "Interaction Basics",
        description: "Learn how to make your websites come alive with JavaScript events and form interactions. Move from static layouts to living, breathing software.",
        duration: "2 Weeks",
        mission: "Bank Interaction UI",
        modules: [
            {
                id: "m1",
                title: "The DOM Tree",
                lessons: [
                    { id: "l1", title: "What is the DOM?", duration: "10m", completed: true },
                    { id: "l2", title: "Selecting Elements", duration: "15m", completed: true },
                ]
            },
            {
                id: "m2",
                title: "Listening to Events",
                lessons: [
                    { id: "l3", title: "Click & Hover Events", duration: "12m", completed: true },
                    { id: "l4", title: "Input & Change Events", duration: "20m", active: true },
                ]
            },
            {
                id: "m3",
                title: "Form Validation",
                lessons: [
                    { id: "l5", title: "The 'submit' Event", duration: "18m", locked: true },
                    { id: "l6", title: "Error Handling Basics", duration: "25m", locked: true },
                ]
            }
        ]
    }
};

export default function SprintDetailPage() {
    const params = useParams();
    const sprintId = params.sprintId as string;
    const sprint = SPRINT_DETAILS[Number(sprintId)] || SPRINT_DETAILS[3];

    return (
        <div className="min-h-full bg-background/50 relative overflow-hidden">
            {/* Background Aesthetic Text */}
            <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none select-none overflow-hidden">
                <h1 className="text-[25rem] font-black tracking-tighter leading-none transform translate-x-1/4 -translate-y-1/4 italic">
                    {sprintId}
                </h1>
            </div>

            <div className="relative z-10 p-8 max-w-6xl mx-auto space-y-20 pb-40">
                {/* Navigation */}
                <Link href="/labs/program" className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-all font-black uppercase tracking-[0.3em] text-[10px] group bg-muted/20 px-6 py-3 rounded-full border border-border/20">
                    <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" /> Back to Roadmap
                </Link>

                {/* Improved Header */}
                <header className="space-y-8 relative">
                    <div className="flex items-center gap-6">
                        <Badge className="bg-primary/20 text-primary border-2 border-primary/20 font-black tracking-[0.4em] uppercase text-[11px] px-8 py-2 rounded-full shadow-lg shadow-primary/5">
                            PHASE {sprintId}
                        </Badge>
                        <div className="h-1 w-12 bg-border/20 rounded-full" />
                        <div className="flex items-center gap-2 text-muted-foreground font-black uppercase tracking-widest text-[10px]">
                            <Clock className="size-4 text-primary" />
                            {sprint.duration} Est. Runtime
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight italic">
                            {sprint.title.split(' ')[0]} <br />
                            <span className="text-primary NOT-italic">{sprint.title.split(' ')[1]}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed italic border-l-4 border-primary/20 pl-8 py-2 opacity-80">
                            {sprint.description}
                        </p>
                    </div>
                </header>

                {/* Mission Card: Refined */}
                <div className="relative">
                    <div className="absolute inset-x-0 -top-4 -bottom-4 bg-primary/5 blur-3xl rounded-[4rem] -z-10" />
                    <Card className="border-4 border-border/40 bg-card/80 backdrop-blur-2xl shadow-3xl rounded-[3.5rem] overflow-hidden group border-dashed hover:border-primary/20 transition-all duration-700">
                        <CardContent className="p-16 flex flex-col lg:flex-row items-center gap-16">
                            <div className="size-40 rounded-[3rem] bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-3xl border-2 border-primary/10 relative">
                                <Zap className="size-20" />
                                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex-1 text-center lg:text-left space-y-2">
                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-2 opacity-80">Final Objective</p>
                                <h3 className="text-4xl font-black tracking-tighter italic uppercase leading-tight">{sprint.mission}</h3>
                                <p className="text-lg font-medium text-muted-foreground max-w-xl opacity-70">Engineer a high-frequency banking interface with synchronized DOM updates and robust error handling.</p>
                            </div>
                            <Button className="h-20 px-10 text-xl font-black rounded-3xl shadow-3xl shadow-primary/30 group uppercase tracking-tighter transform hover:scale-105 transition-all">
                                ENGAGE <ChevronRight className="size-6 ml-2 group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Modules: Standardized Hierarchy */}
                <div className="space-y-24">
                    {sprint.modules.map((module, i) => (
                        <section key={module.id} className="space-y-12">
                            <div className="flex items-center gap-6">
                                <div className="size-14 rounded-2xl bg-muted border-4 border-border/40 flex items-center justify-center font-black text-2xl italic uppercase shadow-xl transform -rotate-3 transition-transform hover:rotate-0">
                                    {i + 1}
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.4em] opacity-50">NODE MODULE</p>
                                    <h2 className="text-3xl font-black tracking-tighter italic uppercase leading-none">{module.title}</h2>
                                </div>
                            </div>

                            <div className="grid gap-6 pl-0 lg:pl-24">
                                {module.lessons.map((lesson) => (
                                    <Link
                                        key={lesson.id}
                                        href={lesson.locked ? "#" : `/labs/program/${sprintId}/${lesson.id}`}
                                        className={cn(
                                            "flex flex-col md:flex-row md:items-center justify-between p-10 rounded-[3rem] border-4 transition-all duration-500 group relative overflow-hidden",
                                            lesson.active
                                                ? "bg-primary text-primary-foreground border-primary shadow-3xl scale-[1.03] z-20 italic ring-8 ring-primary/10"
                                                : lesson.locked
                                                    ? "bg-muted/5 border-border/20 opacity-30 grayscale cursor-not-allowed"
                                                    : "bg-card border-border/40 hover:bg-muted/10 hover:border-primary/40 shadow-xl"
                                        )}
                                    >
                                        <div className="flex items-center gap-10">
                                            <div className={cn(
                                                "size-20 rounded-[1.5rem] flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110",
                                                lesson.active ? "bg-white text-primary" :
                                                    lesson.completed ? "bg-green-500 text-white" : "bg-muted text-muted-foreground border-2 border-border/20"
                                            )}>
                                                {lesson.completed ? <CheckCircle2 className="size-10" /> :
                                                    lesson.locked ? <Lock className="size-10" /> : <PlayCircle className="size-10" />}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-4 mb-2">
                                                    <p className={cn(
                                                        "text-[10px] font-black uppercase tracking-[0.4em] opacity-60",
                                                        lesson.active ? "text-white" : "text-muted-foreground"
                                                    )}>
                                                        0{i + 1} · 0{lesson.id[1]}
                                                    </p>
                                                    {lesson.active && <Badge className="bg-white/20 text-white border-white/20 text-[9px] h-5 px-3 font-black uppercase tracking-widest">TRANSMITTING</Badge>}
                                                </div>
                                                <h4 className="text-xl font-black tracking-tighter uppercase">{lesson.title}</h4>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-12 mt-8 md:mt-0 md:pl-12 md:border-l border-white/10">
                                            <div className="text-center md:text-right">
                                                <p className="text-3xl font-black italic tabular-nums leading-none">{lesson.duration}</p>
                                                <p className={cn(
                                                    "text-[10px] uppercase font-black tracking-[0.3em] mt-1.5",
                                                    lesson.active ? "text-white/60" : "text-muted-foreground"
                                                )}>Runtime</p>
                                            </div>
                                            <div className={cn(
                                                "size-14 rounded-full border-4 flex items-center justify-center transition-all shadow-xl",
                                                lesson.active ? "bg-white border-white text-primary" : "border-border/40 group-hover:bg-primary group-hover:border-primary group-hover:text-white"
                                            )}>
                                                <ChevronRight className="size-8" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
