"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, CreditCard, Activity, Send, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LabsBankingDemo() {
  const transactions = [
    { id: 1, name: "Apple Store", type: "debit", amount: 1299.00, date: "Today, 2:45 PM", status: "Completed" },
    { id: 2, name: "Salary Deposit", type: "credit", amount: 4500.00, date: "Yesterday", status: "Completed" },
    { id: 3, name: "Vercel Inc.", type: "debit", amount: 20.00, date: "Oct 24", status: "Completed" },
    { id: 4, name: "Transfer to Savings", type: "debit", amount: 500.00, date: "Oct 22", status: "Pending" },
  ];

  return (
    <div className="pt-24 pb-24 px-6 md:px-12 bg-muted/10 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        
        {/* Demo Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/50 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Student Capstone Demo
            </div>
            <h1 className="text-2xl font-medium flex items-center gap-2">
              <Building className="w-6 h-6" />
              Nexus Bank
            </h1>
          </div>
          <div className="text-sm text-muted-foreground font-mono">
            Built with React, Tailwind & Node.js
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Balance Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-foreground text-background p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="relative z-10">
              <p className="text-background/60 font-medium mb-2 uppercase tracking-widest text-xs">Total Balance</p>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8">$12,450.00</h2>
              
              <div className="flex gap-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">
                  <Send className="w-4 h-4 mr-2" />
                  Transfer
                </Button>
                <Button variant="outline" className="border-background/20 text-foreground bg-background hover:bg-background/90 h-12 px-6">
                  <Activity className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions / Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-background border border-border/50 p-8 flex flex-col justify-between"
          >
            <div>
              <p className="text-muted-foreground font-medium mb-6 uppercase tracking-widest text-xs">Active Card</p>
              <div className="w-full h-40 bg-gradient-to-br from-muted to-muted/50 border border-border/50 p-5 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                <div className="flex justify-between items-center relative z-10">
                  <CreditCard className="w-6 h-6 text-foreground" />
                  <span className="font-mono text-xs">Virtual</span>
                </div>
                <div className="relative z-10">
                  <p className="font-mono text-sm tracking-widest mb-1">**** **** **** 4281</p>
                  <p className="text-xs text-muted-foreground uppercase">Alex Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Transactions List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-background border border-border/50 p-8"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-medium">Recent Transactions</h3>
              <Button variant="ghost" className="text-sm font-medium">View All</Button>
            </div>

            <div className="space-y-4">
              {transactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors border border-transparent hover:border-border/50">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'credit' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-foreground/5 text-foreground'}`}>
                      {tx.type === 'credit' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="font-medium">{tx.name}</p>
                      <p className="text-xs text-muted-foreground">{tx.date} • {tx.status}</p>
                    </div>
                  </div>
                  <div className={`font-mono font-medium ${tx.type === 'credit' ? 'text-emerald-500' : ''}`}>
                    {tx.type === 'credit' ? '+' : '-'}${tx.amount.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
