import React from 'react';
import { NavLink } from 'react-router-dom';
import BotaoMenuMobile from './BotaoMenuMobile';
import styles from './Menulista.module.css';

function MenuList() {
  return (
    <nav className={styles.listaCtn}>
      <ul className={styles.menuLista}>
        <li>
          <NavLink to="/notas/novanota">Criar nota</NavLink>
        </li>
        <li>
          <NavLink to="notas/minhasnotas">Notas</NavLink>
        </li>
        <li>
          <NavLink to="sobre">Sobre</NavLink>
        </li>
      </ul>
      <BotaoMenuMobile />
    </nav>
  );
}

export default MenuList;
