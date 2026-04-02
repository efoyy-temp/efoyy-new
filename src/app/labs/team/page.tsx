"use client";

import { motion } from "framer-motion";

export default function LabsTeam() {
  const founder = {
    name: "Dr. Elena Rostova",
    role: "Founder & Director of Curriculum",
    bio: "Dr. Rostova spent a decade as a Staff Engineer at Google before completing her PhD in Computer Science Education at Stanford. She founded Efoyy Labs after observing a critical lack of rigorous, production-focused engineering programs for young, ambitious students. Her curriculum design bridges the gap between academic computer science and modern industry practices.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
  };

  const team = [
    {
      name: "Marcus Chen",
      role: "Lead Instructor, Systems",
      bio: "Open-source contributor and former Senior Backend Developer at Stripe.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Sarah Jenkins",
      role: "Lead Instructor, Frontend",
      bio: "Design systems expert. Previously led frontend architecture at Vercel.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "David Alaba",
      role: "Mentor in Residence",
      bio: "Current CS student at MIT. Founder of two acquired ed-tech startups.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
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
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Faculty & Mentors</h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl">
            Our instructors are not just teachers; they are active practitioners, open-source contributors, and industry veterans dedicated to mentoring the next generation.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 bg-muted/10 border border-border/50 overflow-hidden rounded-xl"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img 
                src={founder.image} 
                alt={founder.name} 
                className="object-cover w-full h-full min-h-[400px] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">The Founder</span>
              <h2 className="text-3xl md:text-5xl font-medium mb-2">{founder.name}</h2>
              <p className="text-xl text-muted-foreground mb-8 font-light">{founder.role}</p>
              <p className="text-muted-foreground leading-relaxed font-light text-lg">
                {founder.bio}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Rest of the Team */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-muted/30 border border-border/50 rounded-xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-xl font-medium mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-mono tracking-wider mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
