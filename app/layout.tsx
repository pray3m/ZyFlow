import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ProvidersSandwich from "@/components/providers/ProvidersSandwich";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZyFlow - AI-Powered Workflow Automation",
  description:
    "Automate your tasks, scrape the web, and integrate AI into your workflows with ZyFlow. The visual builder for powerful automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/sign-in">
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ProvidersSandwich>{children}</ProvidersSandwich>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
