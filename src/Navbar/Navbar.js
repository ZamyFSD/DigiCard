import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
const ResponsiveNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleOutsideClick = useCallback((e) => {
        if (!e.target.closest('.navbar')) {
            setIsMobileMenuOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [handleOutsideClick]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        closeMobileMenu();

        if (href.startsWith('#') && href !== '#') {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const styles = {
        navbar: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '1rem 2rem',
            background: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(15px)' : 'blur(10px)',
            transition: 'all 0.3s ease',
            zIndex: 1000,
            boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none',
            marginBottom:"10px"
        },
        navbarContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            cursor: 'pointer',
        },
        navLinks: {
            display: 'flex',
            listStyle: 'none',
            gap: '2rem',
            margin: 0,
            padding: 0,
            position: window.innerWidth <= 768 ? 'fixed' : 'static',
            top: window.innerWidth <= 768 ? '70px' : 'auto',
            left: window.innerWidth <= 768 ? (isMobileMenuOpen ? '0' : '-100%') : 'auto',
            width: window.innerWidth <= 768 ? '100%' : 'auto',
            height: window.innerWidth <= 768 ? 'calc(100vh - 70px)' : 'auto',
            background: window.innerWidth <= 768 ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
            backdropFilter: window.innerWidth <= 768 ? 'blur(15px)' : 'none',
            flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
            justifyContent: window.innerWidth <= 768 ? 'flex-start' : 'center',
            alignItems: 'center',
            paddingTop: window.innerWidth <= 768 ? '2rem' : '0',
            gap: window.innerWidth <= 768 ? '1.5rem' : '2rem',
            transition: 'left 0.3s ease',
        },
        navLink: {
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '500',
            padding: window.innerWidth <= 768 ? '1rem' : '0.5rem 0',
            transition: 'all 0.3s ease',
            position: 'relative',
            cursor: 'pointer',
            display: window.innerWidth <= 768 ? 'block' : 'inline-block',
            width: window.innerWidth <= 768 ? '100%' : 'auto',
            textAlign: window.innerWidth <= 768 ? 'center' : 'left',
            fontSize: window.innerWidth <= 768 ? '1.1rem' : 'inherit',
        },
        loginBtn: {
            background: 'linear-gradient(45deg, #007bff, #0056b3)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
            borderRadius: '11px',
            padding: window.innerWidth <= 768 ? '1rem' : '8px 16px',
            boxSizing: 'border-box',
            marginTop: window.innerWidth <= 768 ? '1rem' : '0',
            width: window.innerWidth <= 768 ? '80%' : 'auto',
            textAlign: 'center',
        },
        mobileToggle: {
            display: window.innerWidth <= 768 ? 'flex' : 'none',
            flexDirection: 'column',
            cursor: 'pointer',
            padding: '0.5rem',
        },
        hamburgerLine: {
            width: '25px',
            height: '3px',
            backgroundColor: '#fff',
            margin: '3px 0',
            transition: 'all 0.3s ease',
            borderRadius: '2px',
            transformOrigin: 'center',
        },
        hero: {
            height: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
        },
        heroTitle: {
            fontSize: '3rem',
            marginBottom: '1rem',
            margin: 0,
        },
        content: {
            padding: '4rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        contentTitle: {
            fontSize: '2.5rem',
            marginBottom: '2rem',
            color: '#333',
        },
        contentParagraph: {
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '2rem',
            color: '#666',
        },
    };

    // Dynamic styles for hamburger animation
    const getHamburgerLineStyle = (lineNumber) => ({
        ...styles.hamburgerLine,
        transform: isMobileMenuOpen
            ? lineNumber === 1
                ? 'rotate(-45deg) translate(-5px, 6px)'
                : lineNumber === 2
                    ? 'scaleX(0)'
                    : 'rotate(45deg) translate(-5px, -6px)'
            : 'none',
        opacity: isMobileMenuOpen && lineNumber === 2 ? 0 : 1,
    });

    return (
        <>
            {/* Global styles for hover effects that can't be done inline */}
            <style>{`
        .nav-link-hover:hover {
          color: #007bff !important;
        }
        .nav-link-hover::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background: linear-gradient(45deg, #007bff, #0056b3);
          transition: width 0.3s ease;
        }
        .nav-link-hover:hover::after {
          width: 100%;
        }
        .login-btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: "Arial", sans-serif;
          line-height: 1.6;
        }
      `}</style>

            {/* Navigation Bar */}
            <nav className="navbar" style={styles.navbar}>
                <div style={styles.navbarContainer}>

                    {/* Logo */}
                    <NavLink
                        to="/"
                        style={styles.logo}
                    >
                        DigiCard
                    </NavLink>

                    {/* Navigation Links */}
                    <ul style={styles.navLinks}>
                        <li style={{ position: 'relative', width: window.innerWidth <= 768 ? '100%' : 'auto' }}>
                            <NavLink
                                to="/"
                                style={styles.navLink}
                                className="nav-link-hover"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li style={{ position: 'relative', width: window.innerWidth <= 768 ? '100%' : 'auto' }}>
                            <NavLink
                                to="/about"
                                style={styles.navLink}
                                className="nav-link-hover"
                            >
                                About
                            </NavLink>
                        </li>
                        <li style={{ position: 'relative', width: window.innerWidth <= 768 ? '100%' : 'auto' }}>
                            <NavLink
                                to="/services"
                                style={styles.navLink}
                                className="nav-link-hover"
                            >
                                Services
                            </NavLink>
                        </li>
                        {/* <li style={{ position: 'relative', width: window.innerWidth <= 768 ? '100%' : 'auto' }}>
                            <NavLink
                                to="/portfolio"
                                style={styles.navLink}
                                className="nav-link-hover"
                            >
                                Portfolio
                            </NavLink>
                        </li> */}
                        <li style={{ position: 'relative', width: window.innerWidth <= 768 ? '100%' : 'auto' }}>
                            <NavLink
                                to="/contact"
                                style={styles.navLink}
                                className="nav-link-hover"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li style={{ width: window.innerWidth <= 768 ? '100%' : 'auto', display: 'flex', justifyContent: 'center' }}>
                            <NavLink
                                to="/login"
                                style={styles.loginBtn}
                                className="login-btn-hover"
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <div
                        style={styles.mobileToggle}
                        onClick={toggleMobileMenu}
                    >
                        <span style={getHamburgerLineStyle(1)}></span>
                        <span style={getHamburgerLineStyle(2)}></span>
                        <span style={getHamburgerLineStyle(3)}></span>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default ResponsiveNavbar;