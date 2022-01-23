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

// TODO: Spice up styling
function Education() {
  return (
    <div style={styles.card}>
      <small class="date">2022-2021</small>
         <h3 class="h5 date-title">Full Stack Web Certificate</h3>
         <p>Georgia Institute of Technology</p>
         <small class="date">2019-2017</small>
          <h3 class="h5 date-title">Journalism Bachelor's Degree</h3>
          <p>Georgia State University</p>
          <small class="date">2021</small>
          <h3 class="h5 date-title">English Teacher Certificate</h3>
          <p>International TEFL Academy </p> 
      {/* <div style={styles.heading}>Home</div> */}
    </div>
  );
}

export default Education;