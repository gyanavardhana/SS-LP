import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  // Advanced navbar and hero section animations
  useGSAP(() => {
    // Navbar entrance animation
    const navTimeline = gsap.timeline();
    navTimeline
      .from(navbarRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      })
      .from(
        navbarRef.current.children,
        {
          opacity: 0,
          y: -20,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );

    // Hero section animations
    const heroTimeline = gsap.timeline();
    heroTimeline
      .from(taglineRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        ctaRef.current,
        {
          opacity: 0,
          scale: 0.5,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

    // Parallax and scroll-based image animation
    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  // Mobile menu toggle animation
  const toggleMenu = () => {
    gsap.to(menuRef.current, {
      x: isMenuOpen ? "100%" : "0%",
      duration: 0.5,
      ease: "power2.inOut",
    });
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-2xl px-8 py-6 w-11/12 max-w-6xl z-50 flex items-center justify-between"
      >
        <div className="text-primary-dark font-extrabold text-2xl">
        ServLineX
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-secondary-dark hover:text-primary-dark transition-colors duration-300 ease-in-out font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="bg-primary-dark text-white px-6 py-2 rounded-full hover:bg-primary-light transition-all duration-300 transform hover:scale-105">
            Download App
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden hamburger-menu" onClick={toggleMenu}>
          <span className="block w-6 h-0.5 bg-primary-dark mb-1"></span>
          <span className="block w-6 h-0.5 bg-primary-dark mb-1"></span>
          <span className="block w-6 h-0.5 bg-primary-dark"></span>
        </button>
      </nav>

      {/* Mobile Side Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-2xl transform translate-x-full z-40 p-8 md:hidden"
      >
        <ul className="space-y-6 mt-16">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block text-2xl text-secondary-dark hover:text-primary-dark transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="mt-8 w-full bg-primary-dark text-white px-6 py-3 rounded-full"
          onClick={toggleMenu}
        >
          Download App
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-light to-primary-dark">
        <div className="text-center text-white z-10 px-4">
          <h1
            ref={taglineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto"
          >
            Service You Can Trust, Support You Can Count On
          </h1>
          <button
            ref={ctaRef}
            className="bg-secondary-dark text-white px-8 py-3 rounded-full text-lg hover:bg-secondary-light transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>

        {/* Background Image with Parallax Effect */}
        <div
          ref={imageRef}
          className="absolute inset-0 -m-24  bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
          }}
        ></div>
      </section>
    </header>
  );
};

export default Header;
