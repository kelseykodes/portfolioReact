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
//TODO: Need to add photo of resume and downloadable
function Resume() {
  return (
    <div style={styles.card} id="resume">
      <h2 style={styles.heading}>My Resume</h2>
    </div>
  );
}

export default Resume;
