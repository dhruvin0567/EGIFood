import Image from "next/image";

const MetaItem = ({ label, value, strong }) => (
  <>
    <span className="meta-label">{label}</span>
    <span className={strong ? "meta-strong" : "meta-value"}>{value}</span>
  </>
);

const ProductCard = ({
  product_title,
  product_brand,
  product_img,
  product_alt,
  product_category,
  meta_line = [],
}) => {
  return (
    <div className="product-card">
      <div className="product-header">
        <h3 className="product-title">{product_title}</h3>
        <a href="#" className="product-brand">
          {product_brand}
        </a>
      </div>

      <div className="product-media">
        <Image
          src={product_img}
          alt={product_alt}
          fill
          className="product-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>

      <div className="product-category">{product_category}</div>

      <div className="product-meta">
        <div className="meta-line">
          {meta_line.map((item, index) => (
            <MetaItem
              key={index} 
              label={item.label}
              value={item.value}
              strong={item.strong}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
