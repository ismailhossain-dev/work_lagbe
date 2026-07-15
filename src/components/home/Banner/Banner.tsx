"use client";

import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi"; // react-icons ব্যবহার করা হয়েছে

function Banner() {
  return (
    // পেরেন্ট ডিভকে w-full করে সব padding এবং margin সরিয়ে দেওয়া হয়েছে
    <div className="w-full py-0"> 
      {/* Banner Container - Fixed Height, rounded-none দেওয়া হয়েছে যাতে দুই পাশে কোনো গ্যাপ না থাকে */}
      <div className="relative  w-full h-[460px] md:h-[550px] overflow-hidden shadow-md bg-black rounded-none ">
        
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 "
        >
          <source src="/videos/banner-video.mp4" type="video/mp4" />
        </video>

        {/* Premium Full Black Centered Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

        {/* Content Overlay - Fully Centered Layout */}
        {/* banner parent where i set max-width */}
      <div className="max-w-7xl">
          <div className="absolute inset-0 flex flex-col items-center  px-4 sm:px-8 max-w-4xl mx-auto z-10 text-white">
          
          {/* Tagline */}
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#10B981] uppercase mb-5 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 mt-6">
            Trust & Quality First
          </span>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6 ">
            Find the Perfect <span className="text-[#10B981]">Freelance</span> Expertise for Your Business
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-300 font-medium mb-8 leading-relaxed">
            WorkLagbe connects you with top global talents. Post jobs, hire vetted professionals, and grow your agency seamlessly.
          </p>

          {/* Quick Search Mockup Input */}
          <div className="relative flex items-center w-full mb-6 group mx-auto">
            <FiSearch className="absolute left-4 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-[#10B981]" />
            <input
              type="text"
              placeholder='Try "Next.js Developer" or "UI/UX Designer"'
              className="w-full h-12 pl-12 pr-28 rounded-xl bg-white text-gray-900 placeholder-gray-400 font-medium text-sm border-none focus:outline-none focus:ring-2 focus:ring-[#10B981] shadow-lg"
            />
            <button
              type="button"
              className="absolute right-1.5 h-9 px-4 text-xs font-bold text-white bg-black hover:bg-[#10B981] rounded-lg transition-colors duration-200"
            >
              Search
            </button>
          </div>

          {/* Popular Links Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            <span className="text-gray-400 font-semibold">Popular:</span>
            <Link 
              href="/categories/web-dev" 
              className="px-3 py-1.5 bg-white/10 hover:bg-[#10B981] hover:text-white rounded-lg backdrop-blur-sm transition-all duration-200 font-medium"
            >
              Web Dev
            </Link>
            <Link 
              href="/categories/ui-ux" 
              className="px-3 py-1.5 bg-white/10 hover:bg-[#10B981] hover:text-white rounded-lg backdrop-blur-sm transition-all duration-200 font-medium"
            >
              UI/UX Design
            </Link>
            <Link 
              href="/categories/ai-services" 
              className="px-3 py-1.5 bg-white/10 hover:bg-[#10B981] hover:text-white rounded-lg backdrop-blur-sm transition-all duration-200 font-medium"
            >
              AI Services
            </Link>
          </div>

        </div>
      </div>
      </div>
    </div>
  );
}

export default Banner;