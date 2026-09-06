'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Zap } from 'lucide-react';

const features = [
  'Strategic Career Guidance',
  'Leadership Development',
  'CV Development',
  'Sustainability Leadership',
  'Communication Skills',
  'Business Model',
];

export function Transformation() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 py-8 font-['Nunito_Sans'] md:px-8 md:py-10 xl:px-[64px] xl:py-[48px]">
   
      <div className="flex w-full flex-col gap-8 rounded-[16px] bg-[#EF435333] p-5 md:gap-12 md:p-8 xl:gap-[64px] xl:p-[40px]">
        {/* Header Block */}
        <div className="flex w-full max-w-[1232px] flex-col gap-[12px] opacity-100">
          <span className="text-[16px] font-semibold italic text-[#1671D9]">
            Learning With Our CEO:
          </span>
          <h2 className="text-3xl font-semibold leading-[130%] text-[#3B154C] md:text-[36px] xl:text-[40px]">
            Transformation Hub With Jite Newton
          </h2>
          <p className="mt-2 text-[16px] font-normal leading-[150%] text-gray-700 md:text-[18px]">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
          </p>
        </div>

  
        <div className="flex flex-col items-center justify-between gap-8 md:gap-12 xl:flex-row xl:gap-[64px]">

          <div className="relative h-[240px] w-full max-w-[500px] shrink-0 overflow-hidden rounded-[16px] md:h-[300px] xl:h-[340px]">
            <Image
              src="/images/transformation.png"
              alt="Transformation Hub With Jite Newton"
              fill
              className="object-cover"
            />
          </div>

   
          <div className="flex w-full max-w-[640px] flex-col justify-between gap-6 rounded-[8px] bg-[#FFFFFF4D] p-5 opacity-100 backdrop-blur-sm md:p-8 xl:h-[340px] xl:px-[20px] xl:py-[32px]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-[8px] bg-[#FFFFFF4D] px-4 py-3 text-[16px] font-medium text-[#3B154C]"
                >
                  <Zap className="h-4 w-4 shrink-0 text-[#571244] fill-none" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

  
            <div className="pt-1">
          <Link
            href="#transformation"
            className="inline-flex h-[48px] items-center justify-center gap-[10px] rounded-[4px] bg-[#571244] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
          >
            <span>Learn More</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </Link>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}