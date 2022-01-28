import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: '#white'
  },
  content: {
    background: '#d8a5fa',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
    display: 'flex',
  },
};
// TODO: Try get links to span instead of vertical
function Navbar() {
  return (
    <div style={styles.card}>
       <ul style={styles.content}>
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
{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav> */}