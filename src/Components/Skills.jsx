import React, { useState } from 'react';

/**
 * A professional Skills component for a personal portfolio.
 * This version uses a dark theme, a card-based grid layout,
 * and fully responsive inline styles (no external libraries).
 */
export default function Skills() {
  // --- Style Objects for Inline Styling ---

  const styles = {
    // The main section container (Dark Mode)
    section: {
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1f2937', // Slightly lighter dark (gray-800)
      color: '#d1d5db', // Light gray text (gray-300)
      fontFamily: 'sans-serif',
      padding: '64px 32px',
    },

    // Main content container
    container: {
      maxWidth: '1100px',
      width: '100%',
      textAlign: 'center',
    },

    // The main heading
    h2: {
      fontSize: 'calc(1.8rem + 1.5vw)',
      fontWeight: '700',
      marginBottom: '16px',
      color: '#ffffff', // White text
      borderBottom: '3px solid #2563eb', // Accent color border
      paddingBottom: '8px',
      display: 'inline-block',
    },

    // Subtitle paragraph
    p: {
      fontSize: 'calc(1rem + 0.2vw)',
      color: '#d1d5db',
      marginBottom: '48px',
      maxWidth: '700px',
      margin: '0 auto 48px auto',
      lineHeight: 1.6,
    },

    // Container for all skill categories
    categoriesContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
    },

    // Category heading
    h3: {
      fontSize: 'calc(1.3rem + 0.5vw)',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '24px',
      textAlign: 'left',
      borderLeft: '4px solid #2563eb',
      paddingLeft: '12px',
    },

    // Grid container for skill cards
    skillsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px', // Reduced gap
      justifyContent: 'center', // Center cards in the grid
    },

    // Base style for an individual skill card
    skillCard: {
      backgroundColor: '#374151', // Medium-dark gray (gray-700)
      color: '#f9fafb', // Very light text (gray-50)
      padding: '20px', // Reduced padding
      borderRadius: '12px',
      textAlign: 'center',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease',
      flex: 1, // Allow cards to grow
      minWidth: '100px', // Reduced minWidth
      maxWidth: '120px', // Reduced maxWidth
      minHeight: '120px', // Reduced minHeight
      display: 'flex', // Use flexbox
      flexDirection: 'column', // Stack content vertically
    },

    // Style for the skill card's icon (simple text for this example)
    skillIcon: {
      fontSize: '2.5rem', // Reduced icon size
      marginBottom: '16px',
      color: '#2563eb', // Accent color
    },

    // Style for the skill card's name
    skillName: {
      fontSize: '1.1rem', // Reduced font size
      fontWeight: '600',
      marginBottom: '16px', // Add margin
    },

    // Wrapper for progress bar and text to push to bottom
    progressWrapper: {
      marginTop: 'auto', // This will push this block to the bottom
      width: '100%',
    },

    // Container for the progress bar
    progressBarContainer: {
      height: '8px',
      width: '100%',
      backgroundColor: '#4b5563', // gray-600
      borderRadius: '4px',
      overflow: 'hidden', // To contain the fill
    },

    // The fill of the progress bar
    progressBarFill: {
      height: '100%',
      backgroundColor: '#2563eb', // Accent color
      borderRadius: '4px',
      transition: 'width 0.5s ease-in-out', // Animate the width
    },

    // Text for percentage
    percentageText: {
      fontSize: '0.85rem', // Reduced font size
      color: '#d1d5db',
      fontWeight: '500',
      marginTop: '8px', // Space between bar and text
    },
  };

  // --- Skill Card Component with Hover State ---
  // We create a small inner component to manage state for each card.
  const SkillCard = ({ name, icon, percentage }) => {
    const [isHovered, setIsHovered] = useState(false);

    const hoverStyle = {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.3)',
      backgroundColor: '#4b5563', // Slightly lighter on hover
    };

    const cardStyle = {
      ...styles.skillCard,
      ...(isHovered ? hoverStyle : {}),
    };

    // Style for the progress bar fill, width based on percentage
    const fillStyle = {
      ...styles.progressBarFill,
      width: `${percentage}%`,
    };

    return (
      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top part */}
        <div>
          <div style={styles.skillIcon}>{icon}</div>
          <span style={styles.skillName}>{name}</span>
        </div>

        {/* Bottom part (progress bar) */}
        <div style={styles.progressWrapper}>
          {" "}
          {/* Added wrapper */}
          <div style={styles.progressBarContainer}>
            <div style={fillStyle}></div>
          </div>
          <div style={styles.percentageText}>{percentage}%</div>
        </div>
      </div>
    );
  };

  // --- Skill Data ---
  // Emojis and specific Unicode characters are used as placeholders for icons.
  const frontendSkills = [
    { name: 'React.js', icon: '⚛️', percentage: 95 },
    { name: 'JavaScript (ES6+)', icon: '📜', percentage: 90 },
    { name: 'HTML5', icon: '🌐', percentage: 98 },
    { name: 'CSS3', icon: '🎨', percentage: 95 },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: '🟢', percentage: 85 },
    { name: 'Express.js', icon: '⚡', percentage: 80 },
    { name: 'MongoDB', icon: '🍃', percentage: 75 },
  ];

  const toolsSkills = [
    { name: 'Git & GitHub', icon: '🐙', percentage: 95 },
    { name: 'Responsive Design', icon: '📱', percentage: 98 },
    { name: 'VS Code', icon: '👨‍💻', percentage: 99 },
  ];

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Skills & Technologies</h2>
        <p style={styles.p}>
          Here are some of the technologies I specialize in and use to build
          modern, high-performance web applications.
        </p>

        <div style={styles.categoriesContainer}>
          {/* Frontend Category */}
          <div>
            <h3 style={styles.h3}>Frontend Development</h3>
            <div style={styles.skillsGrid}>
              {frontendSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          {/* Backend Category */}
          <div>
            <h3 style={styles.h3}>Backend Development</h3>
            <div style={styles.skillsGrid}>
              {backendSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          {/* Tools Category */}
          <div>
            <h3 style={styles.h3}>Tools & Workflow</h3>
            <div style={styles.skillsGrid}>
              {toolsSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
