"use client";

import { Badge } from "@/components/ui/badge";
import FounderSection from "./founder-section";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MarketingFounderPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb / Back Navigation */}
            <div className="max-w-7xl mx-auto px-8 pt-12">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-black uppercase tracking-[0.2em] text-[10px] group"
                >
                    <ArrowLeft className="size-3 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>
            </div>

            <div className="pb-32">
                <FounderSection />
            </div>

            {/* CTA Section for Founder Page */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-8 text-center space-y-10">
                    <h3 className="text-4xl font-black tracking-tighter uppercase italic">
                        Join the mission to build <br />
                        <span className="text-primary NOT-italic opacity-80 decoration-4 decoration-primary/20 underline-offset-4 underline">Ethiopia's Digital Future.</span>
                    </h3>
                    <div className="flex justify-center pt-4">
                        <Button asChild size="lg" className="h-16 px-12 text-lg font-black rounded-full bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 group uppercase tracking-tighter">
                            <Link href="/labs">
                                Enroll Your Child <ArrowRight className="size-6 ml-2 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
