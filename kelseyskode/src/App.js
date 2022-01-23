// import React from 'react';
// import Portfolio from './components/Portfolio';
// // We import our Welcome component from our components folder so that we can eventually return it.
// // import Welcome from './components/Portfolio';

// // Inside our App component, we have a return method that contains all the JSX we want to render to the screen.
// // In this example, we have a parent `div` that references the Welcome component that we imported at the top.
// export default function App() {
//   return (
//     <div>
//       <Portfolio />
//     </div>
//   );
// }

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