import React from 'react';
import './About.css'; // Import the CSS file

export default function AboutUs() {
  const services = [
    {
      icon: "💻",
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs. We build scalable, robust applications using the latest technologies and best practices."
    },
    {
      icon: "🚀",
      title: "Digital Transformation",
      description: "Helping businesses evolve and adapt to digital landscapes. We guide organizations through seamless technology adoption and process optimization."
    },
    {
      icon: "🎯",
      title: "Strategic Consulting",
      description: "Expert guidance to align technology with business objectives. Our consultants provide insights that drive growth and competitive advantage."
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets. We implement robust security measures and provide ongoing monitoring and support."
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Seamless migration and optimization for cloud platforms. We help businesses leverage cloud technologies for improved efficiency and scalability."
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Turn your data into actionable insights. Our analytics solutions help you make informed decisions and identify new opportunities for growth."
    }
  ];

  const stories = [
    {
      date: "2013",
      title: "The Beginning",
      content: "TechVision Solutions was founded with a simple yet ambitious vision: to bridge the gap between innovative technology and practical business solutions. Starting in a small office with just three passionate developers, we began our journey by helping local businesses embrace digital transformation.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Team founding story"
    },
    {
      date: "2017",
      title: "Expanding Horizons",
      content: "As our reputation grew, so did our team and capabilities. We expanded our services to include cloud solutions and cybersecurity, helping over 100 companies modernize their IT infrastructure. This year marked our transition from a local startup to a regional technology partner.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Office expansion"
    },
    {
      date: "2020",
      title: "Digital Resilience",
      content: "The global pandemic challenged businesses worldwide, but it also accelerated digital adoption. We pivoted quickly to help organizations maintain continuity through remote work solutions, digital collaboration tools, and enhanced cybersecurity measures. Our rapid response helped over 500 clients navigate unprecedented challenges.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Remote work solutions"
    },
    {
      date: "2024",
      title: "Innovation Leadership",
      content: "Today, TechVision Solutions stands as a leader in technological innovation. With a team of over 150 professionals, we've delivered solutions to more than 1,000 clients across various industries. We continue to push boundaries with AI integration, advanced analytics, and next-generation cloud architectures.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Modern innovation"
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">
            Digicard Distribution
          </h1>
          <p className="about-tagline">
            Innovating Tomorrow, Today
          </p>
          <p className="about-description">
            We are a leading technology company dedicated to transforming businesses through innovative solutions. 
            With over a decade of experience, we specialize in cutting-edge software development, digital transformation, 
            and strategic consulting services that help organizations thrive in the digital age.
          </p>
        </div>
      </div>

      <div className="about-main-content">
        {/* Services Section */}
        <section className="services-section">
          <h2 className="services-title">
            What We Do
          </h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card"
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">
                  {service.title}
                </h3>
                <p className="service-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stories Section */}
        <section className="stories-section">
          <div className="stories-content">
            <h2 className="stories-title">
              Our Journey
            </h2>
            
            {stories.map((story, index) => (
              <div 
                key={index}
                className="story"
              >
                <div className="story-content">
                  <div className="story-date">
                    {story.date}
                  </div>
                  <h3 className="story-title">
                    {story.title}
                  </h3>
                  <p className="story-text">
                    {story.content}
                  </p>
                </div>
                <div className="story-image-container">
                  <img 
                    src={story.image} 
                    alt={story.alt}
                    className="story-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="about-footer">
        <div className="about-footer-content">
          <p>&copy; 2025 Digicard Distribution. Building the future, one solution at a time.</p>
        </div>
      </footer>
    </div>
  );
}