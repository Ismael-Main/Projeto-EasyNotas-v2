import React from 'react';
import styles from './Aviso.module.css';
import icone from '../icons/alerta.png';
import store from '../store/ConfigureStore';
import { useDispatch } from 'react-redux';
import { deletarNota } from '../reducers/main';
import salvarLocalStorage from '../middleware/setLocalStorage';

const Aviso = ({ idNota, setAviso, buscar }) => {
  const dispatch = useDispatch();
  let arrayNotas = JSON.parse(localStorage.getItem('notas'));

  function handleClickDeletar() {
    const arrayFiltrada = arrayNotas.filter((nota) => nota.id !== idNota);
    dispatch(deletarNota(arrayFiltrada));
    const state = store.getState();
    salvarLocalStorage(state.main.notas);
    setAviso(false);
    if (buscar) buscar(); //sempre que excluir uma nota precisamos refazer a busca para recarregar o componente e as notas excluidas sumam
  }

  function handleCancelar() {
    setAviso(false);
  }

  return (
    <div className={styles.avisoCtn}>
      <div className={styles.aviso}>
        <div className={styles.titulo}>
          <svg
            height="20px"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="orange"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" x2="12" y1="9" y2="13" />
            <line x1="12" x2="12" y1="17" y2="17" />
          </svg>
          <h1>Aviso</h1>
        </div>
        <p>Tem certeza que deseja deletar essa nota de forma permanente?</p>
        <div className={styles.botoesCtn}>
          <button className={styles.btnApagar} onClick={handleClickDeletar}>
            Apagar
          </button>
          <button className={styles.btnCancelar} onClick={handleCancelar}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aviso;
