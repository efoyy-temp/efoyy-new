"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Github,
    ExternalLink,
    Terminal,
    Code2,
    Plus,
    Layout,
    Rocket,
    PlusSquare,
    Lock
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
    {
        title: "Banking Flow Diagram",
        description: "Visual logic for user interaction in a financial application.",
        category: "System Design",
        thumbnail: "https://images.unsplash.com/photo-1543286386-713bcd53b971?q=80&w=800&auto=format&fit=crop",
        github: "https://github.com/hana/banking-flow",
        demo: "https://hana.lab/banking-flow"
    },
    {
        title: "Banking Login Page",
        description: "Responsive login interface with form validation and CSS styling.",
        category: "Frontend Dev",
        thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        github: "https://github.com/hana/banking-login",
        demo: "https://hana.lab/banking-login"
    },
    {
        title: "Banking Backend Logic",
        description: "JavaScript deposit and logic for the banking system.",
        category: "Algorithm",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        github: "https://github.com/hana/banking-backend",
        demo: "https://hana.lab/banking-backend"
    },
];

export default function PortfolioPage() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-16 pb-32">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-4">
                        <Badge className="bg-primary/20 text-primary border-primary/20 font-black tracking-[0.3em] uppercase text-[10px] px-4 py-1.5 rounded-full">
                            STUDENT PORTFOLIO
                        </Badge>
                        <div className="h-1.5 w-1.5 rounded-full bg-border" />
                        <span className="text-xs font-black text-muted-foreground uppercase tracking-widest opacity-60">Hana · Grade 6</span>
                    </div>
                    <h1 className="text-8xl font-black tracking-tighter leading-[0.8]">The <span className="text-primary italic">Proof.</span></h1>
                    <p className="text-2xl text-muted-foreground font-medium max-w-3xl leading-relaxed italic border-l-4 border-primary/40 pl-8">
                        "Every line of code you write is a brick in the foundation of your future. Showcase your progress here."
                    </p>
                </div>
                <Button className="font-black px-12 h-20 text-xl gap-4 shadow-2xl shadow-primary/20 rounded-3xl transform hover:scale-105 transition-all group">
                    <PlusSquare className="size-6 group-hover:rotate-90 transition-transform" /> NEW BUILD
                </Button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {PROJECTS.map((project, i) => (
                    <Card key={i} className="group border-border/40 bg-card/50 backdrop-blur-xl overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-700 hover:shadow-[0_0_100px_rgba(var(--primary-rgb),0.1)] rounded-[2.5rem]">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            <Badge className="absolute top-6 left-6 bg-white/10 backdrop-blur-md text-white border-white/20 font-black uppercase text-[9px] tracking-[0.4em] px-4 py-2 rounded-full">
                                {project.category}
                            </Badge>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                                <div className="size-20 rounded-full bg-white flex items-center justify-center text-primary shadow-2xl">
                                    <ExternalLink className="size-10" />
                                </div>
                            </div>
                        </div>

                        <CardHeader className="p-10 space-y-2">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="size-1.5 rounded-full bg-primary" />
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">MARCH 2026</p>
                            </div>
                            <CardTitle className="text-3xl font-black tracking-tighter italic transition-colors group-hover:text-primary leading-none">
                                {project.title}
                            </CardTitle>
                            <p className="text-base text-muted-foreground font-medium leading-relaxed opacity-80 pt-2">
                                {project.description}
                            </p>
                        </CardHeader>

                        <CardContent className="p-10 pt-0 mt-auto flex gap-6">
                            <Link href={project.github} className="flex-1">
                                <Button variant="outline" className="w-full gap-3 border-2 border-border/40 font-black text-xs h-14 rounded-2xl hover:bg-muted group/btn uppercase tracking-widest">
                                    <Github className="size-5 group-hover/btn:scale-110 transition-transform" /> SOURCE
                                </Button>
                            </Link>
                            <Link href={project.demo} className="flex-1">
                                <Button className="w-full gap-3 font-black text-xs h-14 rounded-2xl shadow-xl shadow-primary/20 group/btn uppercase tracking-widest">
                                    <Rocket className="size-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /> REVEAL
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}

                {/* Future State Placeholder */}
                <div className="group border-2 border-dashed border-border/40 rounded-[2.5rem] flex flex-col items-center justify-center p-12 text-center space-y-6 bg-muted/5 min-h-[500px] hover:border-primary/20 transition-all cursor-not-allowed overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="size-24 rounded-[2rem] bg-muted/40 flex items-center justify-center border-2 border-border/40 group-hover:border-primary/20 transition-all transform group-hover:scale-110">
                        <Layout className="size-12 text-muted-foreground/40 group-hover:text-primary/40 transition-all font-light" />
                    </div>
                    <div className="relative z-10">
                        <p className="text-2xl font-black italic tracking-tighter text-muted-foreground/60 group-hover:text-primary/60 transition-all uppercase">LOCKED TERRITORY</p>
                        <p className="text-sm font-black text-muted-foreground/40 uppercase tracking-widest mt-2">{`Finish Sprint 4 to Unlock`}</p>
                    </div>

                    <div className="absolute bottom-10">
                        <Lock className="size-5 text-muted-foreground/20" />
                    </div>
                </div>
            </div>
        </div>
    );
}
