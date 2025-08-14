import { Globe, Shield, Zap, TrendingUp, Headphones } from "lucide-react";
import './WhyPartnerWithUs.css';

export default function WhyPartnerWithUs() {
    const features = [
        {
            icon: Globe,
            title: "Global Reach",
            description: "Products sourced from multiple countries and regions."
        },
        {
            icon: Shield,
            title: "Reliability",
            description: "All products are sourced from vetted distributors."
        },
        {
            icon: Zap,
            title: "Speed",
            description: "Instant delivery for in-stock items."
        },
        {
            icon: TrendingUp,
            title: "Scalability",
            description: "From small reseller orders to enterprise-level demand."
        },

    ];

    return (
        <section className="partner-section-p">
            <div className="container-P">
                {/* Header */}
                <div className="header-p">
                    <h2 className="main-title">Why Partner With Us</h2>
                    <div className="title-underline"></div>
                    <p className="section-description">
                        We’re committed to powering your business with reliable, high-demand digital products, competitive rates, and seamless delivery—helping you focus on growth while we handle the supply.
                    </p>
                   
                </div>

                {/* Features Grid */}
                <div className="features-grid-p">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div key={index} className="feature-card-p">
                                {/* Icon */}
                                <div className="icon-container-p">
                                    <div className="icon-wrapper">
                                        <IconComponent className="feature-icon" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="card-content">
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-description">{feature.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="cta-container">
                    <button className="cta-button">Start Partnership Today</button>
                </div>
            </div>
        </section>
    );
}