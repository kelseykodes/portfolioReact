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
function Projects() {
  return (
    <div style={styles.card}>
      <h3 style={styles.heading}>PlanIt!</h3>
      <p>Create the party of your dreams!</p>
      <h3 style={styles.heading}>Gymder App</h3>
      <p>Locate the best gyms in the Metro-Atlanta area!</p>
      <h3 style={styles.heading}>Weekday Scheduler</h3>
      <p>Peronsal planner for your busy schedule!</p>
    </div>
  );
}

export default Projects;