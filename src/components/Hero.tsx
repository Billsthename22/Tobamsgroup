import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative isolate mx-auto flex h-[420px] w-full max-w-[1440px] flex-col items-center justify-center gap-8 overflow-hidden px-4 py-12 text-center md:h-[470px] md:px-8 md:py-16 xl:h-[511px] xl:gap-[48px] xl:px-[64px] xl:py-[112px]">
  
      <Image
        src="/images/hero.png"
        alt="Training and Development Background"
        fill
        priority
        className="z-0 object-cover"
      />

      <div className="absolute inset-0 z-10 bg-black/70" />

   
      <div className="z-20 flex flex-col items-center text-white">
     
        <div className="mb-4 inline-flex h-[40px] w-auto items-center justify-center rounded-[100px] border border-white/20 bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm md:h-[45px] md:w-[193px] md:px-[48px] md:py-[12px]">
          WHAT WE DO
        </div>


        <div className="flex w-full max-w-[1312px] flex-col items-center justify-center gap-4 md:h-[142px] md:gap-[15px]">
    
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl xl:text-5xl">
            Training and Development
          </h1>

          <p className="font-['Nunito_Sans'] text-[18px] font-semibold leading-[150%] tracking-normal text-center text-gray-200">
            Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
          </p>
        </div>
      </div>


      <Link
        href="#consultation"
        className="z-20 inline-flex h-[48px] w-[214px] items-center justify-center gap-[10px] rounded-[4px] bg-[#571244] px-[24px] py-[12px] text-sm font-semibold text-white transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
      >
        Book a Consultation
      </Link>
    </section>
  );
}
