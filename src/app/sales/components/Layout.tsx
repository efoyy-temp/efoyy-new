"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/sales/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center selection:bg-primary/20 bg-background text-foreground">
      <header className="w-full max-w-6xl px-6 py-4 flex justify-between items-center border-b">
        <Link href="/sales">
          <Logo height={28} />
        </Link>
        <div className="flex items-center gap-4">
          {isLoading ? (
            <div className="h-8 w-24 bg-muted animate-pulse rounded-md" />
          ) : user ? (
            <>
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-sm font-medium">
                  {user.firstName} {user.lastName}
                </span>
                <span className="text-xs text-muted-foreground">
                  {user.company}
                </span>
              </div>
              <Button variant="ghost" onClick={handleLogout}>
                Log out
              </Button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/sales/login">Log In</Link>
              </Button>
              <Button asChild>
                <Link href="/sales/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </header>
      <main className="w-full max-w-lg px-6 py-12 flex-1 flex flex-col justify-center">
        {children}
      </main>
      <footer className="w-full py-8 text-center text-muted-foreground text-xs border-t">
        &copy; {new Date().getFullYear()} Efoyy Sales Platform. Internal Use
        Only.
      </footer>
    </div>
  );
};
