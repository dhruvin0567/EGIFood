import Button from "@/Componets/Button/Button";

const JoinUs = () => {
  return (
    <section className="join-us flex flex-col items-center justify-center text-center py-16 px-6 bg-white">
      {/* Title */}
      <p>Join Us</p>

      {/* Subtitle */}
      <p className="sub-title">
        Get in touch, us in making each day <br />a celebration of health, life
        and taste.
      </p>

      {/* Description */}
      <p
        className="text-gray-600 max-w-3xl mb-10 leading-relaxed"
        id="join-us-para"
      >
        Join us and receive our latest recipes and updates straight to your
        inbox! We value your feedback, whether it’s about our recipes or our EGI
        products, so please let us know your thoughts. If you have any questions
        or comments, feel free to contact us through your preferred method, and
        our team will be more than happy to help. We believe that no question is
        unreasonable, and we’re always here to assist you.
      </p>

      {/* Button */}
      <Button />
    </section>
  );
};

export default JoinUs;
