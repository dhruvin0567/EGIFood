import ProductCard from "@/Componets/Cards/ProductCard";

const HandPickedCard = () => {
  const products = [
    {
      id: 1,
      product_title: "BIL HANA SLICED ROOMY",
      product_brand: "Bihana",
      product_img: "/img/Home/product7.webp",
      product_alt: "Bil Hana Slied Roomy",
      product_category: "Cheese & Diary",
      meta_line: [
        { label: "Pack :", value: "60" },
        { label: "Size :", value: "200 GM" },
        { label: "Product # :", value: "C-0100C", strong: true },
      ],
    },
    {
      id: 2,
      product_title: "KONTOS KATAIFI",
      product_brand: "Kontos",
      product_img: "/img/Home/product8.webp",
      product_alt: "Kontos Kataifi",
      product_category: "Frozen Foods",
      meta_line: [
        // { label: "Pack :", value: "12" },
        // { label: "Size :", value: "1LTR" },
        { label: "Product # :", value: "F-228", strong: true },
      ],
    },
    {
      id: 3,
      product_title: "SCHWEPPES POMEGRANATE",
      product_brand: "Schweppes",
      product_img: "/img/Home/product9.webp",
      product_alt: "Schweppes Pomegranate",
      product_category: "Malt Beverages",
      meta_line: [
        // { label: "Pack :", value: "12" },
        // { label: "Size :", value: "1LTR" },
        { label: "Product # :", value: "BEV-080", strong: true },
      ],
    },
    {
      id: 4,
      product_title: "MIRA MANGO JUICE SMALL GLASS",
      product_brand: "Mira",
      product_img: "/img/Home/product10.webp",
      product_alt: "Mira Mango Juice Small Glass",
      product_category: "Juices",
      meta_line: [
        { label: "Pack :", value: "24" },
        { label: "Size :", value: "250ML" },
        { label: "Product # :", value: "J-336", strong: true },
      ],
    },
    {
      id: 5,
      product_title: "SPYSI FRIED CHICKEN MIX MILD",
      product_brand: "Spysi",
      product_img: "/img/Home/product11.webp",
      product_alt: "Spysi Fried Chicken Mix Mild",
      product_category: "Spices & Spicy Mix",
      meta_line: [
        { label: "Pack :", value: "12" },
        { label: "Size :", value: "90 GM" },
        { label: "Product # :", value: "S-0451", strong: true },
      ],
    },
    {
      id: 6,
      product_title: "HOLW EL SHAM BASBOSA W/CREAM",
      product_brand: "Holw Elsham",
      product_img: "/img/Home/product12.webp",
      product_alt: "Holw El Sham Basbosa W/Cream",
      product_category: "Confectionery",
      meta_line: [
        { label: "Pack :", value: "24" },
        { label: "Size :", value: "445 GM" },
        { label: "Product # :", value: "CN-0181", strong: true },
      ],
    },
  ];

  return (
    <>
      <div className="container products">
        <h2 className="text-center">Hand Picked Items For You</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product_title={product.product_title}
              product_brand={product.product_brand}
              product_img={product.product_img}
              product_alt={product.product_alt}
              product_category={product.product_category}
              meta_line={product.meta_line}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HandPickedCard;
