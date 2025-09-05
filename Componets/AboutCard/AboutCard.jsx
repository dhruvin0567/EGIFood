import Image from "next/image";

const AboutCard = () => {
  return (
    <section className="container w-full py-12 md:py-16 about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <h1 className="about-para">
              Passing Down the Legacy of Flavorful Delights to Future
              Generations
            </h1>

            <div className="about-measure mt-6 ">
              <p>
                As a leading wholesale company, we at EGI Food Corp. (EGI) have
                been at the forefront of preserving the rich culinary heritage
                of the Middle East and Mediterranean. Our commitment to bringing
                you the finest quality products has led us on a journey spanning
                over fifty years to rediscover and introduce beloved foods to
                families everywhere.
              </p>
              <p>
                Our carefully curated collection comprises a wide variety of
                heirloom ingredients, new flavors, and trusted brands, all
                designed to reconnect you to your cultural roots. We believe
                that by creating a bond between our family and yours through
                food, we can help build vibrant communities that uphold
                generational values.
              </p>
            </div>

            <hr className="about-divider" />

            <div className="about-24 flex items-start gap-6">
              <div className="shrink-0">
                <Image
                  src="/img/Home/24.webp"
                  alt="24 years"
                  width={120}
                  height={120}
                  priority
                />
              </div>
              <div className="about-measure">
                <p className="about-text">Years on the Market</p>
                <p className="text-paragraph">
                  At EGI, we take pride in our 24 years of experience in the
                  industry. Our longstanding presence in the market has allowed
                  us to cultivate relationships with trusted suppliers and
                  establish a reputation for excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl lg:max-w-none">
            <div className="about-frame">
              <Image
                src="/img/Home/Aboutcompany.webp"
                alt="Friendly shop interaction with fresh products in the foreground"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
