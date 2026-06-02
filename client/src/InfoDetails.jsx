import React, { useState } from 'react';

export default function InfoDetails() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const showInfo = isHovered || isFocused;

  return (
    <div style={styles.fixedWrapper}>
      {/* 1. Circular "i" Info Trigger */}
      <button
        style={{
          ...styles.iconTrigger,
          backgroundColor: showInfo ? '#f43f5e' : '#ffffff', // Flashes pink on hover/focus
          color: showInfo ? '#ffffff' : '#000000',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-describedby='accessibility-instructions'
        aria-label='Accessibility Info Guide'
      >
        i
      </button>

      {/* 2. Floating Dropdown Information Box */}
      <div
        id='accessibility-instructions'
        role='tooltip'
        aria-hidden={!showInfo}
        style={{
          ...styles.infoBox,
          opacity: showInfo ? 1 : 0,
          display: showInfo ? 'block' : 'none',
          transform: showInfo ? 'translateY(0px)' : 'translateY(-10px)',
        }}
      >
        <div style={styles.badge}>MORE INFO</div>
        {/* <h3 style={styles.header}>KEYBOARD & INTERACTION CONTROLS:</h3> */}
        <ul style={styles.list}>
          <li>
            <strong style={styles.key}>SHARE</strong> : Share your skills with
            the community!
          </li>

          <li>
            <strong style={styles.key}>NEED</strong> : What help would you like?
          </li>
        </ul>
      </div>
    </div>
  );
}

// Brutalist Floating Tokens
const styles = {
  fixedWrapper: {
    position: 'fixed', // Pin elements directly to the viewport layer
    top: '25px', // Spacing from the top edge
    right: '25px', // Spacing from the right edge
    zIndex: 9999, // Ensure it floats cleanly on top of all underlying elements
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    fontFamily: '"Courier New", Courier, monospace, sans-serif',
  },
  iconTrigger: {
    width: '45px',
    height: '45px',
    borderRadius: '50%', // Forms a perfect circle matching geometric constraints
    border: '4px solid #000000',
    fontSize: '1.5rem',
    fontWeight: '900',
    fontFamily: '"Georgia", serif', // Gives the 'i' an editorial, clean appearance
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'help',
    boxShadow: '4px 4px 0px 0px #000000',
    outline: 'none',
    transition: 'all 0.1s ease-in-out',
    padding: 0,
  },
  infoBox: {
    position: 'absolute',
    top: '55px', // Sits cleanly directly underneath the circular button
    right: '0px',
    width: '320px',
    padding: '20px',
    backgroundColor: '#e0f2fe',
    border: '4px solid #000000',
    boxShadow: '6px 6px 0px 0px #000000',
    transition: 'opacity 0.15s ease, transform 0.15s ease',
  },
  badge: {
    position: 'absolute',
    top: '-14px',
    left: '15px',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '2px 8px',
    fontSize: '0.7rem',
    fontWeight: 'bold',
  },
  header: {
    margin: '0 0 10px 0',
    fontSize: '0.85rem',
    color: '#000000',
    lineHeight: '1.3',
  },
  list: {
    margin: 0,
    paddingLeft: '15px',
    lineHeight: '1.6',
    color: '#000000',
    fontSize: '0.8rem',
  },
  key: {
    backgroundColor: '#ffffff',
    border: '2px solid #000000',
    padding: '1px 4px',
    boxShadow: '1px 1px 0px 0px #000000',
    fontSize: '0.75rem',
  },
};
