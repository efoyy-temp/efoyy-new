"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "./_components/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    UserCircle,
    LayoutDashboard
} from "lucide-react";

export default function LabsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isMarketing = pathname === "/labs" || pathname === "/labs/founder" || pathname === "/labs/contact";

    if (isMarketing) {
        return (
            <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white">
                {/* Simple Labs Navbar */}
                <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                    <Link href="/labs" className="flex items-center gap-2">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white font-black text-lg italic uppercase">E</div>
                        <span className="text-xl font-black tracking-tighter uppercase italic">Efoyy <span className="text-primary NOT-italic">Lab</span></span>
                    </Link>
                    <div className="hidden md:flex items-center gap-10">
                        <Link href="/labs" className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-colors">Home</Link>
                        <Link href="/labs/founder" className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-colors">Founder</Link>
                        <Link href="/labs/contact" className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-colors">Contact</Link>
                        <Link href="/labs/dashboard" className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-colors">Enroll</Link>
                    </div>
                    <Button asChild size="sm" className="rounded-full px-8 font-black uppercase tracking-tighter bg-primary shadow-xl shadow-primary/20">
                        <Link href="/labs/dashboard">Enroll</Link>
                    </Button>
                </nav>
                <main className="pt-16">
                    {children}
                </main>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-background overflow-hidden text-foreground">
            <Sidebar className="w-64 shrink-0" />
            <main className="flex-1 overflow-y-auto bg-muted/5 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.05),transparent_40%)] pointer-events-none" />
                {children}
            </main>
        </div>
    );
}
