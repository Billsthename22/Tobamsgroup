'use client';

import Image from 'next/image';
import { Zap } from 'lucide-react';

export function TrainingServices() {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 bg-white px-4 py-8 font-['Nunito_Sans'] md:gap-16 md:px-8 md:py-10 xl:gap-[120px] xl:p-[64px]">
  
      <div className="flex flex-col items-center justify-between gap-8 md:gap-12 xl:flex-row xl:gap-[64px]">
        {/* Left Content Container */}
        <div className="flex w-full max-w-[646px] flex-col justify-between gap-[21px] xl:h-[345px]">
          <div className="flex flex-col gap-[21px]">
            <h2 className="text-3xl font-semibold leading-[150%] tracking-[0.03em] text-[#000000] md:text-[34px] xl:text-[37px]">
              Corporate Trainings
            </h2>

            <p className="text-[18px] font-normal leading-[150%] tracking-[0%] text-gray-600">
              Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company&apos;s goals and values.
            </p>
          </div>

          <ul className="flex flex-col gap-[10px] text-sm font-semibold text-gray-800">
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
              <span>Leadership Training</span>
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
              <span>Strategic Planning and Implementation</span>
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
              <span>Project Management</span>
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
              <span>Sustainability Training</span>
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
              <span>Customised Training</span>
            </li>
          </ul>
        </div>

    
        <div 
          className="relative h-[260px] w-full max-w-[602px] shrink-0 overflow-hidden md:h-[320px] xl:h-[346px]"
          style={{
            borderRadius: '56px 24px 23px 12px',
          }}
        >
          <Image
            src="/images/ct.png"
            alt="Corporate Training Session"
            fill
            className="object-cover"
          />
        </div>
      </div>

    
      <div className="flex flex-col items-center justify-between gap-8 md:gap-12 xl:flex-row-reverse xl:gap-[64px]">
        <div className="flex max-w-[646px] flex-col gap-6">
          <h2 className="text-3xl font-semibold leading-[150%] tracking-[0.03em] text-[#000000] md:text-[34px] xl:text-[37px]">
            Personalised Individual Training
          </h2>
          <p className="text-[18px] font-normal leading-[150%] tracking-[0%] text-gray-600">
            Begin a journey of lifelong learning and professional development with Tobams Group’s diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today’s professionals.
          </p>
          <ul className="flex flex-col gap-2 text-sm font-semibold text-gray-800">
            <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
                <span>Leadership Development</span></li>
            <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
                <span>Soft Skills Enhancement</span></li>
            <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
                <span>Industry Specific Knowledge</span></li>
            <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
                <span>Technical Skills Enhancement</span></li>
            <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
                <span>Time Management and Productivity</span></li>
            <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
                <span>Career Development</span></li>
          </ul>
        </div>
        <div className="relative h-[260px] w-full max-w-[584px] shrink-0 overflow-hidden rounded-[24px] md:h-[320px] xl:h-[380px]">
          <Image src="/images/pit.png" alt="Personalised Individual Training Session" fill className="object-cover" />
        </div>
      </div>

  
      <div className="flex flex-col items-center justify-between gap-8 md:gap-12 xl:flex-row xl:gap-[64px]">
        <div className="flex max-w-[646px] flex-col gap-6">
          <h2 className="text-3xl font-semibold leading-[150%] tracking-[0.03em] text-[#000000] md:text-[34px] xl:text-[37px]">
            Capacity Development
          </h2>
          <p className="text-[18px] font-normal leading-[150%] tracking-[0%] text-gray-600">
            At Tobams Group, we empower individuals and organisations through tailored training programs, expert-led workshops, and personalised mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:
          </p>
          <ul className="flex flex-col gap-2 text-sm font-semibold text-gray-800">
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
              <span>Tailored Training Programs</span>
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
              <span>Expert-Led Workshops</span>
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
              <span>Personalised Mentorship</span>
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
              <span>Technical Skills Enhancement</span>
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
              <span>Collaborative Learning Environment</span>
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 shrink-0 text-[#480F39] fill-[#480F39]" />
              <span>Ongoing Support and Resources</span>
            </li>
          </ul>
        </div>
        <div className="relative h-[260px] w-full max-w-[584px] shrink-0 overflow-hidden rounded-[24px] md:h-[320px] xl:h-[380px]">
          <Image src="/images/cd.png" alt="Capacity Development Workshop" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}