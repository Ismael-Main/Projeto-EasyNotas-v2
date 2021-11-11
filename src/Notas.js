import React from 'react';
import ToolBar from './components/ToolBar';
import { Route, Routes } from 'react-router-dom';
import CriarNota from './CriarNota.js';
import MinhasNotas from './MinhasNotas';
import styles from './Notas.module.css';
import BuscarNotas from './BuscarNotas';

const Notas = () => {
  return (
    <>
      <ToolBar />
      <div className={styles.NotasCtn}>
        <Routes>
          <Route path="novanota" element={<CriarNota />}></Route>
          <Route path="minhasnotas" element={<MinhasNotas />}></Route>
          <Route path="buscarnotas" element={<BuscarNotas />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Notas;
