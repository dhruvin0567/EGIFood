import Button from "@/Componets/Button/Button";
import "./cta.css";

const CTA = ({ backgroundImage = "/img/Home/hero.webp" }) => {
  return (
    <section
      className="cta"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="cta__overlay" />
      <div className="cta__content">
        <p className="cta__eyebrow">
          DISCOVER A WORLD OF CULINARY EXCELLENCE WITH OUR PREMIUM WHOLESALE
          FOOD SELECTIONS
        </p>

        <h1 className="cta__title">Gourmet Delights Direct to</h1>
        <h2 className="cta__subtitle">Your Business</h2>

        <Button btn_name="VIEW ALL OFFERS" aria-label="View all offers" />
      </div>
    </section>
  );
};

export default CTA;
