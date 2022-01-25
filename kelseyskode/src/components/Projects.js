import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  headingOne: {
    background: '#0fdba2',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  headingTwo: {
    background: '#c22410',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  headingThree: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
};
//TODO: Add project app preview images and list technologies used
function Projects() {
  return (
    <div style={styles.card} id="projects">
      <a href="https://evening-earth-70019.herokuapp.com/">
      <h3 style={styles.headingOne}>PlanIt!</h3>
      </a>
      <p>Create the party of your dreams!</p>
      <a href="https://kelseykodes.github.io/Gymder/">
      <h3 style={styles.headingTwo}>Gymder App</h3>
      </a>
      <p>Locate the best gyms in the Metro-Atlanta area!</p>
      <a href="https://kelseykodes.github.io/workday-schedule/">
      <h3 style={styles.headingThree}>Weekday Scheduler</h3>
      </a>
      <p>Peronsal planner for your busy schedule!</p>
    </div>
  );
}

export default Projects;
