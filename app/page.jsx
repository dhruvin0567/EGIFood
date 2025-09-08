import Hero from "@/Componets/Hero/Hero";
import Card from "@/Componets/Cards/Card";
import AboutCard from "@/Componets/AboutCard/AboutCard";
import HandPickedCard from "@/Componets/HandPickedCard/HandPickedCard";
import JoinUs from "@/Componets/JoinUs/JoinUs";
import Brands from "@/Componets/Brand/Brand";
import CTA from "@/Componets/CTA/CTA";

const page = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <Card />
      <CTA />
      <Brands />
      <HandPickedCard />
      <JoinUs />
    </>
  );
};

export default page;
