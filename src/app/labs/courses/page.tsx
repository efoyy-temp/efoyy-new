"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Terminal, Database, Layout, Server } from "lucide-react";

export default function LabsCourses() {
  const modules = [
    {
      id: "01",
      title: "Foundations & Logic",
      icon: <Terminal className="w-6 h-6" />,
      topics: ["Command Line Interface", "Git & GitHub", "Python Fundamentals", "Data Structures", "Algorithmic Complexity"]
    },
    {
      id: "02",
      title: "Frontend Architecture",
      icon: <Layout className="w-6 h-6" />,
      topics: ["DOM Manipulation", "Modern JavaScript (ES6+)", "React Fundamentals", "State Management", "Tailwind CSS"]
    },
    {
      id: "03",
      title: "Backend Systems",
      icon: <Server className="w-6 h-6" />,
      topics: ["Node.js & Express", "RESTful API Design", "Authentication", "Middleware", "Deployment (Vercel/Render)"]
    },
    {
      id: "04",
      title: "Database Engineering",
      icon: <Database className="w-6 h-6" />,
      topics: ["SQL vs NoSQL", "PostgreSQL", "Prisma ORM", "Data Modeling", "Query Optimization"]
    }
  ];

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">The Syllabus</h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl">
            A rigorous 12-week progression designed to transform ambitious beginners into capable software engineers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-muted/10 border border-border/50 p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-background border border-border/50 flex items-center justify-center text-foreground">
                  {mod.icon}
                </div>
                <span className="text-2xl font-mono font-light text-muted-foreground/50">{mod.id}</span>
              </div>
              <h3 className="text-2xl font-medium mb-6">{mod.title}</h3>
              <ul className="space-y-3">
                {mod.topics.map((topic, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground font-light">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Capstone Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-foreground text-background p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-3xl">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">The Capstone</span>
            <h2 className="text-3xl md:text-5xl font-medium mb-6">Real-World Simulation</h2>
            <p className="text-background/70 font-light leading-relaxed mb-8 text-lg">
              In the final 4 weeks, students architect and build a complex, full-stack application. For example, previous cohorts have built fully functional, secure mock banking systems to understand transaction integrity, state management, and database relations.
            </p>
            
            <Button asChild variant="outline" className="border-background/20 text-foreground bg-background hover:bg-background/90 h-14 px-8 group">
              <Link href="/labs/demo/banking">
                View Student Project: Nexus Bank
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
