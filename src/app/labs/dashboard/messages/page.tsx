"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    MessageSquare,
    Plus,
    Search,
    MoreHorizontal,
    Send,
    UserCircle,
    Paperclip,
    Smile,
    ChevronLeft
} from "lucide-react";
import Link from "next/link";

const CONTACTS = [
    { name: "Mr. Solomon", role: "Software Mentor", lastMsg: "Don't forget the flow chart!", time: "10m ago", active: true },
    { name: "Ms. Sarah", role: "UI/UX Mentor", lastMsg: "Hana, check your design feedback.", time: "2h ago", active: false },
    { name: "Support Team", role: "Technical Help", lastMsg: "Your password has been reset.", time: "1d ago", active: false },
];

const MESSAGES = [
    {
        sender: "Mr. Solomon",
        text: "Great job on the banking UI, Hana! The interaction logic looks solid.",
        time: "10:15 AM",
        type: "received"
    },
    {
        sender: "Mr. Solomon",
        text: "Did you manage to draw the user flow diagram we talked about?",
        time: "10:16 AM",
        type: "received"
    },
    {
        sender: "Hana",
        text: "Thank you Mr. Solomon! I'm working on the flow diagram right now. Should I include the error states too?",
        time: "10:45 AM",
        type: "sent"
    },
    {
        sender: "Mr. Solomon",
        text: "Absolutely! Don't forget the flow chart! It's better to show what happens when things go wrong too.",
        time: "11:02 AM",
        type: "received"
    },
];

export default function MessagesPage() {
    return (
        <div className="h-full flex flex-col bg-background text-foreground overflow-hidden">
            <header className="h-24 border-b-2 border-border/20 px-10 flex items-center justify-between shrink-0 bg-background/50 backdrop-blur-xl z-20 shadow-sm">
                <div className="flex items-center gap-6">
                    <h1 className="text-4xl font-black tracking-tighter italic">COMMS<span className="text-primary italic">.HUB</span></h1>
                    <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-60">3 Signals Pending</span>
                    </div>
                </div>
                <Button className="h-14 px-8 rounded-2xl font-black shadow-xl shadow-primary/20 group uppercase tracking-widest text-xs">
                    <Plus className="size-5 mr-3 group-hover:rotate-90 transition-transform" /> New signal
                </Button>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Contacts Sidebar */}
                <div className="w-96 border-r-2 border-border/20 flex flex-col shrink-0 bg-muted/5">
                    <div className="p-8 border-b-2 border-border/20 bg-background/30">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input placeholder="Search Mentors..." className="pl-12 h-14 bg-card/50 border-2 border-border/40 font-black rounded-2xl focus:border-primary/50 transition-all text-sm" />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-2">
                        {CONTACTS.map((contact, i) => (
                            <button
                                key={i}
                                className={`w-full flex items-start gap-5 p-6 rounded-[2rem] transition-all duration-300 text-left relative overflow-hidden group
                    ${contact.active ? 'bg-primary/5 border-2 border-primary/20 shadow-xl' : 'hover:bg-muted/30 border-2 border-transparent'}`}
                            >
                                <div className="relative shrink-0">
                                    <div className="size-16 rounded-[1.2rem] bg-card border-2 border-border/20 flex items-center justify-center font-black text-xl text-primary transform group-hover:-rotate-6 transition-transform">
                                        {contact.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    {contact.active && (
                                        <div className="absolute -right-1 -bottom-1 size-5 bg-green-500 rounded-full border-4 border-background animate-pulse" />
                                    )}
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="font-black text-lg tracking-tight mb-[-2px]">{contact.name}</p>
                                        <p className="text-[9px] text-muted-foreground font-black uppercase tracking-widest">{contact.time}</p>
                                    </div>
                                    <p className="text-[10px] text-primary uppercase font-black tracking-[0.2em] mb-2 mb-[-1px]">{contact.role}</p>
                                    <p className="text-sm text-muted-foreground truncate font-medium opacity-80">{contact.lastMsg}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col min-w-0 bg-card/20 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.03),transparent_70%)] pointer-events-none" />

                    {/* Chat header */}
                    <div className="h-20 border-b-2 border-border/20 px-10 flex items-center justify-between bg-background/50 backdrop-blur-xl z-20">
                        <div className="flex items-center gap-6">
                            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-lg font-black text-primary border-2 border-primary/20 shadow-lg">
                                MS
                            </div>
                            <div>
                                <p className="text-xl font-black leading-none italic">Solomon Joseph</p>
                                <div className="flex items-center gap-2 mt-1.5">
                                    <div className="size-2 rounded-full bg-green-500" />
                                    <p className="text-[9px] text-green-500 font-black uppercase tracking-[0.3em]">Live Audio Feed: OK</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-2 border-border/40 hover:text-primary hover:border-primary/40 transition-all">
                                <Search className="size-5" />
                            </Button>
                            <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-2 border-border/40 hover:text-primary hover:border-primary/40 transition-all">
                                <MoreHorizontal className="size-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-12 space-y-8 relative z-10 scrollbar-hide">
                        <div className="text-center relative py-10">
                            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border/40 -z-10" />
                            <Badge className="bg-background text-muted-foreground font-black uppercase tracking-[0.4em] text-[9px] px-8 py-2 border-2 border-border/20 rounded-full shadow-sm">
                                Today, March 9
                            </Badge>
                        </div>

                        {MESSAGES.map((msg, i) => (
                            <div key={i} className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
                                <div className={`max-w-[65%] space-y-2 ${msg.type === 'sent' ? 'items-end' : 'items-start'}`}>
                                    <div className={`p-8 rounded-[2.5rem] text-lg font-medium leading-relaxed shadow-2xl
                          ${msg.type === 'sent'
                                            ? 'bg-primary text-primary-foreground shadow-primary/20 rounded-tr-none'
                                            : 'bg-card border-2 border-border/40 shadow-xl rounded-tl-none'}`}
                                    >
                                        {msg.text}
                                    </div>
                                    <div className={`flex items-center gap-3 px-4 ${msg.type === 'sent' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <p className="text-[10px] font-black text-muted-foreground uppercase opacity-40">{msg.time}</p>
                                        <div className={`h-0.5 w-4 rounded-full ${msg.type === 'sent' ? 'bg-primary/40' : 'bg-muted-foreground/20'}`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-10 bg-background/50 backdrop-blur-3xl border-t-2 border-border/20 z-20">
                        <div className="flex items-center gap-6 p-4 pl-8 rounded-[2.5rem] bg-card/80 border-2 border-border/40 focus-within:border-primary/50 focus-within:ring-8 focus-within:ring-primary/5 transition-all shadow-2xl">
                            <button className="text-muted-foreground hover:text-primary transition-all p-2 rounded-xl hover:bg-primary/10">
                                <Paperclip className="size-6" />
                            </button>
                            <input
                                placeholder="Broadcast message to Solomon..."
                                className="flex-1 bg-transparent border-none focus:outline-none text-lg font-black italic h-14 placeholder:opacity-30"
                            />
                            <div className="flex items-center gap-2">
                                <button className="text-muted-foreground hover:text-primary transition-all p-2 rounded-xl hover:bg-primary/10">
                                    <Smile className="size-6" />
                                </button>
                                <Button className="size-16 rounded-[1.5rem] p-0 shadow-2xl shadow-primary/40 transform hover:scale-110 active:scale-95 transition-all">
                                    <Send className="size-8 transform -rotate-12" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
