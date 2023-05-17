"use client";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

// this directive should be at top of the file, before any imports.

// This is a Client Component
export default function OtherLayout({ children }: any) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
