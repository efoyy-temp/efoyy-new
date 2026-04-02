"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function LabsFAQ() {
  const faqs = [
    {
      q: "What are the prerequisites for admission?",
      a: "No prior coding experience is required. We evaluate applicants based on logical reasoning, problem-solving aptitude, and enthusiasm during the interview process. We are looking for potential, not necessarily prior knowledge."
    },
    {
      q: "Who are the instructors?",
      a: "Our faculty consists of active software engineers and computer science graduates from top-tier universities. We maintain a strict 4:1 student-to-instructor ratio to ensure highly personalized mentorship."
    },
    {
      q: "What hardware is required?",
      a: "Students must have access to a modern laptop (macOS, Windows, or Linux) capable of running VS Code and Node.js. We do not support iPads or tablets for this program, as they do not provide a realistic development environment."
    },
    {
      q: "Is this program remote or in-person?",
      a: "Efoyy Labs operates globally via our proprietary remote-learning infrastructure, designed specifically for high-bandwidth, collaborative engineering work. We also have select physical studios in major tech hubs."
    },
    {
      q: "What is the time commitment?",
      a: "During the summer intensive, students should expect to commit 15 hours per week (3 hours per day, Monday through Friday). During the academic year, the commitment is 4 hours per week."
    },
    {
      q: "Do you offer financial aid?",
      a: "Yes. We are committed to making elite engineering education accessible. We offer need-based scholarships for up to 30% of our incoming cohort. Please indicate your interest in financial aid on the application form."
    },
    {
      q: "What happens after the 12-week program?",
      a: "Graduates of the core program are invited to join the Efoyy Labs Alumni Network, which provides ongoing access to advanced masterclasses, hackathons, and a community of peer engineers."
    }
  ];

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Tuition & FAQ</h1>
          <p className="text-lg text-muted-foreground font-light">
            Details regarding admissions, logistics, and our educational approach.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <Accordion type="single" collapsible className="w-full border-t border-border/50">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 font-light text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
