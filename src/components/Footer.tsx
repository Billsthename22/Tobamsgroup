import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#11040E] text-white font-['Nunito_Sans']">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[20px] px-4 py-8 md:px-8 xl:px-[64px]">
        {/* Top CTA Bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-[#FFFFFF1A] pb-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-1">
            <span className="text-[14px] text-[white]">
              Ready to be a part of something extraordinary?
            </span>
            <h2 className="font-['Nunito'] text-[28px] font-bold text-white md:text-[32px]">
              Let&apos;s work together to create a difference
            </h2>
          </div>
          <button className="rounded-[8px] bg-[#571244] px-6 py-3 text-[16px] font-semibold text-white transition-opacity hover:opacity-90">
            Get In Touch
          </button>
        </div>


        <div className="grid grid-cols-1 gap-8 py-6 sm:grid-cols-2 xl:grid-cols-5">
          {/* Brand Info */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <div className="relative h-[72.61px] w-[188px] shrink-0">
              <Image
                src="/images/tobamssecondary.png"
                alt="Tobams Group Logo"
                width={188}
                height={72.61}
                className="h-auto w-auto object-contain opacity-100"
                priority
              />
            </div>
            <p className="max-w-[320px] text-[14px] leading-[150%] text-gray-300">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
            </p>

       
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#FFFFFF1A] text-[12px] text-white opacity-100 transition-colors hover:bg-[#EF4353]"
              >
                in
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#FFFFFF1A] text-[12px] text-white opacity-100 transition-colors hover:bg-[#EF4353]"
              >
                ig
              </Link>
              <Link
                href="#"
                aria-label="X (Twitter)"
                className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#FFFFFF1A] text-[12px] text-white opacity-100 transition-colors hover:bg-[#EF4353]"
              >
                x
              </Link>
            </div>
          </div>

    
          <div className="flex flex-col gap-3">
            <h3 className="text-[16px] font-bold text-white">What We Do</h3>
            <ul className="flex flex-col gap-2 text-[14px] text-gray-300">
              <li><Link href="#" className="hover:text-white">Sustainability Services</Link></li>
              <li><Link href="#" className="hover:text-white">Strategy Planning and Implementation</Link></li>
              <li><Link href="#" className="hover:text-white">Tech Talent Solutions</Link></li>
              <li><Link href="#" className="hover:text-white">Training and Development</Link></li>
              <li><Link href="#" className="hover:text-white">IT Consulting Services</Link></li>
              <li><Link href="#" className="hover:text-white">Social Impact</Link></li>
              <li><Link href="#" className="hover:text-white">Talent Recruitment</Link></li>
            </ul>
          </div>

      
          <div className="flex flex-col gap-3">
            <h3 className="text-[16px] font-bold text-white">Company</h3>
            <ul className="flex flex-col gap-2 text-[14px] text-gray-300">
              <li><Link href="#" className="hover:text-white">About</Link></li>
              <li><Link href="#" className="hover:text-white">Jobs</Link></li>
              <li><Link href="#" className="hover:text-white">Projects</Link></li>
              <li><Link href="#" className="hover:text-white">Our Founder</Link></li>
              <li><Link href="#" className="hover:text-white">Business Model</Link></li>
              <li><Link href="#" className="hover:text-white">The Team</Link></li>
              <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white">Testimonials</Link></li>
            </ul>
          </div>

      
          <div className="flex flex-col gap-3">
            <h3 className="text-[16px] font-bold text-white">Solution</h3>
            <ul className="flex flex-col gap-2 text-[14px] text-gray-300">
              <li><Link href="#" className="hover:text-white">Tobams Group Academy</Link></li>
              <li><Link href="#" className="hover:text-white">Help a Tech Talent</Link></li>
              <li><Link href="#" className="hover:text-white">Campus Ambassadors Program</Link></li>
              <li><Link href="#" className="hover:text-white">Join Our Platform</Link></li>
              <li><Link href="#" className="hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white">Book a Consultation</Link></li>
              <li><Link href="#" className="hover:text-white">Join Our Slack Community</Link></li>
            </ul>
          </div>
        </div>


        <div className="rounded-[8px] border border-[#FFFFFF1A] bg-[#FFFFFF0F] p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-0">
    
            <div className="flex flex-col gap-3 md:col-span-8">
              <h3 className="text-[16px] font-bold text-white">Registered Offices</h3>
              
              <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
         
                <div className="flex-1 pr-0 md:pr-6 md:border-r md:border-[#FFFFFF1A]">
                  <p className="text-[16px] font-semibold leading-[150%] text-[#EF4353]">
                    United Kingdom
                  </p>
                  <p className="text-[16px] font-normal leading-[150%] text-gray-300 opacity-80">
                    07451196 (Registered by Company House)
                  </p>
                  <p className="mt-1 text-[16px] font-normal leading-[150%] text-gray-300">
                    Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                  </p>
                </div>

          
                <div className="flex-1 pr-0 md:px-6 md:border-r md:border-[#FFFFFF1A]">
                  <p className="text-[16px] font-semibold leading-[150%] text-[#EF4353]">
                    Nigeria
                  </p>
                  <p className="text-[16px] font-normal leading-[150%] text-gray-300 opacity-80">
                    RC 1048722 (Registered by Corporate Affairs Commission)
                  </p>
                  <p className="mt-1 text-[16px] font-normal leading-[150%] text-gray-300">
                    4, Muaz Close, Angwar-Rimi
                  </p>
                </div>
              </div>
            </div>

    
            <div className="flex flex-col gap-3 border-t border-[#FFFFFF1A] pt-4 md:col-span-4 md:border-t-0 md:pl-6 md:pt-0">
              <h3 className="text-[16px] font-bold text-white">Contact Information</h3>
              <ul className="flex flex-col gap-2 text-[16px] font-normal leading-[150%] text-gray-300">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#EF4353]" />
                  <a href="mailto:theteam@tobamsgroup.com" className="hover:text-white">
                    theteam@tobamsgroup.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#EF4353]" />
                  <a href="tel:+447888600748" className="hover:text-white">
                    +447888600748
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

    
        <div className="flex flex-col items-center justify-between gap-4 pt-2 text-[13px] text-gray-400 sm:flex-row">
          <p>Copyright © Tobams Group. 2024. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Terms and Conditions</Link>
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
