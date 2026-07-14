"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

// ফুটারে দেখানোর জন্য লোকাল ডেটা অবজেক্ট (কোনো এক্সটার্নাল ইম্পোর্ট লাগবে না)
const footerData = [
  {
    title: "Categories",
    links: [
      { label: "Web Development", href: "/categories/web-dev" },
      { label: "Mobile App Development", href: "/categories/mobile-dev" },
      { label: "UI/UX Design", href: "/categories/ui-ux" },
      { label: "Graphic Design", href: "/categories/graphic-design" },
      { label: "Digital Marketing", href: "/categories/digital-marketing" },
      { label: "Video Editing", href: "/categories/video-editing" },
    ],
    bottomLink: { label: "View All Categories →", href: "/categories" }
  },
  {
    title: "For Clients",
    links: [
      { label: "How WorkLagbe Works", href: "/how-it-works" },
      { label: "Post a Project", href: "/post-project" },
      { label: "Browse Freelancers", href: "/freelancers" },
      { label: "Find Services", href: "/services" },
      { label: "Manage Projects", href: "/projects" },
      { label: "Secure Payments", href: "/payments" },
    ]
  },
  {
    title: "For Freelancers",
    links: [
      { label: "Become a Freelancer", href: "/become-seller" },
      { label: "Create Your Profile", href: "/profile/create" },
      { label: "Create a Gig", href: "/gigs/create" },
      { label: "Find Projects", href: "/jobs" },
      { label: "My Dashboard", href: "/dashboard/seller" },
      { label: "Portfolio", href: "/portfolio" },
    ]
  },
  {
    title: "Business Solutions",
    links: [
      { label: "Enterprise Hiring", href: "/enterprise" },
      { label: "Team Collaboration", href: "/collaboration" },
      { label: "Verified Freelancers", href: "/verified-talents" },
      { label: "API Integration", href: "/api-docs" },
      { label: "Talent Marketplace", href: "/talent-pool" },
      { label: "Business Support", href: "/support/business" },
    ]
  }
];

export default function Footer() {

//daynamic years change
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100/80 text-gray-600 transition-all duration-200">
    <div className="w-full mx-auto">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        
        {/* Top Section: Grid for Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 xl:gap-12 pb-12 border-b border-gray-100">
          
          {footerData.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase">
                {section.title}
              </h3>
              <ul role="list" className="flex flex-col gap-2.5">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="group relative inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#10B981] transition-all duration-200 ease-out hover:translate-x-1 focus-visible:outline-none focus-visible:text-[#10B981]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {section.bottomLink && (
                  <li>
                    <Link
                      href={section.bottomLink.href}
                      className="text-sm font-bold text-[#10B981] hover:underline"
                    >
                      {section.bottomLink.label}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
          
        </div>

        {/* Bottom Section: Logo, Copyright & Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md">
              <span className="text-xl font-extrabold tracking-tight text-[#111827]">
                Work<span className="text-[#10B981]">Lagbe</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 font-medium">
              &copy; {currentYear} WorkLagbe Ltd. All rights reserved.
            </p>
          </div>

          {/* Language Switch & Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            
            {/* Language Switcher Button */}
            <button
              type="button"
              className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-[#10B981] transition-all duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg px-3 py-2 border border-gray-100"
              aria-label="Change Language"
            >
              <HiOutlineGlobeAlt className="w-4 h-4 text-gray-400" />
              <span>English (EN)</span>
            </button>

            {/* Social Icons Group (Using react-icons) */}
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#10B981] transition-colors p-1" aria-label="Facebook">
                <FaFacebookF className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#10B981] transition-colors p-1" aria-label="Twitter">
                <FaTwitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#10B981] transition-colors p-1" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#10B981] transition-colors p-1" aria-label="LinkedIn">
                <FaLinkedinIn className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
      </div>
    </footer>
  );
}