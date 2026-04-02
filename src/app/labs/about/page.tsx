"use client";

import { motion } from "framer-motion";

export default function LabsAbout() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">About Efoyy Labs</h1>
          <div className="w-20 h-1 bg-primary mb-12"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="max-w-none font-light leading-relaxed text-muted-foreground"
        >
          <p className="text-2xl text-foreground font-medium mb-8">
            We believe that the next generation of software engineers shouldn't have to wait until college to write production-grade code.
          </p>

          <p className="mb-6">
            Efoyy Labs was founded in 2024 by a coalition of former big-tech engineers and educators who noticed a glaring gap in computer science education for young students. While the market was flooded with block-based coding games and simplified drag-and-drop interfaces, there was no pathway for ambitious 5th to 9th graders to learn the actual tools used by professionals.
          </p>

          <p className="mb-6">
            We established Efoyy Labs to be that pathway.
          </p>

          <h2 className="text-2xl text-foreground font-medium mt-12 mb-6">Our Philosophy</h2>
          <p className="mb-6">
            We operate on a simple premise: high expectations yield high results. We do not talk down to our students. We do not shield them from the complexities of real-world software development. Instead, we provide them with the mentorship, the environment, and the rigorous curriculum necessary to master those complexities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
            <div className="bg-muted/30 p-8 border border-border/50">
              <h3 className="text-xl text-foreground font-medium mb-4">No Toys. Just Tools.</h3>
              <p className="text-sm">
                Our students use VS Code, Git, GitHub, Vercel, and modern terminal environments. They learn the exact same stack used by startups and enterprise companies alike.
              </p>
            </div>
            <div className="bg-muted/30 p-8 border border-border/50">
              <h3 className="text-xl text-foreground font-medium mb-4">The Cohort Model</h3>
              <p className="text-sm">
                Engineering is inherently collaborative. Our students learn in tight-knit cohorts, participating in code reviews, pair programming, and agile sprints.
              </p>
            </div>
          </div>

          <h2 className="text-2xl text-foreground font-medium mt-12 mb-6">The Environment</h2>
          <p className="mb-6">
            Whether attending our physical studios or participating via our remote infrastructure, students enter a professional environment. It is sleek, focused, and designed to foster deep work and creative problem-solving.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
