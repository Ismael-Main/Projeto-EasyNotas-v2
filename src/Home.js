import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeCtn}>
      <div className={styles.principalCtn}>
        <div className={styles.titulosCtn}>
          <div className={`${styles.divTitulo1} ${styles.divTitulo}`}>
            <h2 className={styles.titulo1}>Crie,</h2>
          </div>
          <div className={`${styles.divTitulo2} ${styles.divTitulo}`}>
            <h2 className={styles.titulo2}>Faça,</h2>
          </div>
          <div className={`${styles.divTitulo3} ${styles.divTitulo}`}>
            <h2 className={styles.titulo3}>Viva.</h2>
          </div>
        </div>
      </div>

      <button className={styles.botaoCriarNota}>
        <Link to="notas/novanota">CRIAR NOTA</Link>
      </button>
    </div>
  );
};

export default Home;
