import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { HashRouter } from 'react-router-dom';

const element = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(element);
root.render(<App />);
