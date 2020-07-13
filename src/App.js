import React from 'react';
import './App.scss';
import { Home } from './pages/Home/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
