"use client";

import Image from "next/image";
import { useReducer } from "react";

const MetaItem = ({ label, value, strong }) => (
  <>
    <span className="meta-label">{label}</span>
    <span className={strong ? "meta-strong" : "meta-value"}>{value}</span>
  </>
);

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, quantity: state.quantity + 1 };
    case "DECREMENT":
      return { ...state, quantity: Math.max(1, state.quantity - 1) };
    case "RESET":
      return { ...state, quantity: 1 };
    default:
      return state;
  }
};

const ProductCard = ({
  product_title,
  product_brand,
  product_img,
  product_alt,
  product_category,
  meta_line = [],
}) => {
  const [state, dispatch] = useReducer(counterReducer, { quantity: 1 });

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="product-card">
      <div className="product-header">
        <h3 className="product-title">
          <a href="#">{product_title}</a>
        </h3>
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
        <div className="product-actions">
          <div className="qty-control">
            <button className="qty-btn" type="button" onClick={handleDecrement}>
              -
            </button>
            <input
              className="qty-input"
              type="text"
              value={state.quantity}
              readOnly
            />
            <button className="qty-btn" type="button" onClick={handleIncrement}>
              +
            </button>
          </div>
          <button className="login-button" type="button">
            Login To See Prices
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
