import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let totalTime = 0;


setInterval(() => {
  totalTime++;
  let primero = totalTime % 10;
  let segundo = Math.floor(totalTime / 10) % 10;
  let tercero = Math.floor(totalTime / 100) % 10;
  let cuarto = Math.floor(totalTime / 1000) % 10;
  let quinto = Math.floor(totalTime / 10000) % 10;
  let sexto = Math.floor(totalTime / 100000) % 10;

    
    root.render(<App 
      primero={primero} 
      segundo={segundo}
      tercero={tercero}
      cuarto={cuarto}
      quinto={quinto}
      sexto={sexto}
    />);
  }, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
