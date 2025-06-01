import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PopularDestinations />
      <HowItWorks />
    </div>
  );
};

export default Index;
