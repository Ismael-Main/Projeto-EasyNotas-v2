import React from 'react';
import styles from './ToolBar.module.css';
import IconeCriar from '../icons/novo.png';
import IconeLupa from '../icons/lupa.png';
import IconeNota from '../icons/nota.png';
import { Link } from 'react-router-dom';

const ToolBar = () => {
  return (
    <section>
      <ul className={styles.toolbarCtn}>
        <li>
          <Link to="novanota">
            Nova Nota
            <img src={IconeCriar} alt="criar nota" />
          </Link>
        </li>
        <li>
          <Link to="minhasnotas">
            Minhas Notas <img src={IconeNota} alt="minhas notas" />
          </Link>
        </li>
        <li>
          <Link to="buscarnotas">
            Buscar notas <img src={IconeLupa} alt="buscar notas" />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default ToolBar;
