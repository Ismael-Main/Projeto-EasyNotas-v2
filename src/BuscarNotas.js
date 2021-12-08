import React from 'react';
import styles from './NotasContainer.module.css';
import stylesNotas from './NotasBox.module.css';
import stylesErro from '../src/ErroNotas.module.css';
import stylesToolBar from './BuscarToolBar.module.css';
import Aviso from './components/Aviso';
import { useSelector } from 'react-redux';
import FormEditarNota from './components/FormEditarNota';

const BuscarNotas = () => {
  const [resultadoBusca, setResultadoBusca] = React.useState();
  const [busca, setBusca] = React.useState('');
  const [aviso, setAviso] = React.useState(false);
  const [id, setId] = React.useState(null);
  const [formEdit, SetFormEdit] = React.useState(false);
  const [notaToEdit, setNotaToEdit] = React.useState(null);
  const { notas } = useSelector((state) => state.main);
  const arrayLocalStorage = JSON.parse(localStorage.getItem('notas'));

  const buscar = React.useCallback(() => {
    if (arrayLocalStorage !== null) {
      const resultadoBusca = arrayLocalStorage.filter(
        (nota) => nota.titulo === busca,
      );
      setResultadoBusca(resultadoBusca);
    }
  }, [busca, arrayLocalStorage]);

  React.useEffect(() => {
    buscar();
    setResultadoBusca('');
  }, [notas]);

  function abrirNota() {
    let div = document.querySelector('.nota-ativo > div');
    div.classList.add('aberta');
    div.style.display = 'block';
  }

  function fecharNota() {
    let notaAberta = document.querySelector('.aberta');
    notaAberta.style.display = 'none';
    notaAberta.classList.remove('aberta');
  }

  return (
    <>
      {formEdit !== true && (
        <div className={stylesToolBar.buscarBar}>
          <input
            type="text"
            placeholder="Digite o título da nota"
            onChange={({ target }) => setBusca(target.value)}
          />
          <span></span>
          <button onClick={buscar}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9375 18.75C15.2522 18.75 18.75 15.2522 18.75 10.9375C18.75 6.62278 15.2522 3.125 10.9375 3.125C6.62278 3.125 3.125 6.62278 3.125 10.9375C3.125 15.2522 6.62278 18.75 10.9375 18.75Z"
                stroke="#696969"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.875 21.875L16.4583 16.4583"
                stroke="#696969"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      {resultadoBusca && resultadoBusca.length === 0 && (
        <p className={stylesErro.erro}>
          Nenhuma nota encontrada tente novamente
        </p>
      )}

      {formEdit !== true && resultadoBusca && resultadoBusca.length !== 0 && (
        <div className={styles.notasEncontradasCtn}>
          <div className={styles.notasEncontradas}>
            {resultadoBusca !== null &&
              resultadoBusca.map((nota, index) => (
                <div
                  key={index}
                  id="nota"
                  className={stylesNotas.nota}
                  style={{ border: '2px solid', borderColor: nota.cor }}
                >
                  <i>
                    <p className={stylesNotas.dataCompromissoTitulo}>
                      Em: {nota.dataCompromisso}
                    </p>
                  </i>

                  <div>
                    <h1 className={stylesNotas.tituloNota}>{nota.titulo}</h1>

                    <button
                      className={stylesNotas.botaoVer}
                      onClick={(event) => {
                        event.target.parentNode.classList.add('nota-ativo');
                        abrirNota();
                        event.target.parentNode.classList.remove('nota-ativo');
                      }}
                    >
                      Ver mais
                    </button>
                    {/* conteudo ver mais */}
                    <div
                      className={stylesNotas.conteudo}
                      style={{ border: '2px solid', borderColor: nota.cor }}
                    >
                      <div>
                        <button
                          className={stylesNotas.botaoFechar}
                          onClick={fecharNota}
                        >
                          <svg
                            height="22px"
                            width="22px"
                            id="Layer_1"
                            version="1.1"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            fill="#4D4D4D"
                          >
                            <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
                          </svg>
                        </button>
                      </div>

                      <h1 className={stylesNotas.titulo}>{nota.titulo}</h1>

                      <div className={`${stylesNotas.horarioCompromisso}`}>
                        <h3>Horário {nota.horarioCompromisso}</h3>
                      </div>

                      <div className={stylesNotas.datasContainer}>
                        <div className={`${stylesNotas.datas}`}>
                          <h3>Evento em {nota.dataCompromisso}</h3>
                        </div>
                        <div className={`${stylesNotas.datas}`}>
                          <h3>Criada em {nota.dataCriacao}</h3>
                        </div>
                      </div>
                      {nota.assunto.length > 0 && (
                        <div className={stylesNotas.assuntoConteudo}>
                          <span>{nota.assunto}</span>
                        </div>
                      )}

                      <div className={stylesNotas.botoesCtn}>
                        <button
                          className={stylesNotas.botaoEditar}
                          onClick={() => {
                            setAviso(true);
                            setId(nota.id);
                            fecharNota();
                          }}
                        >
                          <svg
                            id="Layer_1"
                            version="1.1"
                            viewBox="0 0 512 512"
                            height="25px"
                            width="32px"
                            xmlSpace="preserve"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnslink="http://www.w3.org/1999/xlink"
                            fill="#4D4D4D"
                          >
                            <path d="M341,128V99c0-19.1-14.5-35-34.5-35H205.4C185.5,64,171,79.9,171,99v29H80v32h9.2c0,0,5.4,0.6,8.2,3.4c2.8,2.8,3.9,9,3.9,9  l19,241.7c1.5,29.4,1.5,33.9,36,33.9h199.4c34.5,0,34.5-4.4,36-33.8l19-241.6c0,0,1.1-6.3,3.9-9.1c2.8-2.8,8.2-3.4,8.2-3.4h9.2v-32  h-91V128z M192,99c0-9.6,7.8-15,17.7-15h91.7c9.9,0,18.6,5.5,18.6,15v29H192V99z M183.5,384l-10.3-192h20.3L204,384H183.5z   M267.1,384h-22V192h22V384z M328.7,384h-20.4l10.5-192h20.3L328.7,384z" />
                          </svg>
                        </button>
                        <button
                          className={stylesNotas.botaoApagar}
                          onClick={() => {
                            SetFormEdit(true);
                            setNotaToEdit(nota);
                            fecharNota();
                          }}
                        >
                          <svg
                            enableBackground="new 0 0 32 32"
                            height="25px"
                            id="svg2"
                            version="1.1"
                            viewBox="0 0 32 32"
                            width="32px"
                            xmlSpace="preserve"
                            fill="#4D4D4D"
                          >
                            <g id="background">
                              <rect fill="none" height="32" width="32" />
                            </g>
                            <g id="notes_x5F_edit">
                              <path d="M24,12H8v2h15h1V12z M28,15.518V4H4v24h11.518c1.614,2.411,4.361,3.999,7.482,4c4.971-0.002,8.998-4.029,9-9   C31.999,19.879,30.411,17.132,28,15.518z M15.517,18c-0.412,0.616-0.743,1.289-0.994,2H8v2h6.058C14.022,22.329,14,22.661,14,23   c0,1.054,0.19,2.061,0.523,3H6V6h20v8.523C25.061,14.19,24.054,14,23,14c-2.143,0-4.107,0.751-5.652,2H8v2H15.517z M23,29.883   c-3.801-0.009-6.876-3.084-6.885-6.883c0.009-3.801,3.084-6.876,6.885-6.884c3.799,0.008,6.874,3.083,6.883,6.884   C29.874,26.799,26.799,29.874,23,29.883z" />
                              <polygon points="22,27 19,27 19,24  " />
                              <rect
                                height="4.243"
                                transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 56.5269 20.5858)"
                                width="7.071"
                                x="20.464"
                                y="19.879"
                              />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      {formEdit && (
        <FormEditarNota notaToEdit={notaToEdit} SetFormEdit={SetFormEdit} />
      )}

      {aviso && <Aviso idNota={id} setAviso={setAviso} />}
    </>
  );
};

export default BuscarNotas;
