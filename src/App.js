import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Bio from './components/Bio';
// import ProPreview from './components/ProPreview';
import Education from './components/Education';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Connect from './components/Connect';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Bio />
      {/* <ProPreview /> */}
      <Education />
      <Projects />
      <Resume />
      <Connect /> 
    </div>
  );
}
export default App;