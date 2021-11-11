import React from 'react';
import { editarNota } from '../reducers/main';
import { useSelector, useDispatch } from 'react-redux';
import salvarLocalStorage from '../middleware/setLocalStorage';
import styles from './FormEditarNota.module.css';
import icone from '../icons/close.svg';

const FormEditarNota = ({ notaToEdit, SetFormEdit }) => {
  const [titulo, setTitulo] = React.useState(null);
  const [dataCompromisso, setDataCompromisso] = React.useState(null);
  const [horarioCompromisso, setHorarioCompromisso] = React.useState(null);
  const [assunto, setAssunto] = React.useState(null);
  const [cor, setCor] = React.useState('#E3E3E3');

  const [notaEditada, SetNotaEditada] = React.useState('');

  const dispatch = useDispatch();

  const { notas } = useSelector((state) => state.main);

  function handleClick(event) {
    event.preventDefault();

    const id = notaToEdit.id;

    const notaEditadaCorpo = {
      titulo: titulo === null ? notaToEdit.titulo : titulo,
      dataCompromisso:
        dataCompromisso === null ? notaToEdit.dataCompromisso : dataCompromisso,
      horarioCompromisso:
        horarioCompromisso === null
          ? notaToEdit.horarioCompromisso
          : horarioCompromisso,
      id,
      assunto: assunto === null ? notaToEdit.assunto : assunto,
      cor: cor !== notaToEdit.cor ? cor : notaToEdit.cor,
    };

    const arrayNotas = notas.filter((nota) => nota.id !== notaToEdit.id);
    const novaArrayNotas = [...arrayNotas, notaEditadaCorpo];

    dispatch(editarNota(novaArrayNotas));

    salvarLocalStorage(novaArrayNotas);
    SetFormEdit(false);
    SetNotaEditada(null);
  }

  return (
    <div className={styles.formCtn}>
      <div className={styles.formulario}>
        <button
          className={styles.botaoFecharForm}
          onClick={() => {
            SetNotaEditada(null);
            SetFormEdit(false);
          }}
        >
          <img src={icone} alt="Fechar campo de editar nota" />
        </button>
        <h1 className={styles.titulo}>Editar nota</h1>
        <form onSubmit={handleClick} className={styles.form}>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            name="titulo"
            placeholder={notaToEdit.titulo}
            onChange={(event) => {
              setTitulo(event.target.value);
            }}
            maxLength={25}
          />
          <label htmlFor="data">Data</label>
          <input
            type="datetime-local"
            name="data"
            className={styles.data}
            onChange={({ target }) => {
              //data escolhida pelo usuário para o compromisso
              let data = target.value;
              let dia = data.substr(8, 2);
              let mes = data.substr(5, 2);
              let ano = data.substr(0, 4);
              let hora = data.substr(11, 5) + ' hrs';
              let dataFinal = `${dia}/${mes}/${ano}`;

              setDataCompromisso(dataFinal);
              setHorarioCompromisso(hora);
            }}
          />
          <label htmlFor="assunto">Assunto</label>
          <textarea
            type="text"
            name="assunto"
            placeholder={
              notaToEdit.assunto.length > 0
                ? notaToEdit.assunto
                : 'Digite um assunto para editar essa nota'
            }
            onChange={(event) => {
              setAssunto(event.target.value);
            }}
            maxLength={100}
          />
          <div className={styles.coresCtn}>
            <h3 className={styles.tituloCores}>Selecione uma cor</h3>
            <div className={styles.cores}>
              <div className={`${styles.cor1} ${styles.coresDiv}`}>
                <span></span>
                <input
                  type="radio"
                  name="cor"
                  value="#ffff"
                  onChange={({ target }) => setCor(target.value)}
                  defaultChecked
                />
              </div>
              <div className={`${styles.cor2} ${styles.coresDiv}`}>
                <span></span>
                <input
                  type="radio"
                  name="cor"
                  value="#BBC904"
                  onChange={({ target }) => setCor(target.value)}
                />
              </div>
              <div className={`${styles.cor3} ${styles.coresDiv}`}>
                <span></span>
                <input
                  type="radio"
                  name="cor"
                  value="#DC762B"
                  onChange={({ target }) => setCor(target.value)}
                />
              </div>
              <div className={`${styles.cor4} ${styles.coresDiv}`}>
                <span></span>
                <input
                  type="radio"
                  name="cor"
                  value="#C94579"
                  onChange={({ target }) => setCor(target.value)}
                />
              </div>
              <div className={`${styles.cor5} ${styles.coresDiv}`}>
                <span></span>
                <input
                  type="radio"
                  name="cor"
                  value="#0E64F9"
                  onChange={({ target }) => setCor(target.value)}
                />
              </div>
              <div className={`${styles.cor6} ${styles.coresDiv}`}>
                <span></span>
                <input
                  type="radio"
                  name="cor"
                  value="#F9EE0E"
                  onChange={({ target }) => setCor(target.value)}
                />
              </div>
              <div className={`${styles.cor7} ${styles.coresDiv}`}>
                <span></span>
                <input
                  type="radio"
                  name="cor"
                  value="#E20000"
                  onChange={({ target }) => setCor(target.value)}
                />
              </div>
            </div>
          </div>
          <button className={styles.botao}>Confirmar</button>
        </form>
      </div>
    </div>
  );
};

export default FormEditarNota;
