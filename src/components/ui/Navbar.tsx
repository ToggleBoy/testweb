"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="naigation-title">
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
      <div className="navigation-link">
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/career">
          Career
        </Link>
        <Link href="/projects">
          Projects
        </Link>
        <Link href="/contact-me">
          Contact Me
        </Link>
      </div>
      <input
        className="hamburger-navbar"
        onClick={toggleMobileMenu}
        type="button"
        value="| || |"
      />
      {isMobileMenuOpen && (
        <div className="overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu">
            <button className="close-button" onClick={closeMobileMenu}>
              X
            </button>
            <Link href="/">
              Home
            </Link>
            <Link href="/about">
              About
            </Link>
            <Link href="/career">
              Career
            </Link>
            <Link href="/projects">
              Projects
            </Link>
            <Link href="/contact-me">
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
