"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FounderPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="py-24 px-6 bg-white shrink-0">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">Meet the Founder</h1>
                        <div className="w-20 h-1.5 bg-primary rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                        <div className="md:col-span-1 space-y-4">
                            <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center text-gray-400 font-bold text-xl uppercase italic">
                                [Photo]
                            </div>
                            <div>
                                <h2 className="text-2xl font-black tracking-tight uppercase">Dawit Fsiha</h2>
                                <p className="text-primary font-bold uppercase tracking-tighter text-sm">CEO & Co-Founder, Efoyy</p>
                                <p className="text-gray-500 font-medium text-xs uppercase tracking-widest mt-1">Founder of Efoyy Lab</p>
                            </div>
                        </div>

                        <div className="md:col-span-2 space-y-8 text-gray-600 font-medium leading-relaxed text-lg">
                            <p>
                                Dawit Fsiha studied <strong className="text-gray-900">Electrical Engineering in Ottawa, Canada</strong> and built a long career working in advanced technology and telecommunications engineering.
                            </p>
                            <p>
                                He worked in global engineering environments including companies such as <strong className="text-gray-900">Curtiss-Wright, BlackBerry, Ericsson, and Syntonics</strong>, and also served in senior technical roles including <strong className="text-gray-900">Lead Software Architect in the Government of Canada</strong>.
                            </p>
                            <p>
                                After many years of engineering and technology leadership experience, he founded <strong className="text-gray-900">Efoyy Transport Technology Solutions PLC</strong> and created <strong className="text-gray-900">Efoyy Lab</strong> to help Ethiopian students learn how real technology systems are designed and built.
                            </p>
                            <p className="italic text-gray-900 font-bold border-l-4 border-primary pl-6 py-2">
                                "I believe that students should learn engineering thinking and system design early, not only at university."
                            </p>

                            <div className="pt-8">
                                <Button asChild size="lg" className="h-16 px-10 text-lg font-black rounded-full bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 group uppercase">
                                    <Link href="/labs/dashboard">
                                        Join Efoyy Lab <ArrowRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
