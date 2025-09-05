import Hero from "@/Componets/Hero/Hero";
import Card from "@/Componets/Cards/Card";
import AboutCard from "@/Componets/AboutCard/AboutCard";
import HandPickedCard from "@/Componets/HandPickedCard/HandPickedCard";
import JoinUs from "@/Componets/JoinUs/JoinUs";

const page = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <Card />
      <HandPickedCard />
      <JoinUs />
    </>
  );
};

export default page;
