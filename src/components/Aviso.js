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
          <img src={icone} alt="icone alerta" />
          <h1>Aviso</h1>
        </div>
        <p>Tem certeza que deseja deletar essa nota de forma permanente?</p>
        <div>
          <button className={styles.btnCancelar} onClick={handleCancelar}>
            Cancelar
          </button>
          <button className={styles.btnApagar} onClick={handleClickDeletar}>
            Apagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aviso;
