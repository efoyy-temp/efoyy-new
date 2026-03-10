"use client";

import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    BookOpen,
    PlusSquare,
    FolderOpen,
    Library,
    MessageSquare,
    Settings,
    LogOut,
    ChevronRight,
    UserCircle,
    GraduationCap,
    Users,
    ShieldCheck,
    TrendingUp,
    ChevronDown,
    Zap
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Role = "student" | "parent" | "teacher" | "admin";

const navigation = {
    student: [
        { name: "Home", href: "/labs", icon: LayoutDashboard },
        { name: "My Dashboard", href: "/labs", icon: GraduationCap },
        { name: "Meet Founder", href: "/labs/about", icon: UserCircle },
        { name: "My Program", href: "/labs/program", icon: BookOpen },
        { name: "Assignments", href: "/labs/assignments", icon: PlusSquare },
        { name: "Portfolio", href: "/labs/portfolio", icon: FolderOpen },
        { name: "Resources", href: "/labs/resources", icon: Library },
        { name: "Messages", href: "/labs/messages", icon: MessageSquare },
    ],
    parent: [
        { name: "Home", href: "/labs", icon: LayoutDashboard },
        { name: "Overview", href: "/labs/parent", icon: TrendingUp },
        { name: "Meet Founder", href: "/labs/about", icon: UserCircle },
        { name: "Messages", href: "/labs/messages", icon: MessageSquare },
    ],
    teacher: [
        { name: "Home", href: "/labs", icon: LayoutDashboard },
        { name: "Mentor Cockpit", href: "/labs/teacher", icon: Zap },
        { name: "Meet Founder", href: "/labs/about", icon: UserCircle },
        { name: "Student Nodes", href: "/labs/teacher", icon: Users },
        { name: "Review Queue", href: "/labs/teacher", icon: FolderOpen },
        { name: "Global Comms", href: "/labs/messages", icon: MessageSquare },
    ],
    admin: [
        { name: "Home", href: "/labs", icon: LayoutDashboard },
        { name: "Master Terminal", href: "/labs/admin", icon: ShieldCheck },
        { name: "Meet Founder", href: "/labs/about", icon: UserCircle },
        { name: "User Provisioning", href: "/labs/admin", icon: Users },
        { name: "System Config", href: "/labs/settings", icon: Settings },
    ],
};

const roleInfo = {
    student: { name: "Hana", role: "Grade 6 Student", color: "bg-primary" },
    parent: { name: "Mrs. Work", role: "Hana's Parent", color: "bg-green-500" },
    teacher: { name: "Mr. Solomon", role: "Software Mentor", color: "bg-blue-500" },
    admin: { name: "Root Admin", role: "System Governor", color: "bg-purple-500" },
};

export function Sidebar({ className }: { className?: string }) {
    const pathname = usePathname();
    const [currentRole, setCurrentRole] = useState<Role>("student");
    const [showRoleSwitcher, setShowRoleSwitcher] = useState(false);

    const activeNav = navigation[currentRole];

    return (
        <div className={cn("flex h-full flex-col gap-y-5 border-r border-border/40 bg-card/30 backdrop-blur-3xl px-6 py-8 relative", className)}>
            <div className="flex h-12 items-center px-2 mb-4">
                <Link href="/" className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-primary flex items-center justify-center font-black text-primary-foreground shadow-lg shadow-primary/20 transform -rotate-6">
                        E
                    </div>
                    <span className="text-2xl font-black tracking-tighter italic">LABS<span className="text-primary">.V1</span></span>
                </Link>
            </div>

            {/* Role Switcher (DEMO ONLY) */}
            <div className="px-2 space-y-4">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1">Current Profile</p>
                <div className="relative">
                    <button
                        onClick={() => setShowRoleSwitcher(!showRoleSwitcher)}
                        className="w-full flex items-center gap-4 p-4 rounded-2xl bg-card border-2 border-border/40 hover:border-primary/40 transition-all shadow-xl group"
                    >
                        <div className={cn("size-12 rounded-xl flex items-center justify-center font-black text-lg text-white shadow-lg", roleInfo[currentRole].color)}>
                            {roleInfo[currentRole].name[0]}
                        </div>
                        <div className="flex-1 text-left overflow-hidden">
                            <p className="text-sm font-black italic truncate leading-none mb-1">{roleInfo[currentRole].name}</p>
                            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest truncate">{roleInfo[currentRole].role}</p>
                        </div>
                        <ChevronDown className={cn("size-4 text-muted-foreground transition-transform", showRoleSwitcher && "rotate-180")} />
                    </button>

                    {showRoleSwitcher && (
                        <div className="absolute top-full left-0 right-0 mt-3 bg-card border-2 border-border/40 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                            {(Object.keys(roleInfo) as Role[]).map((role) => (
                                <button
                                    key={role}
                                    onClick={() => {
                                        setCurrentRole(role);
                                        setShowRoleSwitcher(false);
                                    }}
                                    className={cn(
                                        "w-full flex items-center gap-3 p-4 text-left transition-all hover:bg-muted font-black uppercase tracking-widest text-[10px]",
                                        currentRole === role ? "text-primary bg-primary/5" : "text-muted-foreground"
                                    )}
                                >
                                    <div className={cn("size-4 rounded-full", roleInfo[role].color)} />
                                    {role} View
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <nav className="flex flex-1 flex-col pt-4">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-2">
                            {activeNav.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            pathname === item.href
                                                ? "bg-primary/20 text-primary border-r-4 border-primary shadow-lg shadow-primary/5 italic"
                                                : "text-muted-foreground hover:bg-muted/40 hover:text-foreground hover:translate-x-1",
                                            "group flex gap-x-4 rounded-xl p-3.5 text-sm font-black transition-all duration-300 uppercase tracking-tighter"
                                        )}
                                    >
                                        <item.icon
                                            className={cn(
                                                pathname === item.href ? "text-primary scale-110" : "text-muted-foreground group-hover:text-primary",
                                                "size-5 shrink-0 transition-all"
                                            )}
                                        />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="mt-auto space-y-4">
                        <ul role="list" className="-mx-2 space-y-2">
                            <li>
                                <Link
                                    href="/labs/settings"
                                    className={cn(
                                        pathname === "/labs/settings"
                                            ? "bg-primary/20 text-primary border-r-4 border-primary"
                                            : "text-muted-foreground hover:bg-muted/40 font-black",
                                        "group flex gap-x-4 rounded-xl p-3.5 text-sm transition-all duration-300 uppercase tracking-tighter"
                                    )}
                                >
                                    <Settings className="size-5 shrink-0" aria-hidden="true" />
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <button className="group -mx-2 flex w-full gap-x-4 rounded-xl p-3.5 text-sm font-black text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all uppercase tracking-tighter">
                                    <LogOut className="size-5 shrink-0" aria-hidden="true" />
                                    Lock Terminal
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
