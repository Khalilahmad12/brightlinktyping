// Ensure window.fetch has a setter to avoid "Cannot set property fetch of #<Window> which has only a getter"
try {
  const rawFetch = window.fetch;
  let currentFetch = typeof rawFetch === 'function' ? rawFetch.bind(window) : rawFetch;
  Object.defineProperty(window, 'fetch', {
    get: () => currentFetch,
    set: (newVal) => {
      currentFetch = typeof newVal === 'function' ? newVal.bind(window) : newVal;
    },
    configurable: true,
    enumerable: true
  });
} catch (e) {}

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(<App />);
