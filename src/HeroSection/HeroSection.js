import React from "react";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import "./HeroSection.css";
import ContactForm from "../Contact/Contact";
import Carousel from "../Carousel/Carousel";
import PartnershipModel from "../PartnerShip/PartnerShip";
import WhyPartnerWithUs from "../WhyChooseUs/WhyPartnerWithUs";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

export default function HeroSection() {
  return (
    <div className="hero-container">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="bg-element-1"></div>
        <div className="bg-element-2"></div>
        <div className="bg-line"></div>
      </div>

      <div className="hero-content">
        <div className="hero-grid">
          {/* Left Side - Text Content */}
          <div className="hero-text">
            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <Shield className="trust-icon" />
                <span>Verified Products</span>
              </div>
              <div className="trust-item">
                <Globe className="trust-icon" />
                <span>Global Network</span>
              </div>
              <div className="trust-item">
                <Zap className="trust-icon" />
                <span>Instant Delivery</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="main-headline">
              Your <span className="gradient-text">Trusted Partner</span> for
              Global Digital Goods
            </h1>

            {/* Subheadline */}
            <h2 className="subheadline">
              Bulk procurement & worldwide delivery of verified, high-demand
              digital products —
              <span className="subheadline-highlight">
                {" "}
                instantly, securely, and competitively priced.
              </span>
            </h2>

            {/* Description Paragraph */}
            {/* <p className="description">
              We connect businesses, distributors, and corporate buyers to authentic digital inventory from across the globe. 
              With our vast sourcing network and instant availability, you get the products you need, when you need them — 
              tailored to your market demands.
            </p> */}

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <button className="btn-primary">
                <span>Explore Products</span>
                <ArrowRight className="arrow-icon" />
              </button>

              <button className="btn-secondary">Get Started Today</button>
            </div>

            {/* Stats or Features */}
            <div className="stats-section">
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Brands</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">12+</div>
                <div className="stat-label">Region Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Global Support</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.99%</div>
                <div className="stat-label">UP Time</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image/Visual */}
          <div className="hero-image">
            <div className="image-container">
              <div className="image-inner">
                {/* Placeholder for actual image */}
                <div className="image-placeholder">
                  {/* Geometric Elements */}
                  <div className="geometric-grid">
                    <div className="grid-container">
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                    </div>
                  </div>

                  {/* Center Content */}
                  <div className="center-content">
                    <Globe className="center-icon" />
                    <div className="center-title">Global Digital Network</div>
                    <div className="center-subtitle">
                      Replace with your hero image
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="floating-dot dot-1"></div>
                  <div className="floating-dot dot-2"></div>
                  <div className="floating-dot dot-3"></div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="decorative-element-1"></div>
            <div className="decorative-element-2"></div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="bottom-fade"></div>
      <Carousel />

      <BrandCarousel />
      <PartnershipModel />
      <WhyPartnerWithUs />
      <ContactForm />
    </div>
  );
}
