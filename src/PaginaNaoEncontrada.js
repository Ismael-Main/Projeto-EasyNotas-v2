import React from 'react';
import styles from './PaginaNaoEncontrada.module.css';

const PaginaNaoEncontrada = () => {
  return (
    <div className={styles.erroPagina}>
      <h1>Erro 404 :(</h1>
      <p>Pagina não encontrada - Siga para a Home</p>
    </div>
  );
};

export default PaginaNaoEncontrada;
