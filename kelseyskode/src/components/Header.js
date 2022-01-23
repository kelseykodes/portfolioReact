import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  header: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'red',
    padding: '0 20px',
  },
};
export default function Header() {

  return (
    <div>
       <h1 style={styles.header}>Kelsey's Kode</h1>  
       <h3 style={styles.header}>Full Stack Web Developer</h3>
    </div>
  );
}
