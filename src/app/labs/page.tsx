"use client";

import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function MarketingHomePage() {
    return (
        <div className="flex flex-col w-full">

            {/* SECTION 1 — HERO */}
            <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-white overflow-hidden">
                <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-gray-900 uppercase">
                        Building Ethiopia’s <br />
                        <span className="text-primary">Future Engineers</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                        Efoyy Lab introduces students aged 11–14 to the foundations of software engineering through hands-on learning and real project building.
                    </p>
                    <div className="pt-8">
                        <Button asChild size="lg" className="h-16 px-10 text-lg font-black rounded-full bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 group uppercase">
                            <Link href="/labs/dashboard">
                                Enroll Now <ArrowRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — PROGRAM */}
            <section className="py-24 bg-gray-50 px-6">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">What Students Learn</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Logic and systems thinking",
                            "Web development basics",
                            "Programming fundamentals",
                            "Building real software projects"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <CheckCircle2 className="size-6 text-primary shrink-0" />
                                <span className="text-lg font-bold uppercase tracking-tight text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3 — WHY EFOYY LAB */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">Why Efoyy Lab</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Project-based learning", desc: "Hands-on experience building real applications." },
                            { title: "Engineering mindset", desc: "Learning how to think and solve problems like an engineer." },
                            { title: "Real technology skills", desc: "Mastering tools used by industry professionals." },
                            { title: "Student project portfolio", desc: "Graduating with a collection of working software." }
                        ].map((benefit, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                <h4 className="text-xl font-black tracking-tight mb-3 uppercase leading-tight">{benefit.title}</h4>
                                <p className="text-gray-500 font-medium text-sm leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4 — FINAL CALL TO ACTION */}
            <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center px-6 space-y-12">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
                        Give Your Child a <br />
                        <span className="text-primary">Head Start in Technology</span>
                    </h2>
                    <div className="pt-4">
                        <Button asChild size="lg" className="h-16 px-12 text-lg font-black rounded-full bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30 uppercase">
                            <Link href="/labs/dashboard">Enroll Now</Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
