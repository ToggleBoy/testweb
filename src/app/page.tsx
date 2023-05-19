"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HomePage_Icons } from "@/components/homepage components/HomePageComponents";
import { motion } from "framer-motion";

const Home = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      exit={{ x: -200 }}
      transition={{ duration: 0.75 }}
    >
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
          </div>
          <div className="navlink">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/career">Career</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact-me">Contact Me</Link>
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
              <Link href="/contact-me">Contact Me</Link>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Home;
