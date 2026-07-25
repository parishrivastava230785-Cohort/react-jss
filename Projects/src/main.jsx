import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App.jsx';
// 1. Import your ContextProvider
import { ContextProvider } from './context/MyContext.jsx'; 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* 2. Properly wrap the App component */}
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);