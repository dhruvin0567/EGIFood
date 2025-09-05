import ProductCard from "@/Componets/Cards/ProductCard";

const Card = () => {
  const products = [
    {
      id: 1,
      product_title: "LION POTATO CHIPS W/KABAB FLAVOR",
      product_brand: "Lion",
      product_img: "/img/Home/product1.webp",
      product_alt: "Lion Potato Chips Kabab Flavor",
      product_category: "Potato Chips & Snacks",
      meta_line: [
        { label: "Pack :", value: "15" },
        { label: "Size :", value: "140 GM" },
        { label: "Product # :", value: "PO-1138", strong: true },
      ],
    },
    {
      id: 2,
      product_title: "LION POTATO CHIPS W/KABAB FLAVOR",
      product_brand: "Lion",
      product_img: "/img/Home/product2.webp",
      product_alt: "Lion Potato Chips Kabab Flavor",
      product_category: "Potato Chips & Snacks",
      meta_line: [
        { label: "Pack :", value: "15" },
        { label: "Size :", value: "140 GM" },
        { label: "Product # :", value: "PO-1138", strong: true },
      ],
    },
    {
      id: 3,
      product_title: "LION POTATO CHIPS W/KABAB FLAVOR",
      product_brand: "Lion",
      product_img: "/img/Home/product3.webp",
      product_alt: "Lion Potato Chips Kabab Flavor",
      product_category: "Potato Chips & Snacks",
      meta_line: [
        { label: "Pack :", value: "15" },
        { label: "Size :", value: "140 GM" },
        { label: "Product # :", value: "PO-1138", strong: true },
      ],
    },
    {
      id: 4,
      product_title: "LION POTATO CHIPS W/KABAB FLAVOR",
      product_brand: "Lion",
      product_img: "/img/Home/product4.webp",
      product_alt: "Lion Potato Chips Kabab Flavor",
      product_category: "Potato Chips & Snacks",
      meta_line: [
        { label: "Pack :", value: "15" },
        { label: "Size :", value: "140 GM" },
        { label: "Product # :", value: "PO-1138", strong: true },
      ],
    },
    {
      id: 5,
      product_title: "LION POTATO CHIPS W/KABAB FLAVOR",
      product_brand: "Lion",
      product_img: "/img/Home/product5.webp",
      product_alt: "Lion Potato Chips Kabab Flavor",
      product_category: "Potato Chips & Snacks",
      meta_line: [
        { label: "Pack :", value: "15" },
        { label: "Size :", value: "140 GM" },
        { label: "Product # :", value: "PO-1138", strong: true },
      ],
    },
    {
      id: 6,
      product_title: "LION POTATO CHIPS W/KABAB FLAVOR",
      product_brand: "Lion",
      product_img: "/img/Home/product6.webp",
      product_alt: "Lion Potato Chips Kabab Flavor",
      product_category: "Potato Chips & Snacks",
      meta_line: [
        { label: "Pack :", value: "15" },
        { label: "Size :", value: "140 GM" },
        { label: "Product # :", value: "PO-1138", strong: true },
      ],
    },
  ];

  return (
    <>
      <div className="container products">
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

export default Card;
