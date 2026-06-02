export default function InfoDetails() {
  import React, { useState } from 'react';

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Show information if the user hovers with a mouse OR targets it via keyboard Tab key
  const showInfo = isHovered || isFocused;

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.triggerZone,
          backgroundColor: showInfo ? '#f43f5e' : '#ffffff', // Flashes pink when active
          color: showInfo ? '#ffffff' : '#000000',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        tabIndex='0' // Lets keyboard users navigate to it using the Tab key
        aria-describedby='accessibility-instructions'
      >
        [ ACCESSIBILITY INFO & NAVIGATION GUIDE ]
      </div>

      {/* The Informational Box layout */}
      <div
        id='accessibility-instructions'
        role='tooltip'
        aria-hidden={!showInfo}
        style={{
          ...styles.infoBox,
          opacity: showInfo ? 1 : 0,
          transform: showInfo ? 'translateY(0px)' : 'translateY(10px)',
          pointerEvents: showInfo ? 'auto' : 'none', // Prevents clicking invisible items
        }}
      >
        <div style={styles.badge}>SYSTEM_INPUT_MAP</div>
        <h3 style={styles.header}>KEYBOARD & INTERACTION CONTROLS:</h3>
        <ul style={styles.list}>
          <li>
            <strong style={styles.key}>TAB</strong> : Cycles forward through
            categories and confirmation options.
          </li>
          <li>
            <strong style={styles.key}>SHIFT + TAB</strong> : Cycles backward
            through previous options.
          </li>
          <li>
            <strong style={styles.key}>SPACEBAR</strong> : Toggles checkboxes on
            or off.
          </li>
          <li>
            <strong style={styles.key}>ENTER</strong> : Fires the submission
            buttons immediately.
          </li>
        </ul>
      </div>
    </div>
  );
}

// Brutalist Style Tokens
const styles = {
  container: {
    maxWidth: '650px',
    margin: '20px auto',
    fontFamily: '"Courier New", Courier, monospace, sans-serif',
  },
  triggerZone: {
    padding: '16px',
    border: '4px solid #000000',
    fontWeight: '900',
    fontSize: '1rem',
    textAlign: 'center',
    cursor: 'help', // Changes mouse cursor to a question mark icon
    boxShadow: '4px 4px 0px 0px #000000',
    outline: 'none', // Removed to let our custom background handle focus states
    transition: 'all 0.15s ease-in-out',
  },
  infoBox: {
    position: 'relative',
    marginTop: '16px',
    padding: '24px',
    backgroundColor: '#e0f2fe', // Stark Sky Blue color block
    border: '4px solid #000000',
    boxShadow: '6px 6px 0px 0px #000000',
    transition: 'opacity 0.2s ease, transform 0.2s ease',
  },
  badge: {
    position: 'absolute',
    top: '-14px',
    left: '15px',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '2px 8px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },
  header: {
    margin: '0 0 12px 0',
    fontSize: '1.1rem',
    color: '#000000',
  },
  list: {
    margin: 0,
    paddingLeft: '20px',
    lineHeight: '1.8',
    color: '#000000',
    fontSize: '0.9rem',
  },
  key: {
    backgroundColor: '#ffffff',
    border: '2px solid #000000',
    padding: '1px 6px',
    boxShadow: '2px 2px 0px 0px #000000',
    fontSize: '0.85rem',
  },
};
