"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HomePage_Icons, RoleAnimator } from "@/components/homepage components/HomePageComponents";
import { motion, AnimatePresence } from "framer-motion";

const pulldownAnimation = {
  initial: { y: -200, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: {
    y: 200,
    opacity: 0,
    transition: { duration: 0.25 },
  },
  transition: { duration: 0.5, ease: "easeOut" },
};

const Home = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.div {...pulldownAnimation}>
        <div className="home">
          <div className="home-nav">
            <div className="navtitle">
              <Link href={"/"}>
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={75}
                  priority={true}
                />
              </Link>
              <RoleAnimator />
            </div>
            <div className="navlink">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/career">Career</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact-me">Contact</Link>
            </div>
            <input
              className="hamburger"
              onClick={toggleMobileMenu}
              type="button"
              value="|||"
            />
          </div>
          <HomePage_Icons />
          {isMobileMenuOpen && (
            <div className="overlay" onClick={closeMobileMenu}>
              <div className="mobile-menu">
                <button className="close-button" onClick={closeMobileMenu}>
                  X
                </button>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/career">Career</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact-me">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
