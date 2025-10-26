import React, { useState, useEffect } from 'react';

// --- Navbar Component ---
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to add background to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    nav: {
      position: 'fixed', // Sticky nav
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      backgroundColor: isScrolled ? 'rgba(31, 41, 55, 0.9)' : 'transparent', // gray-800 with opacity
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
      color: '#d1d5db', // gray-300
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '1rem',
      transition: 'color 0.3s ease',
    },
    // Mobile styles
    mobileMenuIcon: {
      display: 'none', // Hidden on desktop
      flexDirection: 'column',
      gap: '4px',
      cursor: 'pointer',
    },
    hamburgerBar: {
      width: '25px',
      height: '3px',
      backgroundColor: 'white',
      borderRadius: '2px',
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#1f2937', // gray-800
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '32px',
      zIndex: 999, // Below navbar
      transition: 'transform 0.3s ease-in-out',
      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
    },
    mobileNavLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '2rem',
      fontWeight: '600',
    },
    closeIcon: {
      position: 'absolute',
      top: '24px',
      right: '32px',
      color: 'white',
      fontSize: '2.5rem',
      cursor: 'pointer',
    },

    // Media query for mobile
    '@media (max-width: 768px)': {
      navLinks: {
        display: 'none',
      },
      mobileMenuIcon: {
        display: 'flex',
      },
    },
  };

  // --- Responsive Hooks ---
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // --- Hover Styles ---
  const [hoveredLink, setHoveredLink] = useState(null);
  const getLinkStyle = (linkName) => ({
    ...styles.navLink,
    color: hoveredLink === linkName ? 'white' : '#d1d5db',
  });

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Academics', 'Contact'];

  return (
    <nav style={styles.nav}>
      <a href="#home" style={styles.logo}>
        akhi_ak
      </a>
      <div style={isMobile ? styles['@media (max-width: 768px)'].navLinks : styles.navLinks}>
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
      <div
        style={isMobile ? styles['@media (max-width: 768px)'].mobileMenuIcon : styles.mobileMenuIcon}
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <div style={styles.hamburgerBar}></div>
        <div style={styles.hamburgerBar}></div>
        <div style={styles.hamburgerBar}></div>
      </div>

      {/* Mobile Menu Overlay */}
      <div style={styles.mobileMenu}>
        <div style={styles.closeIcon} onClick={() => setIsMobileMenuOpen(false)}>
          &times;
        </div>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
