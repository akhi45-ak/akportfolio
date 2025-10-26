import React, { useState, useEffect } from 'react';

// You would typically place your image file in the 'public' folder or import it
// e.g., import profileImage from '../assets/profile.jpg';
// const PROFILE_IMAGE_URL = profileImage;
// Using a square (400x400) placeholder, which works best for a circular crop.
const PROFILE_IMAGE_URL = 'https://placehold.co/400x400/6366f1/white?text=A+P'; // Placeholder image

/**
 * A customized About component for a personal portfolio.
 * This version uses a dark theme and fully responsive inline styles.
 */
export default function About() {
  // --- State for Responsive Layout ---
  // We use state to track screen size for applying styles dynamically.
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup function: remove event listener when component unmounts
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []); // Empty dependency array means this effect runs once on mount

  // --- Style Objects for Inline Styling ---

  const styles = {
    // The main section container (Dark Mode)
    section: {
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(15, 16, 15, 0.93)', // Dark background (gray-900)
      color: '#d1d5db', // Light gray text (gray-300)
      fontFamily: 'sans-serif',
      padding: '64px 32px',
    },

    // Main container for content and image
    mainContainer: {
      display: 'flex',
      flexDirection: isLargeScreen ? 'row' : 'column', // Dynamic direction
      alignItems: 'center',
      gap: '40px',
      maxWidth: '1100px',
      width: '100%',
    },

    // Content area (text and skills)
    contentArea: {
      flex: 1, // Takes up remaining space
      textAlign: isLargeScreen ? 'left' : 'center', // Dynamic text align
    },

    // The main heading
    h2: {
      fontSize: 'calc(1.8rem + 1.5vw)',
      fontWeight: '700',
      marginBottom: '24px',
      color: '#ffffff', // White text
      borderBottom: '3px solid #2563eb', // Accent color border
      paddingBottom: '8px',
      display: 'inline-block',
    },

    // The paragraph text
    p: {
      fontSize: 'calc(1rem + 0.2vw)',
      color: '#d1d5db', // Light gray text (gray-300)
      marginBottom: '20px',
      lineHeight: 1.7,
      maxWidth: '650px', // Limit line length for readability
      margin: isLargeScreen ? '0 0 20px 0' : '0 auto 20px auto', // Auto margin for center align
    },

    // A sub-heading for skills
    h3: {
      fontSize: 'calc(1.2rem + 0.5vw)',
      fontWeight: '600',
      color: '#ffffff', // White text
      marginTop: '32px',
      marginBottom: '16px',
    },

    // Container for skill items
    skillsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      justifyContent: isLargeScreen ? 'flex-start' : 'center', // Dynamic justify
    },

    // Individual skill item (Dark Mode)
    skill: {
      backgroundColor: '#374151', // Medium-dark gray (gray-700)
      color: '#f9fafb', // Very light text (gray-50)
      padding: '8px 16px',
      borderRadius: '20px',
      fontWeight: '500',
      fontSize: '0.95rem',
    },

    // Image container/wrapper
    imageWrapper: {
      flexShrink: 0,
      width: '100%',
      maxWidth: '350px', // Max width for image on smaller screens
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    // Circular profile image
    profileImage: {
      width: '300px', // Fixed size for a clean circle
      height: '300px',
      borderRadius: '50%', // Makes the image circular
      border: '4px solid #2563eb', // Accent border
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
      objectFit: 'cover', // Ensures image covers the circle
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.mainContainer}>
        {/* Image Wrapper */}
        <div style={styles.imageWrapper}>
          <img
            src='./pictures/img1.jpg'
            alt="Akhil Pulukuri - Profile"
            style={styles.profileImage}
          />
        </div>

        {/* Content Wrapper */}
        <div style={styles.contentArea}>
          <h2 style={styles.h2}>About Me</h2>
          <p style={styles.p}>
            Hello! I'm Akhil, a passionate full-stack developer with a love for
            building clean, intuitive, and high-performance web applications.
            My journey in tech started with a curiosity for how things work,
            which evolved into a career dedicated to solving complex problems
            with elegant code.
          </p>
          <p style={styles.p}>
            I specialize in the MERN stack (MongoDB, Express, React, Node.js)
            but I am always eager to learn new technologies and frameworks.
            I thrive in collaborative environments and am committed to writing
            maintainable, scalable, and well-documented code.
          </p>

          <h3 style={styles.h3}>Core Technologies</h3>
          <div style={styles.skillsContainer}>
            <span style={styles.skill}>React.js</span>
            <span style={styles.skill}>Node.js</span>
            <span style={styles.skill}>JavaScript (ES6+)</span>
            <span style={styles.skill}>HTML5 & CSS3</span>
            <span style={styles.skill}>MongoDB</span>
            <span style={styles.skill}>Express.js</span>
            <span style={styles.skill}>REST APIs</span>
            <span style={styles.skill}>Git & GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}