// import React from "react";
// import {createRoot} from 'react-dom/client';
// import App from './app';

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App/>);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';  // Certifique-se de que o caminho do arquivo esteja correto

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
