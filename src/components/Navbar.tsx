'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">

      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:px-8 xl:px-12">
   
        <Link
          href="/"
          aria-label="Tobams Group home"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
        >
          <div className="relative h-[56px] w-[170px] sm:h-[64px] sm:w-[195px] md:h-[72.61px] md:w-[188px]">
            <Image
              src="/images/logo.png"
              alt="TOBAMS GROUP"
              fill
              priority
              sizes="(max-width: 768px) 170px, 188px"
              className="object-contain object-left"
            />
          </div>
        </Link>

    
        <div className="hidden items-center gap-3 md:flex">
   
          <button
            type="button"
            className="inline-flex h-[48px] w-[167px] items-center justify-center gap-3 rounded-[4px] border border-[#3B154C] bg-[#3B154C] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
            <span>Account</span>
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

       
          <Link
            href="#assessment"
            className="inline-flex h-[48px] w-[183px] items-center justify-center gap-[10px] rounded-[4px] bg-[#FF5A5F] px-5 py-[10.5px] text-xs font-semibold text-white transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            Take Assessment
          </Link>
        </div>

   
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 xl:hidden"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>


      <div className="hidden border-t border-gray-100 xl:block">
        <nav className="mx-auto flex h-[69px] w-full max-w-[1440px] items-center justify-center gap-8 px-[64px] text-xs font-medium text-gray-700">
    
          <div className="group relative flex h-full items-center gap-1 cursor-pointer font-semibold text-[#3B154C]">
            <span className="relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-[#3B154C]">About</span>
            <svg className="h-3 w-3 text-[#3B154C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

  
          <div className="group relative flex h-full items-center gap-1 cursor-pointer py-[20px]">
            <span className="relative transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#3B154C] after:transition-transform after:duration-200 group-hover:text-[#3B154C] group-hover:after:scale-x-100">What We Do</span>
            <svg className="h-3 w-3 text-gray-500 transition-colors group-hover:text-[#3B154C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="group relative flex h-full items-center gap-1 cursor-pointer py-[20px]">
            <span className="relative transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#3B154C] after:transition-transform after:duration-200 group-hover:text-[#3B154C] group-hover:after:scale-x-100">Jobs</span>
            <svg className="h-3 w-3 text-gray-500 transition-colors group-hover:text-[#3B154C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="group relative flex h-full items-center py-[20px]">
            <Link href="#projects" className="relative transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#3B154C] after:transition-transform after:duration-200 group-hover:text-[#3B154C] group-hover:after:scale-x-100">Projects</Link>
          </div>

          <div className="group relative flex h-full items-center py-[20px]">
            <Link href="#tg-academy" className="relative transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#3B154C] after:transition-transform after:duration-200 group-hover:text-[#3B154C] group-hover:after:scale-x-100">TG Academy</Link>
          </div>

          <div className="group relative flex h-full items-center py-[20px]">
            <Link href="#partnership" className="relative transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#3B154C] after:transition-transform after:duration-200 group-hover:text-[#3B154C] group-hover:after:scale-x-100">Strategic Partnership</Link>
          </div>

          <div className="group relative flex h-full items-center py-[20px]">
            <Link href="#pricing" className="relative transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#3B154C] after:transition-transform after:duration-200 group-hover:text-[#3B154C] group-hover:after:scale-x-100">Pricing</Link>
          </div>

          <div className="group relative flex h-full items-center py-[20px]">
            <Link href="#consultation" className="relative transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#3B154C] after:transition-transform after:duration-200 group-hover:text-[#3B154C] group-hover:after:scale-x-100">Book a Consultation</Link>
          </div>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-6 md:px-8 xl:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-gray-700">
            <span className="font-semibold text-[#3B154C]">About</span>
            <span className="font-semibold text-gray-900">What We Do</span>
            <span className="font-semibold text-gray-900">Jobs</span>
            <Link href="#projects">Projects</Link>
            <Link href="#tg-academy">TG Academy</Link>
            <Link href="#partnership">Strategic Partnership</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#consultation">Book a Consultation</Link>

            <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-gray-100">
              <button 
                type="button" 
                className="inline-flex h-[48px] w-full items-center justify-center gap-3 rounded-[4px] border border-[#3B154C] bg-[#3B154C] px-4 py-2 text-sm font-medium text-white"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Account</span>
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Link 
                href="#assessment" 
                className="inline-flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[4px] bg-[#FF5A5F] px-5 py-[10.5px] text-xs font-semibold text-white"
              >
                Take Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
