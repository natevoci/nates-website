import React from 'react';

import Router from './Router';
import imageBG from './images/MusicBackground.png';

import './app.css';

const App = () => (
  <div style={{
    backgroundImage: `url(${imageBG})`,
    backgroundSize: `100%`,
    minHeight: '100%',
  }}>
    <Router />
  </div>
);

export default App;
