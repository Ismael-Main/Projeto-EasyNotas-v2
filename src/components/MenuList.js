import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BotaoMenuMobile from './BotaoMenuMobile';
import styles from './Menulista.module.css';

function MenuList() {
  const { modoNoturno } = useSelector((state) => state.main);

  return (
    <nav className={styles.listaCtn}>
      <ul className={styles.menuLista}>
        <li>
          <NavLink
            to="/"
            end
            activeStyle={
              modoNoturno
                ? { color: 'var(--verdeClaro)' }
                : { color: 'var(--azulEscuro)' }
            }
            style={
              modoNoturno ? { color: '#fff' } : { color: 'var(--azulNegro)' }
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="notas/minhasnotas"
            activeStyle={
              modoNoturno
                ? { color: 'var(--verdeClaro)' }
                : { color: 'var(--azulEscuro)' }
            }
            style={
              modoNoturno ? { color: '#fff' } : { color: 'var(--azulNegro)' }
            }
          >
            Notas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="sobre"
            activeStyle={
              modoNoturno
                ? { color: 'var(--verdeClaro)' }
                : { color: 'var(--azulEscuro)' }
            }
            style={
              modoNoturno ? { color: '#fff' } : { color: 'var(--azulNegro)' }
            }
          >
            Sobre
          </NavLink>
        </li>
      </ul>
      <BotaoMenuMobile />
    </nav>
  );
}

export default MenuList;
