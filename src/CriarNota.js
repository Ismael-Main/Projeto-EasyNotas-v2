import React from 'react';
import { criarNota } from './reducers/main';
import { useSelector, useDispatch } from 'react-redux';
import salvarLocalStorage from './middleware/setLocalStorage';
import store from './store/ConfigureStore';
import styles from './CriarNota.module.css';
import { useNavigate } from 'react-router-dom';

const CriarNota = () => {
  const [titulo, setTitulo] = React.useState('');
  const [dataCompromisso, setDataCompromisso] = React.useState('');
  const [horarioCompromisso, setHorarioCompromisso] = React.useState('');
  const [assunto, setAssunto] = React.useState('');
  const [cor, setCor] = React.useState('#E3E3E3');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notas } = useSelector((state) => state.main);

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
    };
    dispatch(criarNota(nota));

    const state = store.getState();
    salvarLocalStorage(state.main.notas);
    navigate('/notas/minhasnotas');
  }

  return (
    <div className={styles.formCtn}>
      <h1 className={styles.titulo}>Crie sua nota</h1>
      <form onSubmit={handleClick} className={styles.form}>
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          name="titulo"
          placeholder="Digite o título da nota"
          onChange={(event) => setTitulo(event.target.value)}
          maxLength={25}
          required
        />
        <label htmlFor="data">Data</label>
        <input
          type="datetime-local"
          name="data"
          className={styles.data}
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
        <label htmlFor="assunto">Assunto</label>
        <textarea
          type="text"
          name="assunto"
          placeholder="Digite um assunto para a nota"
          onChange={(event) => setAssunto(event.target.value)}
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
        <button className={styles.botao}>Criar nota</button>
      </form>
    </div>
  );
};

export default CriarNota;
