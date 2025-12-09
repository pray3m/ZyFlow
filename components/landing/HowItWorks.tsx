"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create a Workflow",
    description:
      "Start from scratch or choose from our library of pre-built templates.",
  },
  {
    number: "02",
    title: "Add Actions",
    description:
      "Drag and drop actions like 'Scrape Webpage', 'Send Email', or 'AI Analyze'.",
  },
  {
    number: "03",
    title: "Connect & Configure",
    description:
      "Link your actions together and configure the data flow between them.",
  },
  {
    number: "04",
    title: "Run & Monitor",
    description: "Execute your workflow and monitor its progress in real-time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How ZyFlow Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Get started in minutes. No complex setup required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-200 dark:via-emerald-800 to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-background rounded-xl p-6 border shadow-sm h-full flex flex-col items-center text-center z-10">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-emerald-500/20">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
