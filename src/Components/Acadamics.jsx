import React from 'react';

/**
 * A professional Academics component for a personal portfolio.
 * This version uses a dark theme, a vertical timeline layout,
 * and fully responsive inline styles (no external libraries).
 */
export default function Academics() {
  // --- Style Objects for Inline Styling ---

  const styles = {
    // The main section container (Dark Mode)
    section: {
      minHeight: '50vh', // Can be a bit shorter than other sections
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#111827', // Dark background (gray-900)
      color: '#d1d5db', // Light gray text (gray-300)
      fontFamily: 'sans-serif',
      padding: '64px 32px',
    },

    // Main content container
    container: {
      maxWidth: '1000px',
      width: '100%',
      textAlign: 'center',
    },

    // The main heading
    h2: {
      fontSize: 'calc(1.8rem + 1.5vw)',
      fontWeight: '700',
      marginBottom: '48px', // More space for timeline
      color: '#ffffff', // White text
      borderBottom: '3px solid #2563eb', // Accent color border
      paddingBottom: '8px',
      display: 'inline-block',
    },

    // Container for the timeline
    timelineContainer: {
      position: 'relative',
      maxWidth: '800px',
      margin: '0 auto',
      // This pseudo-element creates the vertical timeline bar
      // In React inline styles, we must use a separate div
    },

    // The vertical line for the timeline
    timelineLine: {
      position: 'absolute',
      left: '50%',
      top: '0',
      bottom: '0',
      width: '4px',
      backgroundColor: '#374151', // gray-700
      marginLeft: '-2px',
      // Note: This line might look odd on mobile.
      // A mobile-first approach would place it on the left.
    },

    // Container for a single timeline item
    timelineItem: {
      padding: '20px 40px',
      position: 'relative',
      width: '50%', // Each item takes half the width
      boxSizing: 'border-box',
    },

    // Timeline item on the LEFT side
    timelineItemLeft: {
      left: 0,
      textAlign: 'right', // Align text to the right
      paddingRight: '50px',
    },

    // Timeline item on the RIGHT side
    timelineItemRight: {
      left: '50%',
      textAlign: 'left', // Align text to the left
      paddingLeft: '50px',
    },

    // The content box for a timeline item
    timelineContent: {
      padding: '24px',
      backgroundColor: '#1f2937', // gray-800
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      transition: 'transform 0.3s ease',
    },

    // The circle on the timeline
    timelineDot: {
      position: 'absolute',
      top: '30px',
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      backgroundColor: '#2563eb', // Accent color
      border: '3px solid #111827', // Match section bg
      zIndex: 1,
    },

    // Dot for LEFT items
    timelineDotLeft: {
      right: '-8px', // Position over the line
    },

    // Dot for RIGHT items
    timelineDotRight: {
      left: '-8px', // Position over the line
    },

    // Degree/Title
    h3: {
      fontSize: '1.4rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '8px',
    },

    // University/School Name
    h4: {
      fontSize: '1.1rem',
      fontWeight: '500',
      color: '#2563eb', // Accent color
      marginBottom: '12px',
    },

    // Year/Date
    pDate: {
      fontSize: '0.95rem',
      color: '#9ca3af', // gray-400
      marginBottom: '12px',
    },

    // Description or CGPA
    pDescription: {
      fontSize: '0.95rem',
      color: '#d1d5db',
      lineHeight: 1.6,
    },

    // --- Media Query for Mobile ---
    // We need to apply different styles for small screens
    '@media (max-width: 768px)': {
      timelineLine: {
        left: '20px', // Move line to the far left
        marginLeft: '0',
      },
      timelineItem: {
        width: '100%', // Full width
        paddingLeft: '60px', // Space for line and dot
        paddingRight: '0',
        textAlign: 'left', // All text left-aligned
      },
      timelineItemLeft: {
        left: '0',
        textAlign: 'left',
        paddingLeft: '60px',
        paddingRight: '0',
      },
      timelineItemRight: {
        left: '0',
        textAlign: 'left',
        paddingLeft: '60px',
      },
      timelineDot: {
        left: '12px', // Position dot over the line
      },
    },
  };

  // --- Hook for Responsive Styles ---
  // This hook checks window width and applies media query styles
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // --- Helper to apply responsive styles ---
  const applyResponsiveStyles = (styleName, ...args) => {
    let style = styles[styleName];
    if (isMobile && styles['@media (max-width: 768px)'][styleName]) {
      style = { ...style, ...styles['@media (max-width: 768px)'][styleName] };
    }
    // Apply specific styles (like left/right)
    args.forEach((arg) => {
      if (arg) {
        style = { ...style, ...styles[arg] };
        if (isMobile && styles['@media (max-width: 768px)'][arg]) {
          style = { ...style, ...styles['@media (max-width: 768px)'][arg] };
        }
      }
    });
    return style;
  };

  // --- Academic Data ---
  const academicData = [
    {
      degree: 'B.Tech in CSE-Artificial Intelligence & Machine Learning',
      institution: 'Qis college of Engineering and Technology, Ongole',
      date: '2022 - 2026',
      description: 'Graduated with a CGPA of 8.10/10.0.',
    },
    {
      degree: 'Board of Intermediate (Class XII)',
      institution: 'Sri Sadhana junior college, Markapur',
      date: '2020-2022',
      description: 'Completed with 75% in the Science stream (Physics, Chemistry, Maths).',
    },
    {
      degree: 'Board of Secondary Education (Class X)',
      institution: 'ZPH School, Tarlupadu',
      date: '2019-2020',
      description: 'Completed with a CGPA of 10.0/10.0.',
    },
  ];

  return (
    <section id="academics" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Academics & Education</h2>

        <div style={applyResponsiveStyles('timelineContainer')}>
          <div style={applyResponsiveStyles('timelineLine')}></div>

          {academicData.map((item, index) => {
            const isRightSide = !isMobile && index % 2 !== 0;
            return (
              <div
                key={index}
                style={applyResponsiveStyles(
                  'timelineItem',
                  isRightSide ? 'timelineItemRight' : 'timelineItemLeft'
                )}
              >
                <div
                  style={applyResponsiveStyles(
                    'timelineDot',
                    isRightSide ? 'timelineDotRight' : 'timelineDotLeft'
                  )}
                ></div>
                <div style={styles.timelineContent}>
                  <h3 style={styles.h3}>{item.degree}</h3>
                  <h4 style={styles.h4}>{item.institution}</h4>
                  <p style={styles.pDate}>{item.date}</p>
                  <p style={styles.pDescription}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
