"use client";

const Info = () => {
  return (
    <div className="info-container">
      {/* Left Image */}
      <div className="info-image-wrapper">
        <img
          src={"/img/Home/hero.webp"}
          alt="Warehouse"
          className="info-image"
        />
      </div>

      {/* Right Details */}
      <div className="info-details">
        <p className="info-title">EGI Brands Importing</p>
        <p className="info-text">4475 S Clinton Ave,</p>
        <p className="info-text">South Plainfield,</p>
        <p className="info-text">NJ 07080</p>

        <p className="info-text">
          MOB:&nbsp;
          <span className="info-highlight">+1 551-221-6865</span>
        </p>
        <p className="info-text">
          PHONE:&nbsp;
          <span className="info-highlight">908-548-8075</span>
        </p>
        <p className="info-text">
          Email:&nbsp;
          <a href="mailto:Info@egifood.com" className="info-email">
            Info@egifood.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Info;
