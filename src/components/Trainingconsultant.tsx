import Link from 'next/link';
const features = [
  {
    title: 'Expert-Led Learning',
    description:
      'Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.',
  },
  {
    title: 'Interactive Workshops',
    description:
      'Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.',
  },
  {
    title: 'Comprehensive Curriculum',
    description:
      'Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.',
  },
  {
    title: 'Global Recognition',
    description:
      'You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.',
  },
];

export function TrainingConsultant() {
  return (
    <section className="mx-auto w-full max-w-[1440px] bg-[#5712441A] px-4 py-8 font-['Nunito_Sans'] md:px-8 md:py-10 xl:px-[64px] xl:py-[48px]">
      <div className="flex w-full flex-col gap-8 md:gap-10">
     
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold leading-[130%] text-[#571244] md:text-[36px] xl:text-[40px]">
            Training The Consultant
          </h2>
          <p className="text-[16px] font-semibold text-[#571244]">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="max-w-[1232px] text-sm font-normal leading-[150%] text-gray-700 md:text-base xl:text-[18px]">
            With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
          </p>
        </div>

    
        <div className="rounded-[16px] bg-[#571244] p-5 text-white md:p-8 xl:p-[40px]">
          <div className="grid grid-cols-1 gap-y-8 gap-x-12 md:grid-cols-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <h3 className="text-[18px] font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-[15px] font-normal leading-[150%] text-gray-200 opacity-90">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
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
    </section>
  );
}
