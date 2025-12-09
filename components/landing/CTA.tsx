"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to automate your work?
            </h2>
            <p className="text-emerald-100 text-lg mb-8">
              Join thousands of users who are saving time and boosting
              productivity with ZyFlow.
            </p>
            <Link href="/sign-up">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 px-8 text-lg rounded-full text-emerald-800 hover:bg-emerald-50"
              >
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] rounded-full bg-emerald-400 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
