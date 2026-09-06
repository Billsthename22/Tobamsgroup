'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Aisha Yusuf',
    role: 'Founder, CraftHub NG',
    avatar: '/images/aisha.png',
    quote:
      'Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!',
  },
  {
    name: 'John Davies',
    role: 'Marketing Manager, E-Commerce Emporium',
    avatar: '/images/john.png',
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: 'Chinonso Nwankwo',
    role: 'HR Director, FutureTech Solutions',
    avatar: '/images/chinonso.png',
    quote:
      'Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[10px] px-4 py-8 font-['Nunito_Sans'] md:items-stretch md:px-8 md:py-10 xl:px-[64px] xl:py-[40px]">

      <div className="mb-4 flex justify-center">
        <h2 className="rounded border border-[#12B76A] px-4 py-1 font-['Nunito'] text-base font-bold text-[#12B76A] md:border-none md:p-0 md:text-[36px] md:text-[#3B154C]">
          Testimonials
        </h2>
      </div>

     
      <div className="grid w-full max-w-md grid-cols-1 gap-[24px] md:max-w-none md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-between rounded-[8px] border border-[#E5E7EB] border-l-2 border-l-[#EF4353] bg-white p-[24px] shadow-sm ${
              idx === currentIndex ? 'block' : 'hidden md:flex'
            }`}
          >
            <div className="flex flex-col gap-[16px]">
        
              <div className="flex items-center gap-[12px]">
                <div className="relative h-[40px] w-[40px] shrink-0 overflow-hidden rounded-full bg-[#EF435333]">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[14px] font-bold text-[#3B154C]">
                    {item.name}
                  </h3>
                  <p className="text-[12px] text-gray-500">{item.role}</p>
                </div>
              </div>

       
              <p className="text-[14px] font-normal leading-[150%] text-gray-600">
                {item.quote}
              </p>
            </div>
          </div>
        ))}
      </div>

  
      <div className="mt-4 flex w-full max-w-md items-center justify-end gap-2 pr-2 md:max-w-none">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="flex h-[32px] w-[32px] items-center justify-center rounded-md border border-[#EF435366] bg-[#F043541A] text-[#EF4353] transition-opacity hover:opacity-80"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="flex h-[32px] w-[32px] items-center justify-center rounded-md border border-[#EF435366] bg-[#F043541A] text-[#EF4353] transition-opacity hover:opacity-80"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
