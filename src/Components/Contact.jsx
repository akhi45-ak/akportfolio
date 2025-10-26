import React, { useState } from 'react';

/**
 * A professional Contact component for a personal portfolio.
 * This version uses a dark theme, a contact form,
 * and fully responsive inline styles (no external libraries).
 */
export default function Contact() {
  // --- State for Form Inputs ---
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // --- Style Objects for Inline Styling ---

  const styles = {
    // The main section container (Dark Mode)
    section: {
      minHeight: '80vh',
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

    // Main content wrapper (for form and info)
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column', // Default to column
      gap: '40px',
      backgroundColor: '#1f2937', // gray-800
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },

    // Form container
    form: {
      flex: 2, // Take more space
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      textAlign: 'left',
    },

    // Form input field
    input: {
      width: '100%',
      padding: '14px',
      fontSize: '1rem',
      backgroundColor: '#374151', // gray-700
      color: '#f9fafb', // white text
      border: '2px solid #4b5563', // gray-600
      borderRadius: '8px',
      boxSizing: 'border-box', // Include padding in width
      outline: 'none',
      transition: 'border-color 0.3s ease',
    },

    // Textarea field
    textarea: {
      width: '100%',
      padding: '14px',
      fontSize: '1rem',
      backgroundColor: '#374151',
      color: '#f9fafb',
      border: '2px solid #4b5563',
      borderRadius: '8px',
      minHeight: '150px',
      fontFamily: 'sans-serif',
      boxSizing: 'border-box',
      resize: 'vertical',
      outline: 'none',
      transition: 'border-color 0.3s ease',
    },
    
    // Label for inputs
    label: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#d1d5db',
      marginBottom: '-12px', // Pull label closer to input
    },

    // Submit button
    button: {
      padding: '14px 28px',
      backgroundColor: '#2563eb', // blue-600
      color: 'white',
      fontWeight: '600',
      borderRadius: '8px',
      boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.2)',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1.1rem',
      width: '100%', // Full width
    },

    // Contact info container
    contactInfo: {
      flex: 1, // Take less space
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    
    // Individual info card (email, phone, etc.)
    infoCard: {
      backgroundColor: '#374151', // gray-700
      padding: '20px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    
    infoIcon: {
      fontSize: '1.5rem',
      color: '#2563eb', // Accent color
    },
    
    infoTextContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    
    infoTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#ffffff',
    },
    
    infoLink: {
      fontSize: '0.9rem',
      color: '#d1d5db',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },

    // --- Media Query for Desktop ---
    '@media (min-width: 768px)': {
      contentWrapper: {
        flexDirection: 'row', // Side-by-side on desktop
        padding: '48px',
      },
      button: {
        width: 'auto', // Auto width on desktop
        alignSelf: 'flex-start',
      },
    },
  };

  // --- Hook for Responsive Styles ---
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // --- Helper to apply responsive styles ---
  const applyResponsiveStyles = (styleName, ...args) => {
    let style = styles[styleName];
    if (isLargeScreen && styles['@media (min-width: 768px)'][styleName]) {
      style = { ...style, ...styles['@media (min-width: 768px)'][styleName] };
    }
    args.forEach((arg) => {
      if (arg) style = { ...style, ...styles[arg] };
    });
    return style;
  };

  // --- Form Submit Handler ---
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // e.g., send data to a backend or an email service
    console.log({ name, email, message });
    // You would show a success/error message here, not an alert
    setName('');
    setEmail('');
    setMessage('');
  };

  // --- Dynamic Styles ---
  // Style for button hover
  const buttonStyle = {
    ...applyResponsiveStyles('button'),
    backgroundColor: isButtonHovered ? '#1d4ed8' : '#2563eb',
    transform: isButtonHovered ? 'scale(1.02)' : 'scale(1)',
  };
  
  // Style for link hover
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const emailLinkStyle = {
    ...styles.infoLink,
    color: isEmailHovered ? '#ffffff' : '#d1d5db',
    textDecoration: isEmailHovered ? 'underline' : 'none',
  };
  
  // Style for input focus
  const [focus, setFocus] = useState({ name: false, email: false, message: false });
  const inputStyle = (fieldName) => ({
    ...styles.input,
    borderColor: focus[fieldName] ? '#2563eb' : '#4b5563',
  });
  const textareaStyle = {
    ...styles.textarea,
    borderColor: focus.message ? '#2563eb' : '#4b5563',
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Get In Touch</h2>
        <p style={styles.p}>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>

        <div style={applyResponsiveStyles('contentWrapper')}>
          {/* --- Contact Form --- */}
          <form style={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name" style={styles.label}>Full Name</label>
            <input
              type="text"
              id="name"
              style={inputStyle('name')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setFocus(prev => ({...prev, name: true}))}
              onBlur={() => setFocus(prev => ({...prev, name: false}))}
              required
            />
            
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              style={inputStyle('email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocus(prev => ({...prev, email: true}))}
              onBlur={() => setFocus(prev => ({...prev, email: false}))}
              required
            />
            
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea
              id="message"
              style={textareaStyle}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setFocus(prev => ({...prev, message: true}))}
              onBlur={() => setFocus(prev => ({...prev, message: false}))}
              required
            />
            
            <button
              type="submit"
              style={buttonStyle}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              Send Message
            </button>
          </form>

          {/* --- Contact Info --- */}
          <div style={styles.contactInfo}>
            <div style={styles.infoCard}>
              <span style={styles.infoIcon}>📧</span>
              <div style={styles.infoTextContainer}>
                <span style={styles.infoTitle}>Email</span>
                <a 
                  href="mailto:akhilpulukuri594@gmail.com" 
                  style={emailLinkStyle}
                  onMouseEnter={() => setIsEmailHovered(true)}
                  onMouseLeave={() => setIsEmailHovered(false)}
                >
                  akhilpulukuri594@gmail.com
                </a>
              </div>
            </div>
            
            <div style={styles.infoCard}>
              <span style={styles.infoIcon}>📍</span>
              <div style={styles.infoTextContainer}>
                <span style={styles.infoTitle}>Location</span>
                <span style={styles.infoLink} as="span"> 
                  Ongole,Andhra Pradesh,India
                </span>
              </div>
            </div>
            
             <div style={styles.infoCard}>
              <span style={styles.infoIcon}>🔗</span>
              <div style={styles.infoTextContainer}>
                <span style={styles.infoTitle}>LinkedIn</span>
                {/* You would replace '#' with your actual LinkedIn URL */}
                <a 
                  href="https://www.linkedin.com/in/pulukuri-akhil/" 
                  style={emailLinkStyle} // Re-using style for simplicity
                  onMouseEnter={() => setIsEmailHovered(true)}
                  onMouseLeave={() => setIsEmailHovered(false)}
                >
                  https://www.linkedin.com/in/pulukuri-akhil/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}