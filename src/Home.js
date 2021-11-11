import React from 'react';
import styles from './Home.module.css';
import Botao from './components/Botao';

const Home = () => {
  return (
    <div className={styles.homeCtn}>
      <div className={styles.bannerCtn}>
        <div className={styles.titulosCtn}>
          <div className={styles.titulos}>
            <div className={styles.titulo1}>
              <h3>Anote,</h3>
            </div>
            <div className={styles.titulo2}>
              <h2>Faça,</h2>
            </div>
            <div className={styles.titulo3}>
              <h1>Viva.</h1>
            </div>
          </div>
          <div className={styles.botaoCriarHomeCtn}>
            <Botao url="notas/novanota" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
