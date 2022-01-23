import React from 'react';

export default function Header() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
       <h1>Kelsey's Kode</h1>  
       <h3>Full Stack Web Developer</h3>
    </div>
  );
}
