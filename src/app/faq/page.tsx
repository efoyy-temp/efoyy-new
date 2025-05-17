"use client";

import { useState } from "react";
import {
  Search,
  Users,
  Car,
  CreditCard,
  Shield,
  HelpCircle,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const t = useTranslations("faq");

  // FAQ data organized by categories, now from translations
  const categories = [
    { key: "general", icon: HelpCircle, label: t("tabs.general") },
    { key: "riders", icon: Users, label: t("tabs.riders") },
    { key: "drivers", icon: Car, label: t("tabs.drivers") },
    { key: "payments", icon: CreditCard, label: t("tabs.payments") },
    { key: "safety", icon: Shield, label: t("tabs.safety") },
  ];

  // Get questions from translations
  const getQuestions = (
    category: string,
  ): { question: string; answer: string }[] => {
    const count = Number(t(`${category}.count`));
    return Array.from({ length: count }).map((_, i: number) => ({
      question: t(`${category}.${i}.question`),
      answer: t(`${category}.${i}.answer`),
    }));
  };

  // Filter questions based on search query
  const filterQuestions = (
    questions: { question: string; answer: string }[],
  ): { question: string; answer: string }[] => {
    if (!searchQuery) return questions;
    return questions.filter(
      (item: { question: string; answer: string }) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  // Count total questions for each category after filtering
  const counts = Object.fromEntries(
    categories.map((cat) => [
      cat.key,
      filterQuestions(getQuestions(cat.key)).length,
    ]),
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 container px-4 md:px-6 py-8 md:py-12 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
              {t("title")}
            </h1>
            <p className="text-muted-foreground">{t("description")}</p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-10"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-7 px-2"
                onClick={() => setSearchQuery("")}
              >
                {t("clear")}
              </Button>
            )}
          </div>

          {/* FAQ Categories */}
          <Tabs defaultValue="general">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 h-auto">
              {categories.map((cat) => (
                <TabsTrigger
                  value={cat.key}
                  className="flex items-center gap-2"
                  key={cat.key}
                >
                  <cat.icon className="h-4 w-4" />
                  <span>
                    {cat.label} ({counts[cat.key]})
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent value={cat.key} key={cat.key}>
                <h2 className="text-2xl font-bold mb-4">
                  {t(`${cat.key}Title`)}
                </h2>
                {filterQuestions(getQuestions(cat.key)).length > 0 ? (
                  <Accordion type="single" collapsible className="w-full">
                    {filterQuestions(getQuestions(cat.key)).map(
                      (
                        item: { question: string; answer: string },
                        index: number,
                      ) => (
                        <AccordionItem
                          key={index}
                          value={`${cat.key}-item-${index}`}
                        >
                          <AccordionTrigger>{item.question}</AccordionTrigger>
                          <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                      ),
                    )}
                  </Accordion>
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    {t("noMatch")}
                  </p>
                )}
              </TabsContent>
            ))}
          </Tabs>

          {/* Contact Support Section */}
          <div className="mt-16 border-t pt-8">
            <div className="text-center flex flex-col gap-4 items-center">
              <h2 className="text-2xl font-bold mb-2">
                {t("stillHaveQuestions")}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t("supportDescription")}
              </p>
              <Button className="flex items-center gap-2 ">
                <Mail className="h-4 w-4" />
                {t("contactSupport")}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
