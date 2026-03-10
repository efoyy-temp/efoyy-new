"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Library,
    Search,
    FileText,
    Download,
    ExternalLink,
    Video,
    BookOpen,
    Filter,
    Terminal,
    PlayCircle
} from "lucide-react";

const RESOURCES = [
    {
        title: "HTML Architecture Guide",
        type: "PDF",
        size: "2.4 MB",
        category: "The Grid",
        description: "The complete manual for every semantic tag needed for elite Grade 6 builds."
    },
    {
        title: "CSS Layout Masterclass",
        type: "Video",
        size: "15:30",
        category: "Design",
        description: "Weaponize Flexbox and the CSS Grid system in this 15-minute high-speed crash course."
    },
    {
        title: "JavaScript Interaction Map",
        type: "Interactive",
        size: "10 mins",
        category: "Logic",
        description: "Events, Listeners, and Triggers: Master how the machine responds to the human."
    },
    {
        title: "Banking System Blueprints",
        type: "PDF",
        size: "1.8 MB",
        category: "Projects",
        description: "Architectural logic and flow diagrams for the Sprint 3 banking mission."
    },
    {
        title: "VS Code Combat Setup",
        type: "Manual",
        size: "N/A",
        category: "Tools",
        description: "How to configure your local terminal and editor for professional software craft."
    },
];

export default function ResourcesPage() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-16 pb-32">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-4">
                        <Badge className="bg-primary/20 text-primary border-primary/20 font-black tracking-[0.3em] uppercase text-[10px] px-6 py-1.5 rounded-full">
                            INTEL LIBRARY
                        </Badge>
                    </div>
                    <h1 className="text-8xl font-black tracking-tighter leading-[0.8]">The <span className="text-primary italic">Deep.</span></h1>
                    <p className="text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed italic border-l-4 border-primary/40 pl-8">
                        "Information is just noise until you build something with it. Access the intel you need to upgrade your craft."
                    </p>
                </div>
                <div className="flex gap-4 shrink-0">
                    <div className="relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input placeholder="Search Intel..." className="pl-16 h-20 w-80 bg-card/50 backdrop-blur-xl border-2 border-border/40 font-black text-xl rounded-3xl focus:border-primary/50 transition-all shadow-xl" />
                    </div>
                    <Button variant="outline" className="h-20 w-20 p-0 border-2 border-border/40 rounded-3xl hover:bg-muted group">
                        <Filter className="size-8 text-muted-foreground group-hover:text-primary transition-all" />
                    </Button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {RESOURCES.map((res, i) => (
                    <Card key={i} className="group border-border/40 bg-card/50 backdrop-blur-xl overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-500 rounded-[2.5rem] hover:shadow-[0_0_100px_rgba(var(--primary-rgb),0.05)]">
                        <CardContent className="p-10 space-y-8 h-full flex flex-col">
                            <div className="flex items-start justify-between">
                                <div className="size-20 rounded-[1.5rem] bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 transition-all duration-500 shadow-xl border border-primary/10">
                                    {res.type === 'PDF' && <FileText className="size-10" />}
                                    {res.type === 'Video' && <PlayCircle className="size-10" />}
                                    {res.type === 'Interactive' && <Terminal className="size-10" />}
                                    {res.type === 'Manual' && <BookOpen className="size-10" />}
                                </div>
                                <Badge variant="outline" className="border-2 border-border/40 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground px-4 py-1.5 rounded-full">
                                    {res.category}
                                </Badge>
                            </div>

                            <div className="space-y-4 flex-1">
                                <h3 className="text-3xl font-black tracking-tighter italic group-hover:text-primary transition-colors leading-none">{res.title}</h3>
                                <p className="text-base text-muted-foreground font-medium leading-relaxed opacity-80">
                                    {res.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-10 border-t-2 border-border/20 mt-auto">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-50">Format</span>
                                    <span className="text-sm font-black uppercase tracking-tighter italic">{res.type} · {res.size}</span>
                                </div>
                                <Button variant="ghost" className="h-14 px-8 gap-3 text-primary font-black hover:bg-primary/10 rounded-2xl group/btn transform hover:-translate-y-1 transition-all">
                                    {res.type === 'Video' ? 'REVEAL' : 'DOWNLOAD'}
                                    {res.type === 'Video' ? <ExternalLink className="size-5 group-hover/btn:translate-x-1" /> : <Download className="size-5 group-hover/btn:translate-y-1" />}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
