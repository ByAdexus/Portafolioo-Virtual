import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Ajusta el path según tu estructura de carpetas
import Routes from './Components/Routes'; // Ajusta el path según donde ubiques el componente de rutas
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
