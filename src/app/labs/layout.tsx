"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Command, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const navLinks = [
    { name: "About Us", href: "/labs/about" },
    { name: "Our Team", href: "/labs/team" },
    { name: "Courses", href: "/labs/courses" },
    { name: "FAQ", href: "/labs/faq" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 font-sans">
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-4" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/labs" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center rounded-sm">
              <Command className="w-4 h-4" />
            </div>
            <span className="text-lg font-medium tracking-tight">Efoyy Labs</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="px-6 h-10 text-sm font-medium tracking-wide ml-2">
              <Link href="/labs/enroll">Apply Now</Link>
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b border-border/50 p-6 flex flex-col gap-6 shadow-2xl md:hidden">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-lg font-medium">
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full h-12 text-base">
              <Link href="/labs/enroll">Apply Now</Link>
            </Button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border/50 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-foreground text-background flex items-center justify-center rounded-sm">
                <Command className="w-3 h-3" />
              </div>
              <span className="text-base font-medium tracking-tight">Efoyy Labs</span>
            </div>
            <div className="flex flex-wrap gap-8 text-sm font-medium text-muted-foreground">
              <Link href="/labs/courses" className="hover:text-foreground transition-colors">Curriculum</Link>
              <Link href="/labs/team" className="hover:text-foreground transition-colors">Faculty</Link>
              <Link href="/labs/faq" className="hover:text-foreground transition-colors">Tuition & FAQ</Link>
              <Link href="/labs/about" className="hover:text-foreground transition-colors">About Us</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-muted-foreground font-light">
            <p>© 2026 Efoyy Labs. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
