import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ativarModoNoturno, desativarModoNoturno } from '../reducers/main';
import styles from './BotaoNoturno.module.css';

const BotaoNoturno = () => {
  const { modoNoturno } = useSelector((state) => state.main);

  const dispatch = useDispatch();

  function handleClick() {
    if (modoNoturno === false) {
      dispatch(ativarModoNoturno());
    } else {
      dispatch(desativarModoNoturno());
    }
  }

  return (
    <div className={styles.bntContainer}>
      <svg
        height="30px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="30px"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill={modoNoturno ? '#FFE68B' : '#000'}
        color="#000"
      >
        <g>
          <g>
            <path d="M343.1,315c-1.8,0.1-3.5,0.1-5.3,0.1c-29.1,0-56.5-11.3-77.1-31.9c-20.6-20.6-31.9-48-31.9-77.1    c0-16.6,3.7-32.6,10.6-47.1c3.1-6.4,6.8-12.5,11.1-18.2c-7.6,0.8-14.9,2.4-22,4.6c-46.8,14.8-80.7,58.5-80.7,110.2    c0,63.8,51.7,115.5,115.5,115.5c35.3,0,66.8-15.8,88-40.7c4.8-5.7,9.2-11.9,12.8-18.5C357.3,313.6,350.3,314.7,343.1,315z     M263.3,355.1c-54.9,0-99.5-44.6-99.5-99.5c0-39.1,22.6-72.9,55.4-89.2c-4.2,12.5-6.4,25.8-6.4,39.7c0,65.9,51,119.9,115.6,124.7    C311,346,288.2,355.1,263.3,355.1z" />
          </g>
        </g>
      </svg>
      <div className={styles.bntDiv}>
        <input
          className={styles.teste}
          type="checkbox"
          name=""
          id=""
          onChange={handleClick}
        />
      </div>
    </div>
  );
};

export default BotaoNoturno;
