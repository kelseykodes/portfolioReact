import React from 'react';
import resume from '../images/resume.png';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

class DownloadLink extends React.Component {
  render() {
      return (
          <a href={this.props.src} download>{this.props.children}</a>
      )
  }
}


class MyComponent extends React.Component {
  render() {
      return (
          <DownloadLink src="./MyDevResume.pdf">Click To Dowload and View!</DownloadLink>
      )
  }
}
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
  pic: {
    crop: {
      unit: '%',
      width: 20,
      aspect: 16 / 9
    }
  },
};
//TODO: Need to adjust photo size of resume and downloadable
function Resume() {
  return (
    <div style={styles.card} id="resume">
      <h2 style={styles.heading}>My Resume</h2>
      <MyComponent />
      <img style={styles.pic}src={ resume } alt="my resume"/>
    </div>
  );
}

export default Resume;