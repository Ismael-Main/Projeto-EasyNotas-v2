import React from 'react';
import { useSelector } from 'react-redux';
import styles from './logo.module.css';

const Logo = () => {
  const { modoNoturno } = useSelector((state) => state.main);

  return (
    <div
      className={styles.logoCtn}
      style={modoNoturno ? { color: '#fff' } : { color: 'var(--azulNegro)' }}
    >
      <p>Easy Notas</p>
    </div>
  );
};

export default Logo;
