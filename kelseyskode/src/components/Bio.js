import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Bio() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
        Hello! My name is Kelsey and I'm an aspiring software engineer. I'm currently located in Chicago and I graduated from Georgia State University. I enjoy collaborating with other team members to create and develop unique mobile applications as well as interactive web page designs. My journey as a software engineer is just getting started so feel free to visit my page again to see updated projects I create along the way!
        <p> Fun fact: I studied abroad in three different countries to learn the Spanish language. <strong><abbr title="Pure Life">¡Pura Vida!</abbr></strong></p>

      </div>
    </div>
  );
}

export default Bio;
