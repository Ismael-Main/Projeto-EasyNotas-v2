import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './BotaoMenuMobile.module.css';
import stylesNav from './NavMenuMobile.module.css';

const BotaoMenuMobile = () => {
  const [menuMob, setMenuMob] = React.useState(false);
  const { modoNoturno } = useSelector((state) => state.main);
  const botao = document.getElementById('btnMenuMobile');

  if (modoNoturno === true && botao) botao.classList.add(`${styles.noturno}`);
  if (modoNoturno === false && botao)
    botao.classList.remove(`${styles.noturno}`);

  function handleClick() {
    if (menuMob === false) abrirMenu();
    else if (menuMob === true) fecharMenu();
  }

  function abrirMenu() {
    document.getElementById('btnMenuMobile').classList.add(`${styles.ativo}`);
    document.getElementById('navMobile').classList.add(`${stylesNav.ativo}`);
    setMenuMob(true);
  }
  function fecharMenu() {
    document
      .getElementById('btnMenuMobile')
      .classList.remove(`${styles.ativo}`);
    document.getElementById('navMobile').classList.remove(`${stylesNav.ativo}`);
    setMenuMob(false);
  }

  React.useEffect(() => fecharMenu(), []);

  function clicarOutSide() {
    document.documentElement.addEventListener('click', clicar);
    function clicar(event) {
      const nav = document.getElementById('navMobileList');
      const btn = document.getElementById('btnMenuMobile');
      const span = document.getElementById('span');
      if (event.target !== nav && event.target !== btn && event.target !== span)
        fecharMenu();
    }
  }

  return (
    <div className={styles.mobileCtn}>
      <button
        className={`${styles.botaoMenuMobile}`}
        id="btnMenuMobile"
        onClick={(event) => {
          handleClick();
          clicarOutSide(event.target);
        }}
      >
        <span id="span"></span>
      </button>
      <nav className={stylesNav.navMenuMobile} id="navMobile">
        <ul className={stylesNav.navMenuMobileList} id="navMobileList">
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
