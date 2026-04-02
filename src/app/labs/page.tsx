"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Cpu, Layers, TerminalSquare, Globe } from "lucide-react";

export default function LabsHome() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"></div>
        
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-border/60 bg-muted/30 text-xs font-medium uppercase tracking-widest mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Summer 2026 Cohort
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-8"
          >
            Elite engineering <br className="hidden md:block" />
            <span className="text-muted-foreground">for the next generation.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12 font-light"
          >
            A rigorous, professional-grade software development intensive designed exclusively for exceptional students in grades 5–9.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start gap-6"
          >
            <Button asChild size="lg" className="px-8 h-14 text-base w-full sm:w-auto group">
              <Link href="/labs/enroll">
                Request Prospectus
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
            <div className="flex flex-col justify-center h-14">
              <p className="text-sm font-medium">Acceptance Rate: 12%</p>
              <p className="text-sm text-muted-foreground">Strictly limited class sizes.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / Bento Grid */}
      <section className="py-24 md:py-32 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto max-w-6xl px-6 md:px-12">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">The Efoyy Labs Standard</h2>
              <p className="text-lg text-muted-foreground max-w-2xl font-light">
                We reject the premise that young students need simplified toys. We provide production-grade tools, rigorous computer science fundamentals, and an environment that demands excellence.
              </p>
            </div>
            <Button asChild variant="outline" className="h-12 px-6">
              <Link href="/labs/about">Read our Philosophy</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Feature */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-background border border-border/50 p-8 md:p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700"></div>
              <TerminalSquare className="w-10 h-10 mb-8 text-primary" strokeWidth={1.5} />
              <h3 className="text-2xl font-medium mb-4">Production-Grade Stack</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Students write real code. No drag-and-drop blocks. We teach TypeScript, React, Python, and modern deployment pipelines—the exact same technologies powering today's top tech companies.
              </p>
            </motion.div>

            {/* Small Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background border border-border/50 p-8 md:p-10"
            >
              <Cpu className="w-8 h-8 mb-6 text-foreground" strokeWidth={1.5} />
              <h3 className="text-xl font-medium mb-3">Algorithmic Thinking</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Beyond syntax, we focus on data structures, optimization, and solving complex logical problems.
              </p>
            </motion.div>

            {/* Small Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background border border-border/50 p-8 md:p-10"
            >
              <Layers className="w-8 h-8 mb-6 text-foreground" strokeWidth={1.5} />
              <h3 className="text-xl font-medium mb-3">Systems Architecture</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Understanding how the web works, from databases to APIs, creating full-stack developers.
              </p>
            </motion.div>

            {/* Large Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-background border border-border/50 p-8 md:p-12 flex flex-col justify-between"
            >
              <div>
                <Globe className="w-10 h-10 mb-8 text-primary" strokeWidth={1.5} />
                <h3 className="text-2xl font-medium mb-4">Shipped Portfolios</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Every student graduates with a live, deployed portfolio of applications. They don't just learn theory; they build products that exist in the real world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="container mx-auto max-w-4xl px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Secure your position.</h2>
          <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            Applications for the Summer 2026 cohort are currently open. Early application is strongly advised due to limited capacity.
          </p>
          
          <div className="flex justify-center">
            <Button asChild size="lg" className="h-14 px-12 text-base">
              <Link href="/labs/enroll">Begin Application</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6 uppercase tracking-widest">
            Next cohort begins June 15, 2026
          </p>
        </div>
      </section>
    </>
  );
}
