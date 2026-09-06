import Image from 'next/image';
import Link from 'next/link';

export function LMS() {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-10 bg-[#5712441A] px-4 py-8 md:px-8 md:py-10 xl:min-h-[664px] xl:flex-row xl:gap-[80px] xl:px-[64px] xl:pb-[48px] xl:pt-[24px]">

      <div className="relative h-[300px] w-full max-w-[556.88px] shrink-0 overflow-hidden rounded-[357.57px] md:h-[440px] xl:h-[568px]">
        <Image
          src="/images/lms.png"
          alt="Learning Management System Students"
          fill
          className="object-cover"
        />
      </div>

     
      <div className="flex max-w-[632px] flex-col justify-center gap-6 text-gray-800">
        <h2 className="text-3xl font-bold tracking-tight text-[#3B154C] md:text-4xl">
          Learning Management System
        </h2>

  
        <div className="flex flex-col gap-6 rounded-[12px] bg-[#5712441A] p-6">
          <p className="font-['Nunito_Sans'] text-sm leading-relaxed text-gray-700 md:text-base">
            TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication, and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
          </p>

          <div className="flex flex-col gap-2 font-['Nunito_Sans'] text-sm font-semibold text-gray-800">
            <p className="font-bold text-[#3B154C]">Some of our courses include:</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs md:text-sm">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B154C]" />
                Business Analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B154C]" />
                Design Thinking
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B154C]" />
                Effective Communication
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B154C]" />
                Entrepreneurship
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B154C]" />
                Career Development
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B154C]" />
                Business Model
              </li>
            </ul>
          </div>
        </div>

    
        <div className="pt-2">
          <Link
            href="#tg-academy"
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
    </section>
  );
}
