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
import salvarLocalStorage from './middleware/setLocalStorage';

function App() {
  const { modoNoturno } = useSelector((state) => state.main);
  let arrayNotas = JSON.parse(localStorage.getItem('notas'));

  console.log('teste');

  React.useEffect(() => {
    if (arrayNotas === undefined) salvarLocalStorage([]);
  }, [arrayNotas]);

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
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
