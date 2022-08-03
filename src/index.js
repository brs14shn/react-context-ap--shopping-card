import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardContextProvider from './context/CardContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CardContextProvider>
     <App />
    </CardContextProvider>
    
  
);

