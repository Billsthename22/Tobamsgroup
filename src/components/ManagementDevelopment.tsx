'use client';

import Image from 'next/image';
import { Zap } from 'lucide-react';

const benefits = [
  'Enhanced Leadership Skills',
  'Improved Employee Engagement',
  'Stronger Organisational Culture',
  'Sustainable Growth',
];

export function ManagementDevelopment() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 py-8 font-['Nunito_Sans'] md:px-8 md:py-10 xl:px-[64px] xl:py-[48px]">

      <div className="flex w-full flex-col items-center justify-between gap-8 rounded-[16px] bg-[#2C0922] p-5 md:gap-12 md:p-8 xl:flex-row xl:gap-[64px] xl:rounded-[24px] xl:p-[48px]">
   
        <div 
          className="relative h-[280px] w-full max-w-[592px] shrink-0 overflow-hidden opacity-100 md:h-[440px] xl:h-[609px] xl:border-x-[20px] xl:border-transparent"
          style={{
            borderRadius: '8px 8px 0px 8px',
          }}
        >
          <Image
            src="/images/md.png"
            alt="Management Development Program Team"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex max-w-[620px] flex-col gap-6 text-white">
          <h2 className="text-3xl leading-[130%] tracking-tight text-white md:text-[36px] xl:text-[40px]">
            Management Development Program
          </h2>

          <p className="text-[16px] font-normal leading-[150%] text-gray-200 opacity-90 md:text-[18px]">
            Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive.
          </p>

          <p className="text-[16px] font-normal leading-[150%] text-gray-200 opacity-90 md:text-[18px]">
            Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
          </p>

    
          <div className="flex flex-col gap-3 pt-2">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="flex h-[40px] items-center gap-3 rounded-[8px] bg-[#8F6182] px-4 py-0 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                <Zap className="h-4 w-4 shrink-0 text-white fill-white" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}