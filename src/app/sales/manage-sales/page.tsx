"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { Layout } from "../components/Layout";
import { SalespersonList } from "../components/SalespersonList";
import { Loader2 } from "lucide-react";

export default function ManageSalesPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!user || !user.isEmployee)) {
      router.replace("/sales");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user || !user.isEmployee) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <Layout>
      <SalespersonList />
    </Layout>
  );
}
