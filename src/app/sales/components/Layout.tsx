"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    router.push("/sales/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center selection:bg-primary/20 bg-background text-foreground">
      <header className="w-full max-w-6xl px-4 py-4 flex justify-between items-center border-b">
        <Link href="/sales">
          <Logo height={28} />
        </Link>
        <div className="flex items-center ">
          {isLoading ? (
            <div className="h-8 w-24 bg-muted animate-pulse rounded-md" />
          ) : user ? (
            <>
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-sm font-medium">
                  {user.firstName} {user.lastName}
                </span>
              </div>
              <Link
                className="text-xs p-2 rounded-lg font-medium hover:bg-muted "
                href={pathname === "/sales" ? "/sales/manage-sales" : "/sales"}
              >
                {pathname === "/sales" ? "Sales" : "Drivers"}
              </Link>
              <Button variant="ghost" size={"sm"} onClick={handleLogout}>
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
      <main className="w-full max-w-lg p-6 flex-1 flex flex-col ">
        {children}
      </main>
      <footer className="w-full py-8 text-center text-muted-foreground text-xs border-t">
        &copy; {new Date().getFullYear()} Efoyy Sales Platform. Internal Use
        Only.
      </footer>
    </div>
  );
};
