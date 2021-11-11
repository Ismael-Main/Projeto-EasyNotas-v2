import React from 'react';
import BotaoNoturno from './BotaoNoturno';
import styles from './header.module.css';
import Logo from './Logo';
import MenuList from './MenuList';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <BotaoNoturno />
      <MenuList />
    </header>
  );
};

export default Header;
