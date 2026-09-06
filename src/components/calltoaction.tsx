export function CallToAction() {
  return (
    <section className="flex w-full justify-center px-4 py-8 font-['Nunito_Sans']">
      <div className="flex w-full max-w-[425px] flex-col items-center gap-8 rounded-[8px] bg-[#571244] px-6 py-8 text-center text-white md:max-w-[768px] md:px-10 md:py-10 xl:max-w-[1280px] xl:flex-row xl:justify-between xl:px-16 xl:py-12 xl:text-left">
    
        <div className="flex flex-col gap-2 max-w-[580px]">
          <h3 className="font-['Nunito'] text-[18px] font-bold leading-[140%] md:text-[22px] xl:text-[28px]">
            Don&apos;t just dream it—let&apos;s build it!
          </h3>
          <p className="text-[14px] font-normal leading-[150%] text-gray-200 md:text-[16px]">
            Click now and start your project with Tobams Group. Your journey to digital excellence begins here.
          </p>
        </div>

  
        <button className="w-full shrink-0 rounded-[4px] bg-white px-6 py-3 text-[14px] font-bold text-[#571244] transition-opacity hover:bg-gray-100 sm:w-auto xl:px-8 xl:py-4 xl:text-[16px]">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}