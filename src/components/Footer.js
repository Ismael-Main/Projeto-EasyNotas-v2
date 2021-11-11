import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Footer.module.css';

const Footer = () => {
  const { modoNoturno } = useSelector((state) => state.main);

  return (
    <footer
      className={styles.footer}
      style={modoNoturno ? { color: '#E5E4E4' } : { color: '#626262' }}
    >
      <p>EasyNotas v2 By Ismael Borges - 2021 </p>
    </footer>
  );
};

export default Footer;
