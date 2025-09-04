import Hero from "@/Componets/Hero/Hero";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Hero />

      <div className="container products">
        <div className="product-grid">
          {/* Card 1 */}
          <div className="product-card">
            <div className="product-header">
              <h3 className="product-title">
                LION POTATO CHIPS W/KABAB FLAVOR
              </h3>
              <a href="#" className="product-brand">
                Lion
              </a>
            </div>
            <div className="product-media">
              <Image
                src="/img/Home/product1.webp"
                alt="Lion Potato Chips Kabab Flavor"
                fill
                className="product-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="product-category">Potato Chips & Snacks</div>
            <div className="product-meta">
              <div className="meta-line">
                <span className="meta-label">Pack :</span>
                <span className="meta-value">15</span>
                <span className="meta-sep">Size :</span>
                <span className="meta-value">140 GM</span>
                <span className="meta-sep">Product # :</span>
                <span className="meta-strong">PO-1138</span>
              </div>
              <div className="product-actions">
                <div className="qty-control">
                  <button className="qty-btn" type="button">
                    -
                  </button>
                  <input className="qty-input" type="text" value="1" readOnly />
                  <button className="qty-btn" type="button">
                    +
                  </button>
                </div>
                <button className="login-button" type="button">
                  Login To See Prices
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="product-card">
            <div className="product-header">
              <h3 className="product-title">
                LION POTATO CHIPS W/KABAB FLAVOR
              </h3>
              <a href="#" className="product-brand">
                Lion
              </a>
            </div>
            <div className="product-media">
              <Image
                src="/img/Home/product2.webp"
                alt="Lion Potato Chips Kabab Flavor"
                fill
                className="product-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="product-category">Potato Chips & Snacks</div>
            <div className="product-meta">
              <div className="meta-line">
                <span className="meta-label">Pack :</span>
                <span className="meta-value">15</span>
                <span className="meta-sep">Size :</span>
                <span className="meta-value">140 GM</span>
                <span className="meta-sep">Product # :</span>
                <span className="meta-strong">PO-1138</span>
              </div>
              <div className="product-actions">
                <div className="qty-control">
                  <button className="qty-btn" type="button">
                    -
                  </button>
                  <input className="qty-input" type="text" value="1" readOnly />
                  <button className="qty-btn" type="button">
                    +
                  </button>
                </div>
                <button className="login-button" type="button">
                  Login To See Prices
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="product-card">
            <div className="product-header">
              <h3 className="product-title">
                LION POTATO CHIPS W/KABAB FLAVOR
              </h3>
              <a href="#" className="product-brand">
                Lion
              </a>
            </div>
            <div className="product-media">
              <Image
                src="/img/Home/product3.webp"
                alt="Lion Potato Chips Kabab Flavor"
                fill
                className="product-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="product-category">Potato Chips & Snacks</div>
            <div className="product-meta">
              <div className="meta-line">
                <span className="meta-label">Pack :</span>
                <span className="meta-value">15</span>
                <span className="meta-sep">Size :</span>
                <span className="meta-value">140 GM</span>
                <span className="meta-sep">Product # :</span>
                <span className="meta-strong">PO-1138</span>
              </div>
              <div className="product-actions">
                <div className="qty-control">
                  <button className="qty-btn" type="button">
                    -
                  </button>
                  <input className="qty-input" type="text" value="1" readOnly />
                  <button className="qty-btn" type="button">
                    +
                  </button>
                </div>
                <button className="login-button" type="button">
                  Login To See Prices
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="product-grid">
          {/* Card 4 */}
          <div className="product-card">
            <div className="product-header">
              <h3 className="product-title">
                LION POTATO CHIPS W/KABAB FLAVOR
              </h3>
              <a href="#" className="product-brand">
                Lion
              </a>
            </div>
            <div className="product-media">
              <Image
                src="/img/Home/product4.webp"
                alt="Lion Potato Chips Kabab Flavor"
                fill
                className="product-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="product-category">Potato Chips & Snacks</div>
            <div className="product-meta">
              <div className="meta-line">
                <span className="meta-label">Pack :</span>
                <span className="meta-value">15</span>
                <span className="meta-sep">Size :</span>
                <span className="meta-value">140 GM</span>
                <span className="meta-sep">Product # :</span>
                <span className="meta-strong">PO-1138</span>
              </div>
              <div className="product-actions">
                <div className="qty-control">
                  <button className="qty-btn" type="button">
                    -
                  </button>
                  <input className="qty-input" type="text" value="1" readOnly />
                  <button className="qty-btn" type="button">
                    +
                  </button>
                </div>
                <button className="login-button" type="button">
                  Login To See Prices
                </button>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="product-card">
            <div className="product-header">
              <h3 className="product-title">
                LION POTATO CHIPS W/KABAB FLAVOR
              </h3>
              <a href="#" className="product-brand">
                Lion
              </a>
            </div>
            <div className="product-media">
              <Image
                src="/img/Home/product5.webp"
                alt="Lion Potato Chips Kabab Flavor"
                fill
                className="product-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="product-category">Potato Chips & Snacks</div>
            <div className="product-meta">
              <div className="meta-line">
                <span className="meta-label">Pack :</span>
                <span className="meta-value">15</span>
                <span className="meta-sep">Size :</span>
                <span className="meta-value">140 GM</span>
                <span className="meta-sep">Product # :</span>
                <span className="meta-strong">PO-1138</span>
              </div>
              <div className="product-actions">
                <div className="qty-control">
                  <button className="qty-btn" type="button">
                    -
                  </button>
                  <input className="qty-input" type="text" value="1" readOnly />
                  <button className="qty-btn" type="button">
                    +
                  </button>
                </div>
                <button className="login-button" type="button">
                  Login To See Prices
                </button>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="product-card">
            <div className="product-header">
              <h3 className="product-title">
                LION POTATO CHIPS W/KABAB FLAVOR
              </h3>
              <a href="#" className="product-brand">
                Lion
              </a>
            </div>
            <div className="product-media">
              <Image
                src="/img/Home/product6.webp"
                alt="Lion Potato Chips Kabab Flavor"
                fill
                className="product-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="product-category">Potato Chips & Snacks</div>
            <div className="product-meta">
              <div className="meta-line">
                <span className="meta-label">Pack :</span>
                <span className="meta-value">15</span>
                <span className="meta-sep">Size :</span>
                <span className="meta-value">140 GM</span>
                <span className="meta-sep">Product # :</span>
                <span className="meta-strong">PO-1138</span>
              </div>
              <div className="product-actions">
                <div className="qty-control">
                  <button className="qty-btn" type="button">
                    -
                  </button>
                  <input className="qty-input" type="text" value="1" readOnly />
                  <button className="qty-btn" type="button">
                    +
                  </button>
                </div>
                <button className="login-button" type="button">
                  Login To See Prices
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
