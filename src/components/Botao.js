import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Botao.module.css';

const Botao = ({ url }) => {
  return (
    <Link to={url} className={styles.botaoCriarHome}>
      <button className={styles.botao}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Criar Nota
      </button>
    </Link>
  );
};

export default Botao;
