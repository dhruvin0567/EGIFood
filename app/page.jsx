import Hero from "@/Componets/Hero/Hero";
import Card from "@/Componets/Cards/Card";
import AboutCard from "@/Componets/AboutCard/AboutCard";
import HandPickedCard from "@/Componets/HandPickedCard/HandPickedCard";

const page = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <Card />
      <HandPickedCard />
    </>
  );
};

export default page;
