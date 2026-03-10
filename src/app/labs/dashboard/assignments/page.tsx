"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    PlusSquare,
    Github,
    ExternalLink,
    Upload,
    Terminal,
    MessageSquare,
    Trophy,
    ArrowRight
} from "lucide-react";

export default function AssignmentsPage() {
    return (
        <div className="p-8 max-w-5xl mx-auto space-y-16 pb-32">
            <header className="space-y-6">
                <Badge className="bg-primary/20 text-primary border-primary/20 font-black tracking-[0.3em] uppercase text-[10px] px-6 py-1.5 rounded-full">
                    ENGINEERING MISSIONS
                </Badge>
                <h1 className="text-8xl font-black tracking-tighter leading-[0.8]">The <span className="text-primary italic">Grind.</span></h1>
                <p className="text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed italic border-l-4 border-primary/40 pl-8">
                    Upload your builds, link your repositories, and get detailed critique from your mentors.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Form Area */}
                <div className="lg:col-span-2 space-y-10">
                    <Card className="border-border/40 bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden rounded-[3rem]">
                        <CardHeader className="border-b border-border/40 p-10 pb-12 bg-muted/20">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <CardTitle className="text-4xl font-black tracking-tighter italic mb-2">Banking Deposit Form</CardTitle>
                                    <p className="text-sm font-black text-muted-foreground uppercase tracking-widest opacity-60">Sprint 3: Interaction Basics</p>
                                </div>
                                <Badge variant="outline" className="text-destructive border-destructive/40 font-black bg-destructive/5 px-4 py-1 h-8 rounded-full">DUE TOMORROW</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="p-12 space-y-12">
                            {/* GitHub Link */}
                            <div className="space-y-4">
                                <Label htmlFor="github" className="text-[10px] font-black uppercase tracking-[0.4em] text-primary flex items-center gap-3">
                                    <Github className="size-5" /> GitHub Repository Link
                                </Label>
                                <Input id="github" placeholder="https://github.com/hana/banking-deposit" className="h-16 bg-muted/30 border-2 border-border/40 focus:border-primary/50 text-lg rounded-2xl font-bold px-6" />
                            </div>

                            {/* Live Demo */}
                            <div className="space-y-4">
                                <Label htmlFor="demo" className="text-[10px] font-black uppercase tracking-[0.4em] text-primary flex items-center gap-3">
                                    <ExternalLink className="size-5" /> Live Demo Link
                                </Label>
                                <Input id="demo" placeholder="https://hana-banking.vercel.app" className="h-16 bg-muted/30 border-2 border-border/40 focus:border-primary/50 text-lg rounded-2xl font-bold px-6" />
                            </div>

                            {/* File Upload */}
                            <div className="space-y-4">
                                <Label className="text-[10px] font-black uppercase tracking-[0.4em] text-primary flex items-center gap-3">
                                    <Upload className="size-5" /> Presentation Files
                                </Label>
                                <div className="border-4 border-dashed border-border/40 rounded-[2.5rem] p-16 text-center group hover:border-primary/30 transition-all cursor-pointer bg-muted/10 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative z-10">
                                        <div className="size-20 rounded-[1.5rem] bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                                            <PlusSquare className="size-10 text-primary" />
                                        </div>
                                        <p className="text-xl font-black mb-1 italic">Release your files here</p>
                                        <p className="text-xs font-black text-muted-foreground uppercase tracking-widest opacity-60">PDF, PPTX · Max 10MB</p>
                                    </div>
                                </div>
                            </div>

                            {/* Comments */}
                            <div className="space-y-4">
                                <Label htmlFor="comments" className="text-[10px] font-black uppercase tracking-[0.4em] text-primary flex items-center gap-3">
                                    <MessageSquare className="size-5" /> Transmission for Mentor
                                </Label>
                                <textarea
                                    id="comments"
                                    rows={5}
                                    className="w-full rounded-[2rem] border-2 border-border/40 bg-muted/30 p-8 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none placeholder:opacity-50"
                                    placeholder="Explain the logic, the bugs you crushed, or the features you designed..."
                                />
                            </div>

                            <Button className="w-full h-24 text-3xl font-black shadow-2xl shadow-primary/30 rounded-[2rem] group transform hover:scale-[1.02] transition-all">
                                SHIP MISSION <ArrowRight className="size-10 ml-4 group-hover:translate-x-4 transition-transform" />
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Previous Submission Status */}
                    <div className="p-8 rounded-[2.5rem] border-2 border-border/40 bg-muted/20 flex items-center justify-between group hover:border-primary/20 transition-all">
                        <div className="flex items-center gap-6">
                            <div className="size-16 rounded-2xl bg-muted/40 flex items-center justify-center border-2 border-border/40 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all">
                                <Terminal className="size-8 text-muted-foreground opacity-60 group-hover:text-primary group-hover:opacity-100" />
                            </div>
                            <div>
                                <h5 className="text-xl font-black italic">Latest Log: Website Structure</h5>
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-wider mt-1 opacity-60">Submitted 5 days ago · ID: 98721</p>
                            </div>
                        </div>
                        <Badge className="bg-green-500 text-green-500-foreground border-none font-black px-6 py-2 rounded-full uppercase tracking-widest text-[10px]">VERIFIED</Badge>
                    </div>
                </div>

                {/* Teacher Feedback Sidebar */}
                <div className="space-y-12">
                    <Card className="border-border/40 bg-card/50 backdrop-blur-xl overflow-hidden sticky top-8 rounded-[3rem] shadow-2xl">
                        <CardHeader className="bg-primary/5 p-10 pb-12 border-b-2 border-border/40">
                            <CardTitle className="text-xl font-black flex items-center gap-3 italic uppercase tracking-[0.2em]">
                                <Trophy className="size-6 text-primary" /> Mentor Review
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-10 space-y-12">
                            <div className="text-center py-10 rounded-[2rem] bg-background/50 border-2 border-border/20 shadow-inner">
                                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.4em] mb-4">Mastery Score</p>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-9xl font-black text-primary tracking-tighter leading-none italic">8</span>
                                    <span className="text-4xl font-black text-muted-foreground opacity-40 italic">/10</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h5 className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.3em]">Critical Feedback</h5>
                                <div className="p-8 rounded-[2rem] bg-muted/30 border-2 border-border/40 font-black leading-relaxed italic text-muted-foreground text-lg relative group">
                                    <div className="absolute top-0 left-0 p-4 opacity-10">
                                        <MessageSquare className="size-10" />
                                    </div>
                                    "Good architectural structure but field validation is missing in the deposit stage. Crush those edge cases in the next build!"
                                </div>
                                <div className="flex items-center gap-5 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                                    <div className="size-14 rounded-2xl bg-primary/20 flex items-center justify-center text-sm font-black border-2 border-primary/20 text-primary">JS</div>
                                    <div>
                                        <p className="text-sm font-black leading-none uppercase tracking-tighter">Solomon Joseph</p>
                                        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1 opacity-60">Software Engineer Mentor</p>
                                    </div>
                                </div>
                            </div>

                            <Button variant="outline" className="w-full h-16 border-2 border-border/40 font-black rounded-2xl gap-3 hover:bg-primary/5 hover:border-primary/20 hover:text-primary transition-all uppercase tracking-widest">
                                <MessageSquare className="size-5" /> Respond to Solomon
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
