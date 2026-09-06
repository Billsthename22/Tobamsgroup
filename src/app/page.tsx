import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LMS } from '@/components/LMS';
import { TrainingServices } from '@/components/Trainingservices';
import { ManagementDevelopment } from '@/components/ManagementDevelopment';
import { Transformation } from '@/components/Transformation';
import { TrainingConsultant } from '@/components/Trainingconsultant';
import { CallToAction } from '@/components/calltoaction';
import { Testimonials } from '@/components/Testimonial';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <div className="mt-6">
          <LMS />
        </div>
        <TrainingServices />
        <ManagementDevelopment />
        <Transformation />
        <TrainingConsultant />
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}