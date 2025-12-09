"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Globe,
  Lock,
  MousePointerClick,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: MousePointerClick,
    title: "Drag & Drop Builder",
    description:
      "Create complex workflows visually. No coding required. Just drag, drop, and connect nodes.",
  },
  {
    icon: Zap,
    title: "Real-time Execution",
    description:
      "Watch your workflows run in real-time. Debug and optimize with instant feedback.",
  },
  {
    icon: BrainCircuit,
    title: "Smart Automation",
    description:
      "Automate repetitive tasks with intelligent logic and conditional branching.",
  },
  {
    icon: Globe,
    title: "Web Scraping",
    description:
      "Extract data from any website automatically. Turn the web into your database.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "Leverage the power of AI to analyze text, generate content, and make decisions.",
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with encrypted credentials and reliable execution guarantees.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-stone-50 dark:bg-stone-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to automate
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful features to help you build, manage, and scale your
            automations effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
