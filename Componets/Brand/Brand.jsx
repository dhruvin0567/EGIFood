import BrandCard from "./BrandCard.jsx";
import { listImages } from "../../lib/fs-images.js";
import Button from "../Button/Button.jsx";

export default function Brands() {
  const logos = listImages("img/Home/Brands");

  return (
    <section
      aria-labelledby="brands-title"
      className="py-16 sm:py-16 lg:py-[60px]"
    >
      <div className="container-max" style={{ flexDirection: "column" }}>
        <h2
          id="brands-title"
          className="text-center text-3xl  tracking-normal text-[#333333] mb-10 sm:mb-10 lg:mb-[40px]"
        >
          Brands We Cater
        </h2>

        <div
          role="list"
          aria-label="Partner brands"
          className="grid gap-5 sm:gap-5 lg:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-stretch"
        >
          {logos.map((src, i) => {
            const centerTwoAtLg =
              logos.length % 4 === 2 && i === logos.length - 2;

            return (
              <div
                role="listitem"
                key={src}
                className={centerTwoAtLg ? "lg:col-start-2" : ""}
              >
                <BrandCard logo={src} name={src.split("/").pop()} />
              </div>
            );
          })}
        </div>

        <div className="text-center" style={{ marginTop: "40px" }}>
          <Button btn_name="VIEW ALL BRANDS" />
        </div>
      </div>
    </section>
  );
}