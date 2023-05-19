"use client";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { motion } from "framer-motion";

// this directive should be at top of the file, before any imports.

// This is a Client Component
export default function OtherLayout({ children }: any) {
  return (
    <div>
      <Navbar />
      <motion.div
      initial={{ y: 200}}
      animate={{ y: 0 }}
      exit={{ y: -200}}
      transition={{ duration: 0.75}}      
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  );
}
