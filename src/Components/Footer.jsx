import React, { useState } from 'react';

/**
 * A Footer component for the personal portfolio.
 * This component uses ONLY React.js and inline styles.
 */
export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
    footer: {
      backgroundColor: '#111827', // Dark background (gray-900)
      color: '#9ca3af', // Medium gray text (gray-400)
      fontFamily: 'sans-serif',
      padding: '48px 32px',
      borderTop: '1px solid #374151', // gray-700
      textAlign: 'center',
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
    },
    socialLinksContainer: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center', // Align icons vertically
    },
    socialLink: {
      color: '#d1d5db', // gray-300
      textDecoration: 'none',
      fontSize: '1.5rem', // Base size for icons
      lineHeight: '1', // Ensure icon vertical alignment
      transition: 'all 0.3s ease',
      display: 'inline-block', // Needed for transform
    },
    svgIcon: {
      width: '1.5rem', // 24px
      height: '1.5rem', // 24px
      fill: 'currentColor', // Inherit color from parent 'a' tag
    },
    copyright: {
      fontSize: '0.9rem',
    },
    backToTop: {
      color: '#d1d5db',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '0.9rem',
      transition: 'color 0.3s ease',
    },
  };

  // --- Hover Styles ---
  const getSocialLinkStyle = (linkName) => ({
    ...styles.socialLink,
    color: hoveredLink === linkName ? '#ffffff' : '#d1d5db',
    transform: hoveredLink === linkName ? 'scale(1.1)' : 'scale(1)',
  });

  const backToTopStyle = {
    ...styles.backToTop,
    color: hoveredLink === 'top' ? '#ffffff' : '#d1d5db',
    textDecoration: hoveredLink === 'top' ? 'underline' : 'none',
  };

  // --- SVG Icon Components ---
  // Using inline SVG for better control and styling
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

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.socialLinksContainer}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              title={link.name}
              target="_blank"
              rel="noopener noreferrer"
              style={getSocialLinkStyle(link.name)}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#home"
          style={backToTopStyle}
          onMouseEnter={() => setHoveredLink('top')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Back to Top &uarr;
        </a>
        <p style={styles.copyright}>
          &copy; {new Date().getFullYear()} Akhil Pulukuri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
