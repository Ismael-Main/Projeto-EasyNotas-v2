import React from 'react';
import styles from './Header.module.css';
import Logo from './Logo';
import MenuList from './MenuLista';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <MenuList />
    </header>
  );
};

export default Header;
