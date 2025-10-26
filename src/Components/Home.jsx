import React from 'react';

/**
 * A customized Home component for a personal portfolio.
 * This component uses ONLY React.js and inline styles.
 * This version features a centered, stacked layout.
 */
export default function Home() {
  // --- Style Objects for Inline Styling ---

  const styles = {
    section: {
      position: 'relative',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'rgba(15, 16, 15, 0.93)',
      color: 'white',
      fontFamily: 'sans-serif',
      padding: '64px 32px',
    },

    // Main content container (always centered and stacked)
    content: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      padding: '32px',
      maxWidth: '800px', // Max width for centered content
      display: 'flex',
      flexDirection: 'column', // Always stacked
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px', // Space between image, text, buttons
    },

    // Image container
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
    },

    // A smaller, cleaner profile image
    profileImage: {
      width: '200px', // Smaller image for this template
      height: '200px',
      borderRadius: '50%', // Circular image
      objectFit: 'cover',
      border: '4px solid #374151', // Subtle dark gray border
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
    },

    // Text content wrapper
    textContainer: {
      textAlign: 'center',
    },

    h1: {
      fontSize: 'calc(2rem + 2vw)',
      fontWeight: '800',
      marginBottom: '16px',
      lineHeight: 1.2,
    },

    p: {
      fontSize: 'calc(1rem + 0.5vw)',
      color: '#e5e7eb',
      marginBottom: '32px',
      maxWidth: '600px', // Keep text from getting too wide
    },

    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      flexWrap: 'wrap',
    },

    button: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px 32px',
      backgroundColor: '#2563eb',
      color: 'white',
      fontWeight: '600',
      borderRadius: '8px',
      boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.2)',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1.1rem',
      textDecoration: 'none',
    },

    buttonSecondary: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px 32px',
      backgroundColor: 'transparent',
      color: 'white',
      fontWeight: '600',
      borderRadius: '8px',
      border: '2px solid white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1.1rem',
      textDecoration: 'none',
    },

    arrow: {
      marginLeft: '8px',
      transition: 'transform 0.3s ease',
    },

    socialLinksContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginTop: '32px', // Slightly less margin
    },

    socialLink: {
      color: '#e5e7eb',
      textDecoration: 'none',
      fontSize: '1.8rem', // Icon size for Home
      lineHeight: '1', // Ensure icon vertical alignment
      transition: 'all 0.3s ease',
      display: 'inline-block', // Needed for transform
    },

    svgIcon: {
      width: '1.8rem', // Match socialLink fontSize
      height: '1.8rem', // Match socialLink fontSize
      fill: 'currentColor', // Inherit color from parent 'a' tag
    },
  };

  const [isButtonHovered, setIsButtonHovered] = React.useState(false);
  const [isResumeHovered, setIsResumeHovered] = React.useState(false);
  const [hoveredSocial, setHoveredSocial] = React.useState(null);

  const buttonStyle = {
    ...styles.button,
    backgroundColor: isButtonHovered ? '#1d4ed8' : '#2563eb',
    transform: isButtonHovered ? 'scale(1.02)' : 'scale(1)',
  };

  const arrowStyle = {
    ...styles.arrow,
    transform: isButtonHovered ? 'translateX(4px)' : 'translateX(0)',
  };

  const resumeButtonStyle = {
    ...styles.buttonSecondary,
    backgroundColor: isResumeHovered ? 'white' : 'transparent',
    color: isResumeHovered ? '#111827' : 'white',
    transform: isResumeHovered ? 'scale(1.02)' : 'scale(1)',
  };

  const getSocialLinkStyle = (name) => ({
    ...styles.socialLink,
    color: hoveredSocial === name ? 'white' : '#e5e7eb',
    transform: hoveredSocial === name ? 'scale(1.1)' : 'scale(1)',
  });

  // --- SVG Icon Components ---
  const LinkedInIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={styles.svgIcon}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );

  const GitHubIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={styles.svgIcon}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

  const socialLinks = [
    { name: 'LinkedIn', icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/pulukuri-akhil/' },
    { name: 'GitHub', icon: <GitHubIcon />, href: 'https://github.com/akhi45-ak' },
  ];

  const PROFILE_IMAGE_URL = 'https://via.placeholder.com/200'; // Placeholder image

  return (
    <section id="home" style={styles.section}>
      <div style={styles.content}>
        {/* Image */}
        <div style={styles.imageContainer}>
          <img src='./pictures/img1.jpg'alt="Akhil Pulukuri" style={styles.profileImage} />
        </div>

        {/* Text Content */}
        <div style={styles.textContainer}>
          <h1 style={styles.h1}>Hello, I'm Akhil Pulukuri</h1>
          <p>
            Full-Stack Developer. I build modern and responsive web applications.
            Explore my projects and get in touch.
          </p>

          <div style={styles.buttonContainer}>
            <a
              href="#projects"
              style={buttonStyle}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              View My Work
              <span style={arrowStyle}>&rarr;</span>
            </a>
            <a
              href="./assets/AKHIL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={resumeButtonStyle}
              onMouseEnter={() => setIsResumeHovered(true)}
              onMouseLeave={() => setIsResumeHovered(false)}
            >
              Download Resume
            </a>
          </div>

          <div style={styles.socialLinksContainer}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                title={link.name}
                target="_blank"
                rel="noopener noreferrer"
                style={getSocialLinkStyle(link.name)}
                onMouseEnter={() => setHoveredSocial(link.name)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
