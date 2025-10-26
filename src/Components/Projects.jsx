import React, { useState } from 'react';

/**
 * A professional Projects component for a personal portfolio.
 * This version uses a dark theme, a card-based grid layout,
 * and fully responsive inline styles (no external libraries).
 */
export default function Projects() {
  const styles = {
    section: {
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#111827',
      color: '#d1d5db',
      fontFamily: 'sans-serif',
      padding: '64px 32px',
    },
    container: {
      maxWidth: '1200px',
      width: '100%',
      textAlign: 'center',
    },
    h2: {
      fontSize: 'calc(1.8rem + 1.5vw)',
      fontWeight: '700',
      marginBottom: '16px',
      color: '#ffffff',
      borderBottom: '3px solid #2563eb',
      paddingBottom: '8px',
      display: 'inline-block',
    },
    p: {
      fontSize: 'calc(1rem + 0.2vw)',
      color: '#d1d5db',
      marginBottom: '48px',
      maxWidth: '700px',
      margin: '0 auto 48px auto',
      lineHeight: 1.6,
    },
    projectsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px',
      justifyContent: 'center',
    },
    projectCard: {
      backgroundColor: '#1f2937',
      color: '#f9fafb',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease',
      maxWidth: '380px',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    },
    projectImage: {
      width: '100%',
      height: '220px',
      objectFit: 'cover',
      backgroundColor: '#374151',
    },
    cardContent: {
      padding: '24px',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '12px',
    },
    projectDescription: {
      fontSize: '0.95rem',
      color: '#d1d5db',
      lineHeight: 1.6,
      marginBottom: '16px',
      flexGrow: 1,
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '20px',
    },
    tag: {
      backgroundColor: '#374151',
      color: '#e5e7eb',
      padding: '4px 12px',
      borderRadius: '16px',
      fontSize: '0.8rem',
      fontWeight: '500',
    },
    linksContainer: {
      display: 'flex',
      gap: '12px',
      marginTop: 'auto',
    },
    projectLink: {
      color: '#ffffff',
      backgroundColor: '#2563eb',
      padding: '8px 16px',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.9rem',
      textAlign: 'center',
      transition: 'background-color 0.3s ease',
      flex: 1,
    },
  };

  // --- Project Card Component ---
  const ProjectCard = ({ project }) => {
    const { title, description, tags, imageUrl, codeUrl } = project;
    const [isHovered, setIsHovered] = useState(false);
    const [isCodeHovered, setIsCodeHovered] = useState(false);

    const hoverStyle = {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.3)',
    };

    const cardStyle = {
      ...styles.projectCard,
      ...(isHovered ? hoverStyle : {}),
    };

    const codeLinkStyle = {
      ...styles.projectLink,
      backgroundColor: isCodeHovered ? '#1d4ed8' : '#2563eb',
    };

    return (
      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={imageUrl}
          alt={`${title} project screenshot`}
          style={styles.projectImage}
          onError={(e) => {
            e.target.src = 'https://placehold.co/400x220/1f2937/d1d5db?text=Project+Image';
          }}
        />
        <div style={styles.cardContent}>
          <h3 style={styles.h3}>{title}</h3>
          <p style={styles.projectDescription}>{description}</p>
          <div style={styles.tagsContainer}>
            {tags.map((tag) => (
              <span key={tag} style={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <div style={styles.linksContainer}>
            <a
              href={codeUrl}
              style={codeLinkStyle}
              onMouseEnter={() => setIsCodeHovered(true)}
              onMouseLeave={() => setIsCodeHovered(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    );
  };

  // --- Project Data ---
  const projectData = [
    {
      title: 'Personal Portfolio',
      description:
        'A fully responsive personal portfolio website built from scratch using React.js and advanced inline styling techniques to showcase my projects and skills.',
      tags: ['React.js', 'Inline Styles', 'Responsive Design'],
      imageUrl: './pictures/port.png',
      codeUrl: '#',
    },
    {
      title: 'Qisceet Reclaimithub',
      description:
        'QISCET ReclaimitHub is a simple and user-friendly platform built with HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB that helps students post, find, and reclaim lost or found items on campus.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
      imageUrl: './pictures/lost.png',
      codeUrl: 'https://github.com/akhi45-ak/lost-and-found',
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>My Projects</h2>
        <p style={styles.p}>Check out some of the projects I've been working on.</p>
        <div style={styles.projectsGrid}>
          {projectData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
