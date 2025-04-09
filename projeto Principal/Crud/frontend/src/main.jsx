import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importa o BrowserRouter
import './css/Main.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>,
);
