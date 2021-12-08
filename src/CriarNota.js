import React from 'react';
import { criarNota } from './reducers/main';
import { useSelector, useDispatch } from 'react-redux';
import salvarLocalStorage from './middleware/setLocalStorage';
import store from './store/ConfigureStore';
import styles from './Formulario.module.css';
import stylesMain from './StyleMain.module.css';
import { useNavigate } from 'react-router-dom';
import salvarData from './components/SalvarData';

const CriarNota = () => {
  const [titulo, setTitulo] = React.useState('');
  const [dataCompromisso, setDataCompromisso] = React.useState('');
  const [horarioCompromisso, setHorarioCompromisso] = React.useState('');
  const [assunto, setAssunto] = React.useState('');
  const [cor, setCor] = React.useState('#E3E3E3');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notas } = useSelector((state) => state.main);
  const dataCriacao = salvarData();

  function handleClick(event) {
    event.preventDefault();

    const id = notas.length + 1;

    const nota = {
      titulo, //lembrando que podemos escrever assim quando a propriedade tem o mesmo nome do valor, aqui  por exemplo é titulo:titulo
      dataCompromisso,
      horarioCompromisso,
      assunto,
      id,
      cor,
      dataCriacao,
    };
    dispatch(criarNota(nota));

    const state = store.getState();
    salvarLocalStorage(state.main.notas);
    navigate('/notas/minhasnotas');
  }

  return (
    <div className={styles.formCtn}>
      <button
        className={styles.botaoFecharForm}
        onClick={() => {
          navigate('/notas/minhasnotas');
        }}
      >
        <svg
          height="27px"
          width="27px"
          id="Layer_1"
          style={{ EnableBackground: 'new 0, 0, 512, 512' }}
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          fill="#4D4D4D"
        >
          <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
        </svg>
      </button>
      <h1 className={stylesMain.titulo}>Criar nota</h1>
      <form onSubmit={handleClick} className={styles.form}>
        <input
          className={styles.campos}
          type="text"
          name="titulo"
          placeholder="Título da nota"
          onChange={(event) => setTitulo(event.target.value)}
          maxLength={24}
          required
        />

        <input
          className={styles.campos}
          type="datetime-local"
          name="data"
          required
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

        <input
          className={styles.campos}
          type="text"
          name="assunto"
          placeholder="Assunto da nota"
          onChange={(event) => setAssunto(event.target.value)}
          maxLength={100}
        />
        <div className={styles.coresCtn}>
          <div className={styles.tituloCtn}>
            <h3 className={styles.tituloCores}>Selecione uma cor</h3>
            <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 320c0 35.38 28.62 64 64 64h64v64c0 35.38 28.62 64 64 64s64-28.62 64-64v-64h64c35.38 0 64-28.62 64-64V288H0V320zM192 424c13.25 0 24 10.75 24 24s-10.75 24-24 24S168 461.3 168 448S178.8 424 192 424zM352 0h-128l-32 64L160 0H128L96 64L64 0H32C14.38 0 0 14.38 0 32v224h384V32C384 14.38 369.6 0 352 0z" />
            </svg>
          </div>
          <span
            className={styles.amostra}
            style={{
              transition: '0.4s',
              borderBottomColor: cor,
              borderRightColor: cor,
            }}
          ></span>

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
        <button className={styles.botao}>Criar nota</button>
      </form>
    </div>
  );
};

export default CriarNota;
