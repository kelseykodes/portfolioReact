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
    <div style={styles.card}>
      <h2 style={styles.heading}>Connect With Me</h2><p class="social-buttons"><a href="/kelseykode-2.0/energy/assets/KELSEY PERKINS Resume.pdf" title=""><span> <i class="fa fa-envelope"></i></span>  Email Me!</a></p>
      <p class="social-buttons"><a href="https://github.com/kelseykodes"><span class="social-round-icon fa-icon"><i class="fa fa-github"></i></span> Follow Me On Github!</a></p>
      <p class="social-buttons"><a href="https://www.linkedin.com/in/kelseyperkinsreporter"><span class="social-round-icon fa-icon"><i class="fa fa-linkedin"></i></span>  Let's Link!</a></p>
    </div>
  );
}

export default Connect;
