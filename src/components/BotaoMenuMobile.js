import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BotaoMenuMobile.module.css';
import stylesNav from './MobileNavegacao.module.css';

const BotaoMenuMobile = () => {
  function fecharMenu() {
    document
      .getElementById('btnMenuMobile')
      .classList.toggle(`${styles.ativo}`);
    document.getElementById('navMobile').classList.toggle(`${stylesNav.ativo}`);
  }

  document.documentElement.addEventListener('click', clicar);
  function clicar(event) {
    const nav = document.getElementById('navMobileLista');
    const btn = document.getElementById('btnMenuMobile');
    const span = document.getElementById('span');
    if (event.target !== nav && event.target !== btn && event.target !== span)
      fecharMenu();
  }

  return (
    <div className={styles.mobileCtn}>
      <div className={styles.botaoCtn}>
        <button
          className={`${styles.botaoMobile}`}
          id="btnMenuMobile"
          onClick={fecharMenu}
        >
          <span></span>
        </button>
      </div>
      <nav className={stylesNav.navMenuMobile} id="navMobile">
        <ul className={stylesNav.navMenuMobileLista} id="navMobileLista">
          <NavLink to="/" end>
            <li>Home</li>
          </NavLink>

          <NavLink to="notas/minhasnotas">
            <li>Notas</li>
          </NavLink>

          <NavLink to="sobre">
            <li>Sobre</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default BotaoMenuMobile;
