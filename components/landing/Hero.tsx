"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6"
          >
            <Zap size={16} className="fill-current" />
            <span>Automate your workflow faster than ever</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-stone-900 via-stone-700 to-stone-900 dark:from-white dark:via-stone-200 dark:to-white bg-clip-text text-transparent"
          >
            Automate Your Future, <br />
            <span className="text-emerald-600">Today.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Experience the next evolution of workflow automation. Seamlessly
            connect your apps, automate complex tasks, and let AI handle the
            rest.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/sign-up">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 px-8 text-lg rounded-full"
              >
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-lg rounded-full"
              >
                See How It Works
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[1000px] h-[1000px] opacity-30 dark:opacity-20 pointer-events-none">
          <div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "4s" }}
          />
        </div>
      </div>

      {/* Macbook Scroll Preview */}
      <div className="overflow-hidden w-full -mt-20 md:-mt-32 pointer-events-none">
        <MacbookScroll
          title={
            <span className="text-3xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-400">
              Automate without limits.
            </span>
          }
          src="/dashboard.png"
          showGradient={true}
        />
      </div>
    </section>
  );
}
