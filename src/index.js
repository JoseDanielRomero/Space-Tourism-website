import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import DestinationPage from './routes/DestinationPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/destination' element={<DestinationPage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
