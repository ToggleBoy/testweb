"use client";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { motion, AnimatePresence } from "framer-motion";

// this directive should be at top of the file, before any imports.
const pullupAnimation = {
  initial: { y: 200, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: {
    y: 200,
    opacity: 0,
    transition: { duration: 0.25 },
  },
  transition: { duration: 0.5, ease: "easeOut" },
};
// This is a Client Component
export default function OtherLayout({ children }: any) {
  return (
    <div>
      <Navbar />
      <AnimatePresence>
        <motion.div {...pullupAnimation}>{children}</motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
