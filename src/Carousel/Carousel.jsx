import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesContainerRef = useRef(null);
  const autoScrollRef = useRef(null);

  const slides = [
    {
      className: "entertainment",
      icon: "🎬",
      title: "Entertainment Gift Cards",
      desc: "Stream your favorite movies, TV shows, and music with gift cards for Netflix, Spotify, Disney+, Amazon Prime, and more. Perfect for entertainment lovers who want unlimited access to premium content."
    },
    {
      className: "fashion",
      icon: "👗",
      title: "Fashion Gift Cards",
      desc: "Stay stylish with gift cards from top fashion retailers like Zara, H&M, Nike, Adidas, and luxury brands. Shop the latest trends and timeless classics from global and regional fashion destinations."
    },
    {
      className: "food",
      icon: "🍔",
      title: "Food Delivery Gift Cards",
      desc: "Satisfy your cravings with gift cards for Uber Eats, DoorDash, Grubhub, Zomato, and your favorite restaurant chains. Enjoy delicious meals delivered right to your doorstep."
    },
    {
      className: "electronics",
      icon: "📱",
      title: "Electronics Gift Cards",
      desc: "Get the latest gadgets and tech with gift cards for Apple, Samsung, Best Buy, Amazon, and electronics retailers. Perfect for upgrading devices or exploring cutting-edge technology."
    },
    {
      className: "gaming",
      icon: "🎮",
      title: "Gaming Top-Ups",
      desc: "Level up your gaming experience with gift cards for Steam, PlayStation, Xbox, Nintendo, mobile games, and in-game currency. Unlock new content and enhance your favorite games."
    },
    {
      className: "crypto",
      icon: "₿",
      title: "Cryptocurrency Gift Cards",
      desc: "Enter the digital currency world with secure crypto purchase codes for Bitcoin, Ethereum, and other cryptocurrencies. Safe, convenient, and perfect for crypto enthusiasts."
    }
  ];

  const totalSlides = slides.length;

  const updateCarousel = (index) => {
    if (slidesContainerRef.current) {
      slidesContainerRef.current.style.transform = `translateX(${-index * 100}%)`;
    }
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % totalSlides;
    setCurrentSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollRef.current);
  };

  useEffect(() => {
    updateCarousel(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  // Swipe for mobile
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    stopAutoScroll();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    const deltaX = startX - currentX;
    const threshold = 50;

    if (deltaX > threshold) {
      nextSlide();
    } else if (deltaX < -threshold) {
      prevSlide();
    } else {
      startAutoScroll();
    }

    isDragging = false;
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel">
        <div className="carousel-slides" ref={slidesContainerRef}>
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${slide.className}`}>
              <div className="slide-icon">{slide.icon}</div>
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
            </div>
          ))}
        </div>
        {/* <button className="carousel-nav prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="carousel-nav next" onClick={nextSlide}>
          ›
        </button> */}
      </div>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
