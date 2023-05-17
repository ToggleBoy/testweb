// import Link from "next/link";
// import Image from "next/image";

// const Navbar = () => {
//     return (
//         <div className="navbar">
//             <div className="navigation-title">
//               <Link href={"/"}>
//                 <Image src="/logo.png" alt="logo" width={100} height={75} priority={true}/></Link>
//             </div>
//             <div className="navigation-link">
//                 <Link href="/"><p>Home</p></Link>
//                 <Link href="/about"><p>About</p></Link>
//                 <Link href="/career"><p>Career</p></Link>
//                 <Link href="/projects"><p>Projects</p></Link>
//                 <Link href="/contact-me"><p>Contact Me</p></Link>
//             </div>
//         </div>
//      );
// }

// export default Navbar;

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
          <p>Home</p>
        </Link>
        <Link href="/about">
          <p>About</p>
        </Link>
        <Link href="/career">
          <p>Career</p>
        </Link>
        <Link href="/projects">
          <p>Projects</p>
        </Link>
        <Link href="/contact-me">
          <p>Contact Me</p>
        </Link>
      </div>
      <input
        className="hamburger-navbar"
        onClick={toggleMobileMenu}
        type="button"
        value="| | |"
      />
      {isMobileMenuOpen && (
        <div className="overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu">
            <button className="close-button" onClick={closeMobileMenu}>
              X
            </button>
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="/about">
              <p>About</p>
            </Link>
            <Link href="/career">
              <p>Career</p>
            </Link>
            <Link href="/projects">
              <p>Projects</p>
            </Link>
            <Link href="/contact-me">
              <p>Contact Me</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
