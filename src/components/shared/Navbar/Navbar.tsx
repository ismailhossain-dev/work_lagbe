"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Globe } from "lucide-react";
import Logo from "../Logo/Logo";

const navLinks = [
  { label: "Explore", href: "/explore" },
  { label: "Categories", href: "/categories" },
  { label: "Become a Seller", href: "/become-a-seller" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll logic for clean glassmorphism shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 12) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling on mobile drawer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full h-[72px] transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)]" 
          : "bg-white border-b border-gray-100/50"
      }`}
    >
    {/* ordiso space */}
      <div className="mx-auto max-w-[1280px] h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left Section: Logo */}
        <Logo/>

        {/* Center Section: Premium Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 h-full" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[14px] font-semibold tracking-wide transition-colors duration-250 py-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md ${
                  isActive ? "text-[#10B981]" : "text-gray-600 hover:text-[#10B981]"
                }`}
              >
                {link.label}
                {/* Micro-Interaction Underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2.5px] bg-[#10B981] rounded-full transition-all duration-300 ease-out ${
                    isActive ? "w-full opacity-100" : "w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Premium Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <button
            type="button"
            className="text-gray-500 hover:text-[#10B981] p-2.5 transition-all duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-full"
            aria-label="Search"
          >
            <Search className="w-[18px] h-[18px]" />
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-[#10B981] transition-all duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg px-3 py-2"
            aria-label="Switch Language"
          >
            <Globe className="w-4 h-4 text-gray-400" />
            <span>EN</span>
          </button>

          <Link
            href="/sign-in"
            className="text-sm font-bold text-gray-700 hover:text-[#10B981] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md px-2 py-1"
          >
            Sign In
          </Link>

          <Link
            href="/join"
            className="inline-flex items-center justify-center h-11 px-6 text-sm font-bold text-white bg-[#111827] rounded-xl shadow-sm transition-all duration-250 hover:bg-[#10B981] hover:shadow-[0_4px_20px_rgba(16,185,129,0.3)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Join
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="p-2 -mr-2 text-gray-700 hover:text-black hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Open main menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* --- Mobile Drawer Menu --- */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark Premium Blur Overlay */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />

        {/* Sliding Side Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-[340px] h-full bg-white p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-gray-100">
              <span className="text-xl font-extrabold tracking-tight text-[#111827]">
                Work<span className="text-[#10B981]">Lagbe</span>
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-500 hover:text-black hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-5 mt-8" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold transition-all duration-200 px-3 py-2.5 rounded-xl ${
                      isActive 
                        ? "text-[#10B981] bg-emerald-50/50" 
                        : "text-gray-800 hover:text-[#10B981] hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Actions Footer */}
          <div className="flex flex-col gap-3.5 mt-auto border-t border-gray-100 pt-6">
            <div className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-xl mb-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Language</span>
              <button
                type="button"
                className="flex items-center gap-1.5 text-sm font-bold text-[#111827]"
              >
                <Globe className="w-4 h-4 text-gray-400" />
                <span>English (EN)</span>
              </button>
            </div>

            <Link
              href="/sign-in"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center h-12 w-full text-sm font-bold text-gray-800 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              Sign In
            </Link>

            <Link
              href="/join"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center h-12 w-full text-sm font-bold text-white bg-[#111827] rounded-xl hover:bg-[#10B981] shadow-md hover:shadow-[0_4px_20px_rgba(16,185,129,0.25)] transition-all duration-250"
            >
              Join
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}