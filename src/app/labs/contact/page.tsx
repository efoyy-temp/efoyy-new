"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="py-24 px-6 bg-white shrink-0">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">Get in Touch</h1>
                        <div className="w-20 h-1.5 bg-primary rounded-full" />
                        <p className="text-gray-500 font-medium text-lg max-w-2xl leading-relaxed">
                            Have questions about Efoyy Lab? We're here to help parents and schools learn more about our program.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <div className="flex gap-6 items-start">
                                    <div className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                        <Mail className="size-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</p>
                                        <p className="text-xl font-bold text-gray-900 uppercase">contact@efoyy.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                        <Phone className="size-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs font-black uppercase tracking-widest text-gray-400">Phone Number</p>
                                        <p className="text-xl font-bold text-gray-900 uppercase">+251 900 000 000</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                <p className="text-gray-600 font-medium leading-relaxed italic">
                                    "Our goal is to create the next generation of Ethiopian engineers. Feel free to reach out with any inquiries about our curriculum, schedule, or enrollment process."
                                </p>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary/40 focus:bg-white outline-none transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary/40 focus:bg-white outline-none transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full p-6 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary/40 focus:bg-white outline-none transition-all font-medium resize-none"
                                />
                            </div>
                            <Button size="lg" className="w-full h-16 text-lg font-black rounded-full bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 group uppercase">
                                Send Message <Send className="size-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
