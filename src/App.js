import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Home from './Home';
import Notas from './Notas';
//import PaginaNaoEncontrada from './PaginaNaoEncontrada';
import Sobre from './Sobre';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';

function App() {
  const { modoNoturno } = useSelector((state) => state.main);

  if (modoNoturno === true) {
    document.body.classList.add('noturno');
  } else {
    document.body.classList.remove('noturno');
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="notas/*" element={<Notas />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="*" element={<Home />} />
          {/*<Route path="*" element={<PaginaNaoEncontrada />} />*/}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
