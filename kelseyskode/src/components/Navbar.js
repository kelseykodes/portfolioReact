import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
};
// TODO: Try get links to span instead of vertical
function Navbar() {
  return (
    <div style={styles.card}>
       <ul style={styles.heading}>
        <a href="#bio"><p>About Me</p></a>
        <a href="#projects"><p>Projects</p></a>
        <a href="#resume"><p>Resume</p></a>
        <a href="#connect"><p>Connect With Me</p></a>
      </ul>
      {/* <div style={styles.heading}>About Me </div> */}
    </div>
  );
}

export default Navbar;