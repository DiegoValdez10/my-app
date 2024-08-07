import React from 'react';
import './App.css';
import Inicio from '../src/Inicio/Inicio.js'

import ReactDOM from 'react-dom/client';

function App() {  
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Inicio />
    </React.StrictMode>
  );
}

export default App;
