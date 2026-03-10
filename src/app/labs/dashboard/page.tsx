"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    CheckCircle2,
    Circle,
    Lock,
    ArrowRight,
    Calendar,
    MessageCircle,
    Trophy,
    UserCircle
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SPRINTS = [
    { id: 1, title: "Sprint 1: Websites and Structure", status: "completed" },
    { id: 2, title: "Sprint 2: Design Principles", status: "completed" },
    { id: 3, title: "Sprint 3: Interaction Basics", status: "in-progress" },
    { id: 4, title: "Sprint 4: Data & Forms", status: "locked" },
    { id: 5, title: "Sprint 5: Backend Logic", status: "locked" },
    { id: 6, title: "Sprint 6: Final Capstone", status: "locked" },
];

const UPCOMING_TASKS = [
    { title: "Deposit Form UI", type: "Assignment", deadline: "Tomorrow", priority: "High" },
    { title: "Event Listener Quiz", type: "Lesson", deadline: "Fri, Mar 12", priority: "Medium" },
];

export default function StudentDashboard() {
    return (
        <div className="p-8 space-y-8 max-w-7xl mx-auto">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black tracking-tight">Welcome back, Hana! 👋</h1>
                    <p className="text-muted-foreground mt-1 flex items-center gap-2">
                        Grade 6 • Software Engineering Program • <span className="text-primary font-bold">Sprint 3 In Progress</span>
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="gap-2 border-border/40">
                        <Calendar className="size-4" /> Schedule
                    </Button>
                    <Button className="gap-2 shadow-lg shadow-primary/20">
                        Resume Learning <ArrowRight className="size-4" />
                    </Button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Column */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Program Progress Card */}
                    <Card className="border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden shadow-xl">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-xl font-bold">Program Progress</CardTitle>
                                <Badge variant="secondary" className="bg-primary/10 text-primary font-bold">45% Complete</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Progress value={45} className="h-3 mb-8" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {SPRINTS.map((sprint) => (
                                    <div
                                        key={sprint.id}
                                        className={cn(
                                            "flex items-center gap-4 p-4 rounded-xl border transition-all duration-300",
                                            sprint.status === "completed" ? "bg-primary/5 border-primary/20" :
                                                sprint.status === "in-progress" ? "bg-card border-primary/40 shadow-lg ring-1 ring-primary/20 scale-[1.02]" :
                                                    "bg-muted/10 border-border/40 opacity-60"
                                        )}
                                    >
                                        <div className={cn(
                                            "size-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm",
                                            sprint.status === "completed" ? "bg-primary text-primary-foreground" :
                                                sprint.status === "in-progress" ? "bg-primary/20 text-primary animate-pulse" :
                                                    "bg-muted text-muted-foreground"
                                        )}>
                                            {sprint.status === "completed" ? (
                                                <CheckCircle2 className="size-5" />
                                            ) : sprint.status === "in-progress" ? (
                                                <Circle className="size-5" />
                                            ) : (
                                                <Lock className="size-5" />
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">Sprint {sprint.id}</p>
                                            <p className="text-sm font-bold truncate">{sprint.title}</p>
                                        </div>
                                        {sprint.status === "in-progress" && (
                                            <Badge className="bg-primary px-2 py-0 h-5 text-[10px]">Active</Badge>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Current Focus Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="border-border/40 bg-card/50 backdrop-blur-sm shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg font-bold">Next Assignment</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-5 rounded-2xl bg-muted/20 border border-border/40 group hover:border-primary/40 transition-all">
                                    <h4 className="font-black text-primary mb-1 text-lg group-hover:italic transition-all">Banking Deposit Form</h4>
                                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">Create a functional form with JS event handling.</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <Badge variant="outline" className="text-[10px] font-black border-destructive/40 text-destructive bg-destructive/5 px-2">DUE MAR 10</Badge>
                                        <Link href="/labs/assignments">
                                            <Button size="sm" className="gap-2 font-black shadow-md shadow-primary/20">Start <ArrowRight className="size-3" /></Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-border/40 bg-card/50 backdrop-blur-sm shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg font-bold">Latest Feedback</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/20">
                                    <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                        <Trophy className="size-6 text-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-black">Website Structure</span>
                                            <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-[10px] font-black h-5 px-2">9/10</Badge>
                                        </div>
                                        <p className="text-sm italic text-muted-foreground leading-relaxed">"Excellent use of semantic HTML! Your code is very clean."</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-black">JS</div>
                                            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Mr. Solomon</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Sidebar Column */}
                <div className="space-y-8">
                    {/* Upcoming Card */}
                    <Card className="border-border/40 bg-card/50 backdrop-blur-sm shadow-xl">
                        <CardHeader className="border-b border-border/40 bg-muted/20">
                            <CardTitle className="text-lg font-bold flex items-center gap-2 uppercase tracking-widest text-[12px] text-muted-foreground">
                                Upcoming Focus
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-border/40">
                                {UPCOMING_TASKS.map((task, i) => (
                                    <div key={i} className="p-6 hover:bg-primary/5 transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Badge variant="outline" className="text-[9px] uppercase font-black tracking-widest border-border/40 px-2">{task.type}</Badge>
                                            <span className="text-[10px] font-black text-destructive ml-auto uppercase">{task.deadline}</span>
                                        </div>
                                        <p className="text-base font-black mb-2 group-hover:text-primary transition-colors">{task.title}</p>
                                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-black uppercase tracking-widest">
                                            <span className={cn(
                                                "size-2.5 rounded-full ring-4 ring-background shadow-inner",
                                                task.priority === "High" ? "bg-destructive" : "bg-yellow-500"
                                            )} />
                                            {task.priority} Priority
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 bg-muted/10 border-t border-border/40 text-center">
                                <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all">
                                    Full Program Schedule
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Messages */}
                    <Card className="border-border/40 bg-card/50 backdrop-blur-sm shadow-xl">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-2xl font-black">Messages</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-2xl border border-border/40 bg-muted/20 hover:bg-muted/40 transition-all cursor-pointer">
                                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center font-black text-primary border border-primary/20 text-sm">
                                    MS
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-sm font-black truncate leading-none mb-1">Mr. Solomon</p>
                                    <p className="text-xs text-muted-foreground truncate italic">"Don't forget the flow chart!"</p>
                                    <p className="text-[9px] text-primary mt-1 font-black uppercase tracking-widest">10m ago</p>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full gap-2 border-border/40 h-11 font-black text-sm hover:bg-primary/5 hover:text-primary transition-all">
                                <MessageCircle className="size-4" /> Open Chat Library
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
