// src/App.js
import React from 'react';
import './App.css';
import LoginRegister from './LoginRegister';

function App() {
  return (
    <body style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/fondo.jpg'})`}}>
        <div className="App">
      <main>
        <LoginRegister />
      </main>
    </div>
    </body>

  );
}

export default App;
