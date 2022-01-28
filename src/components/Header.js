import React from 'react';
import HeaderImg from '../images/background.png'

const styles = {
  card: {
    margin: 20,
    background: '#d8a5fa',
  },
  header: {
    background: 'white',
    minHeight: 50,
    lineHeight: 3.5,
    margin: 20,
    fontSize: '1.2rem',
    fontStyle: 'garamond',
    color: '#9a74db',
    padding: '0 20px',
    textAlign: 'center'
  },
  pic: {
    crop: {
      unit: '%',
      width: '100vw',
      aspect: 16 / 9,
    }
  },
};
export default function Header() {
//TODO: Center in middle of page
  return (
    <div>
       {/* <h1 style={styles.header}>Kelsey's Kode</h1>  
       <h3 style={styles.header}>Full Stack Web Developer</h3> */}
       <img src={HeaderImg} style={styles.pic.crop} alt="Banner" id="header-img"></img>
    </div>
  );
}