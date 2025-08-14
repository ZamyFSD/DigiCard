import React from "react";
import "./PartnershipModel.css";

const B2BFeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.53L13.5 7.5C13.1 7.5 12.7 7.3 12.4 7L10.5 5.1C10.1 4.7 9.6 4.5 9.1 4.5S8.1 4.7 7.7 5.1L2 10.8V13H4.8L9 8.8L10.9 10.7C11.2 11 11.6 11.1 12 11.1S12.8 11 13.1 10.7L15 8.8L19 8.5L21 9ZM7 14C5.9 14 5 14.9 5 16S5.9 18 7 18 9 17.1 9 16 8.1 14 7 14ZM17 14C15.9 14 15 14.9 15 16S15.9 18 17 18 19 17.1 19 16 18.1 14 17 14Z"/>
        </svg>
      ),
      text: "Competitive wholesale pricing via direct distributor relationships."
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10V16H9V12H11V16H13V10H11V10.5H9V10H7ZM15 12V16H17V12H15ZM15 10H17C17.6 10 18 10.4 18 11V16C18 16.6 17.6 17 17 17H15C14.4 17 14 16.6 14 16V11C14 10.4 14.4 10 15 10Z"/>
        </svg>
      ),
      text: "Scalable volumes for seasonal and promotional peaks."
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM7 9C7 6.24 9.24 4 12 4S17 6.24 17 9C17 11.88 12 18.21 12 18.21S7 11.88 7 9ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
        </svg>
      ),
      text: "Region-specific products to match local demand and compliance."
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 7V10C2 16 6 21.5 12 22C18 21.5 22 16 22 10V7L12 2ZM12 4.17L19 7.5V10C19 15.14 16.15 19.47 12 20C7.85 19.47 5 15.14 5 10V7.5L12 4.17ZM8 10L7 11L10 14L17 7L16 6L10 12L8 10Z"/>
        </svg>
      ),
      text: "Automated delivery systems for speed and accuracy."
    }
  ];

  return (
    <section className="features-section">
      <div className="container-PartnerShip">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-description">
            Streamlined supply chain management designed for modern businesses seeking efficiency, scalability, and competitive advantage.
          </p>
        </div>

        <div className="features-grid-Partner">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card-Partner">
              <div className="feature-icon-Partner">
                {feature.icon}
              </div>
              <p className="feature-text-Partner">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2BFeaturesSection;