"use client";

import { SignupForm } from "../components/SignupForm";
import Link from "next/link";
import { Layout } from "../components/Layout";

export default function SignupPage() {
  return (
    <Layout>
      <div className="w-full max-w-2xl mx-auto">
        <SignupForm />
        <div className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/sales/login" className="underline font-medium">
            Log in
          </Link>
        </div>
      </div>
    </Layout>
  );
}
