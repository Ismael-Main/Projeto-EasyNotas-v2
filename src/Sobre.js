import React from 'react';
import styles from './Sobre.module.css';
import emailicon from './icons/emailStd.png';
import whatsicon from './icons/whatsApp.png';

const Sobre = () => {
  return (
    <div className={styles.sobreCtn} id="sobreCtn">
      <h1>Sobre</h1>
      <div className={styles.info}>
        <p>
          Esse é EazyNotas v2.0, um aplicativo web feito usando a tecnologia
          React.js e Redux. O EazyNotas permite a criação de notas que ficam
          salvas no storage do navegador, assim elas ficaram lá guardadas até
          que o cache do navegador ser limpo, por isso tome cuidado com isso.
          Esse é uma aplicativo web criado por mim Ismael Borges, um
          desenvolvedor web iniciante. Esse aplicativo foi feito do zero
          totalmente por mim, com o objetivo de mostrar meu trabalho e
          aperfeiçoar os meus conhecimentos em React.js e UI/UX design. Espero
          que gostem!
        </p>
      </div>
      <div className={styles.contatosCtn}>
        <h1>Contato</h1>
        <div className={styles.contatos}>
          <span>
            <img src={emailicon} alt="Email" />
            ismaelbb26@gmail.com
          </span>
          <span>
            <img src={whatsicon} alt="Email" />
            +55 (35) 98438-3618
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
