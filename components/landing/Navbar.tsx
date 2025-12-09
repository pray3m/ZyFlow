"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ThemeModeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/sign-in">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
