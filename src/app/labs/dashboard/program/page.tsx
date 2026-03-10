"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ChevronRight,
    CheckCircle2,
    Lock,
    Terminal,
    Trophy,
    Rocket
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const PROGRAM_DATA = {
    grade: "Grade 6",
    title: "Software Foundations",
    sprints: [
        {
            id: 1, title: "Websites and Structure",
            goal: "Understand how the web works and build your first HTML tags.",
            status: "completed", lessons: 4, projects: 1
        },
        {
            id: 2, title: "Design Principles",
            goal: "Learn CSS to make your websites look beautiful and professional.",
            status: "completed", lessons: 6, projects: 1
        },
        {
            id: 3, title: "Interaction Basics",
            goal: "Learn JavaScript events and form validation.",
            status: "in-progress", lessons: 5, projects: 2
        },
        {
            id: 4, title: "Data & Forms",
            goal: "Handle user input and store data in memory.",
            status: "locked", lessons: 4, projects: 1
        },
        {
            id: 5, title: "Backend Logic",
            goal: "Learn how servers process information.",
            status: "locked", lessons: 8, projects: 2
        },
        {
            id: 6, title: "Final Capstone",
            goal: "Build a complete full-stack application from scratch.",
            status: "locked", lessons: 10, projects: 1
        }
    ]
};

export default function MyProgramPage() {
    return (
        <div className="p-8 max-w-5xl mx-auto space-y-12">
            {/* Header */}
            <header className="space-y-4">
                <div className="flex items-center gap-3">
                    <Badge className="bg-primary/20 text-primary border-primary/20 font-black tracking-widest uppercase text-[10px] px-3">
                        {PROGRAM_DATA.grade}
                    </Badge>
                    <div className="w-1.5 h-1.5 rounded-full bg-border" />
                    <span className="text-muted-foreground text-sm font-black uppercase tracking-widest">6 MONTH LEVEL UP</span>
                </div>
                <h1 className="text-6xl font-black tracking-tighter">Your <span className="text-primary italic">Roadmap.</span></h1>
                <p className="text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                    The software engineering program is divided into 6 intense sprints. Finish each one to build your portfolio and unlock the next tier.
                </p>
            </header>

            {/* Sprints List */}
            <div className="grid gap-8">
                {PROGRAM_DATA.sprints.map((sprint, index) => (
                    <div key={sprint.id} className="relative group">
                        {/* Timeline Line */}
                        {index !== PROGRAM_DATA.sprints.length - 1 && (
                            <div className="absolute left-[34px] top-20 bottom-[-2rem] w-1 bg-border/40 z-0 group-hover:bg-primary/20 transition-all duration-500 rounded-full" />
                        )}

                        <Card className={cn(
                            "relative z-10 border-border/40 overflow-hidden transition-all duration-500 rounded-[2rem]",
                            sprint.status === 'in-progress' ? 'bg-card shadow-2xl shadow-primary/10 ring-2 ring-primary/40' :
                                sprint.status === 'locked' ? 'bg-muted/5 opacity-60 grayscale' : 'bg-muted/10 opacity-90'
                        )}>
                            <CardContent className="p-0">
                                <Link
                                    href={sprint.status === 'locked' ? "#" : `/labs/program/${sprint.id}`}
                                    className={cn(
                                        "flex flex-col md:flex-row md:items-center gap-8 p-10",
                                        sprint.status === 'locked' ? 'cursor-not-allowed' : 'hover:bg-primary/5 transition-all'
                                    )}
                                >
                                    <div className={cn(
                                        "size-16 rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-lg transform transition-transform group-hover:rotate-12",
                                        sprint.status === 'completed' ? 'bg-primary text-primary-foreground shadow-primary/20' :
                                            sprint.status === 'in-progress' ? 'bg-primary/20 text-primary border-2 border-primary/20' :
                                                'bg-muted text-muted-foreground'
                                    )}>
                                        {sprint.status === 'completed' ? (
                                            <CheckCircle2 className="size-8" />
                                        ) : sprint.status === 'in-progress' ? (
                                            <Rocket className="size-8 animate-bounce" />
                                        ) : (
                                            <Lock className="size-8" />
                                        )}
                                    </div>

                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center gap-4">
                                            <h3 className="text-3xl font-black tracking-tight tracking-tighter uppercase italic">Sprint {sprint.id}</h3>
                                            {sprint.status === 'in-progress' && (
                                                <Badge className="bg-primary animate-pulse font-black px-4">CURRENT MISSION</Badge>
                                            )}
                                        </div>
                                        <h4 className="text-xl font-bold">{sprint.title}</h4>
                                        <p className="text-base text-muted-foreground max-w-2xl font-medium leading-relaxed">
                                            {sprint.goal}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-10 shrink-0 md:pl-10 md:border-l border-border/40">
                                        <div className="text-center">
                                            <p className="text-3xl font-black italic">{sprint.lessons}</p>
                                            <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest mt-1">Lessons</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-3xl font-black italic">{sprint.projects}</p>
                                            <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest mt-1">Projects</p>
                                        </div>
                                        {sprint.status !== 'locked' && (
                                            <div className="size-12 rounded-full border border-border/40 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all shadow-md">
                                                <ChevronRight className="size-6 text-muted-foreground group-hover:text-primary-foreground transition-all" />
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
