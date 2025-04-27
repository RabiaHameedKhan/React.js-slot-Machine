import React from 'react';
import ReactDOM from 'react-dom/client';   // correct way
import './index.css';
import App from './App';

// NEW WAY
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

