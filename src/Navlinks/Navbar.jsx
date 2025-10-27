import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Handle scroll to add background to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile detection
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // ✅ Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Academics', 'Contact'];

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      backgroundColor: isScrolled ? 'rgba(31, 41, 55, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      zIndex: 1000,
      transition: 'background-color 0.3s ease',
      boxSizing: 'border-box',
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: 'white',
      textDecoration: 'none',
    },
    navLinks: {
      display: 'flex',
      gap: '24px',
    },
    navLink: {
      color: '#d1d5db',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '1rem',
      transition: 'color 0.3s ease',
    },
    mobileMenuIcon: {
      display: 'none',
      flexDirection: 'column',
      gap: '4px',
      cursor: 'pointer',
      zIndex: 3000, // Above overlay
      position: 'relative',
    },
    hamburgerBar: {
      width: '25px',
      height: '3px',
      backgroundColor: 'white',
      borderRadius: '2px',
      transition: 'all 0.3s ease-in-out',
      transformOrigin: 'center',
    },
    hamburgerBar1Open: {
      transform: 'rotate(45deg) translate(5px, 6px)',
    },
    hamburgerBar2Open: {
      opacity: 0,
    },
    hamburgerBar3Open: {
      transform: 'rotate(-45deg) translate(5px, -6px)',
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh', // ✅ full viewport height
      backgroundColor: '#1f2937',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '32px',
      zIndex: 2000,
      transition: 'transform 0.3s ease-in-out',
      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
    },
    mobileNavLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '2rem',
      fontWeight: '600',
    },
    '@media (max-width: 768px)': {
      navLinks: {
        display: 'none',
      },
      mobileMenuIcon: {
        display: 'flex',
      },
    },
  };

  const getLinkStyle = (linkName) => ({
    ...styles.navLink,
    color: hoveredLink === linkName ? 'white' : '#d1d5db',
  });

  const getResponsiveStyle = (baseStyle, mobileStyle) => {
    return isMobile ? { ...baseStyle, ...mobileStyle } : baseStyle;
  };

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <a href="#home" style={styles.logo}>
        akhi_ak
      </a>

      {/* Desktop Links */}
      <div
        style={getResponsiveStyle(
          styles.navLinks,
          styles['@media (max-width: 768px)'].navLinks
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={getLinkStyle(link)}
            onMouseEnter={() => setHoveredLink(link)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div
        style={getResponsiveStyle(
          styles.mobileMenuIcon,
          styles['@media (max-width: 768px)'].mobileMenuIcon
        )}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div
          style={{
            ...styles.hamburgerBar,
            ...(isMobileMenuOpen ? styles.hamburgerBar1Open : {}),
          }}
        ></div>
        <div
          style={{
            ...styles.hamburgerBar,
            ...(isMobileMenuOpen ? styles.hamburgerBar2Open : {}),
          }}
        ></div>
        <div
          style={{
            ...styles.hamburgerBar,
            ...(isMobileMenuOpen ? styles.hamburgerBar3Open : {}),
          }}
        ></div>
      </div>

      {/* Mobile Menu */}
      <div style={styles.mobileMenu}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
