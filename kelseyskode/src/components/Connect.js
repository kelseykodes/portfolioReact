import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
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

// In Navbar, we can assign a style from an object by using curly braces
function Connect() {
  return (
    <div style={styles.card} id="connect">
      <h2 style={styles.heading}>Connect With Me</h2><p class="social-buttons"><a href="mailto:kelseykodes@yahoo.com"> Email Me!</a></p>
      <p class="social-buttons"><a href="https://github.com/kelseykodes">Follow Me On Github!</a></p>
      <p class="social-buttons"><a href="https://www.linkedin.com/in/kelsey-perkins">Let's Link!</a></p>
    </div>
  );
}
export default Connect;
