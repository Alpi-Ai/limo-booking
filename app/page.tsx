import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import Fleet from "@/components/Fleet";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BookingForm />
      <WhyChooseUs />
      <Fleet />
      <Services />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}