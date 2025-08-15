import React, { useEffect, useRef } from "react";
import "./BrandCarousel.css";

const brands = [
    { name: "Netflix", category: "Entertainment", icon: "🎬", class: "brand-netflix" },
    { name: "Spotify", category: "Music Streaming", icon: "🎵", class: "brand-spotify" },
    { name: "Adidas", category: "Sports & Fashion", icon: "👟", class: "brand-adidas" },
    { name: "Uber", category: "Transportation", icon: "🚗", class: "brand-uber" },
    { name: "Uber Eats", category: "Food Delivery", icon: "🍔", class: "brand-ubereats" },
    { name: "DoorDash", category: "Food Delivery", icon: "🚚", class: "brand-doordash" },
    { name: "Zomato", category: "Food Delivery", icon: "🍕", class: "brand-zomato" },
    { name: "Virgin Megastore", category: "Retail", icon: "🛍", class: "brand-virgin" },
    { name: "Xbox", category: "Gaming", icon: "🎮", class: "brand-xbox" },
    { name: "PlayStation", category: "Gaming", icon: "🕹", class: "brand-playstation" },
    { name: "Nintendo", category: "Gaming", icon: "🎯", class: "brand-nintendo" },
    { name: "FC 25 Points", category: "Gaming Currency", icon: "⚽", class: "brand-fc25" },
    { name: "Mastercard", category: "Payment", icon: "💳", class: "brand-mastercard" }
];

export default function BrandCarousel() {
    const trackRef = useRef(null);

    // Duplicate brands for infinite scroll effect
    const doubledBrands = [...brands, ...brands];

    return (
        <div className="brand-carousel-container">
            <div className="brand-carousel">
                <div className="brand-carousel-track" ref={trackRef}>
                    {doubledBrands.map((brand, i) => (
                        <div className="brand-card" key={i}>
                            <div className={`brand-card-header ${brand.class}`}>
                                <h3>{brand.name}</h3>
                                <p>{brand.category}</p>
                            </div>
                            <div className="brand-card-body">
                                <div className="brand-icon">{brand.icon}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}