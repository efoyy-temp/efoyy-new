"use client";

import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";

const missionPoints = [
    "Think like engineers",
    "Solve complex problems",
    "Build real technology systems"
];

export default function FounderSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Portrait Area */}
                    <div className="relative w-full max-w-md lg:max-w-xl shrink-0">
                        <div className="absolute inset-0 bg-primary/10 rounded-[3rem] transform rotate-3 -z-10" />
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white group">
                            <Image
                                src="/founder-dawit.png"
                                alt="Dawit Fsiha, CEO & Co-Founder"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                                <p className="text-white text-xl font-bold italic tracking-tighter">Dawit Fsiha</p>
                                <p className="text-white/80 text-sm font-medium uppercase tracking-[0.2em]">CEO & Co-Founder</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Meet the Founder</h2>
                            <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-none italic uppercase">
                                Dawit <span className="text-primary NOT-italic">Fsiha</span>
                            </h3>
                            <p className="text-lg font-black text-muted-foreground uppercase tracking-widest">CEO & Co-Founder, Efoyy</p>
                        </div>

                        {/* Narrative Story */}
                        <div className="space-y-6 text-xl text-muted-foreground font-medium leading-relaxed italic border-l-8 border-primary/20 pl-8">
                            <p>
                                Dawit Fsiha is an engineer with over 20 years of experience working in global technology environments.
                                His journey began in Ottawa, Canada, where he studied Electrical Engineering, laying the foundation for a career
                                that would span some of the most respected organizations in telecommunications and large-scale engineering.
                            </p>
                            <p>
                                Throughout his career, Dawit has been at the forefront of designing and building complex systems, leading
                                elite engineering teams to solve high-stakes challenges. After decades of contributing to the global tech
                                landscape, he decided to bring his wealth of experience back home to Ethiopia, driven by a vision to
                                architect the country’s digital future.
                            </p>
                        </div>

                        {/* Vision Statement */}
                        <div className="relative p-10 bg-primary/5 rounded-[2.5rem] border-2 border-dashed border-primary/20 group hover:border-primary/40 transition-all">
                            <Quote className="absolute top-6 right-8 size-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                            <p className="text-3xl font-black tracking-tight italic leading-snug mb-6">
                                “Technology alone does not transform a nation. <span className="text-primary NOT-italic opacity-80 decoration-4 decoration-primary/20 underline-offset-4 underline">People do.</span>”
                            </p>
                            <p className="text-lg text-muted-foreground font-medium italic leading-relaxed">
                                Efoyy Lab was created to help young students understand how technology works and to develop
                                the next generation of Ethiopian innovators and engineers.
                            </p>
                        </div>

                        {/* Mission Points */}
                        <div className="space-y-6">
                            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary/60">Our Core Mission</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {missionPoints.map((point, i) => (
                                    <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-muted/30 border border-border/40 hover:bg-white hover:shadow-xl transition-all group">
                                        <CheckCircle2 className="size-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm font-black uppercase tracking-tight">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Final Message */}
                        <p className="text-base text-muted-foreground font-semibold leading-relaxed pt-8 border-t border-border/40">
                            Efoyy Lab is not just a coding program, but a place where young minds develop the skills and mindset to shape the future of technology in Ethiopia. We are building more than software; we are building creators.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
