import React from 'react';
import styles from './MinhasNotas.module.css';
import stylesNotas from './NotasBox.module.css';
import stylesErro from '../src/ErroNotas.module.css';
import iconeFechar from './icons/close.svg';
import iconeEditar from './icons/editar2.svg';
import Aviso from './components/Aviso';
import FormEditarNota from './components/FormEditarNota';

const MinhasNotas = () => {
  const [aviso, setAviso] = React.useState(false);
  const [formEdit, SetFormEdit] = React.useState(false);
  const [id, setId] = React.useState(null);
  const [notaToEdit, setNotaToEdit] = React.useState(null);

  let arrayNotas = JSON.parse(localStorage.getItem('notas'));

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
      <div className={styles.minhasNotasCtn}>
        {arrayNotas && arrayNotas.length === 0 && (
          <p className={stylesErro.erro}>Nenhuma nota criada até o momento</p>
        )}
        {formEdit !== true && (
          <div className={styles.totalNotas}>
            {arrayNotas && arrayNotas.length > 0 && (
              <span>Total de notas: {arrayNotas.length}</span>
            )}
          </div>
        )}
        {formEdit !== true && arrayNotas && arrayNotas.length !== 0 && (
          <div className={styles.notasEncontradasCtn}>
            <div className={styles.notasEncontradas}>
              {arrayNotas !== null &&
                arrayNotas.map((nota, index) => (
                  <div
                    key={index}
                    id="nota"
                    className={stylesNotas.nota}
                    style={{ border: '2px solid', borderColor: nota.cor }}
                  >
                    <i>
                      <p className={stylesNotas.dataCompromissoTitulo}>
                        Evento: {nota.dataCompromisso}
                      </p>
                    </i>

                    <div>
                      {nota.titulo.length > 17 ? (
                        <h1
                          style={{ marginTop: '17px', marginBottom: '9px' }}
                          className={stylesNotas.tituloNota}
                        >
                          {nota.titulo}
                        </h1>
                      ) : (
                        <h1 className={stylesNotas.tituloNota}>
                          {nota.titulo}
                        </h1>
                      )}

                      <button
                        className={stylesNotas.botaoVer}
                        onClick={(event) => {
                          event.target.parentNode.classList.add('nota-ativo');
                          abrirNota();
                          event.target.parentNode.classList.remove(
                            'nota-ativo',
                          );
                        }}
                      >
                        Ver mais
                      </button>

                      <div
                        className={stylesNotas.conteudo}
                        style={{ border: '2px solid', borderColor: nota.cor }}
                      >
                        <button
                          className={stylesNotas.botaoEditar}
                          onClick={() => {
                            SetFormEdit(true);
                            setNotaToEdit(nota);
                            fecharNota();
                          }}
                        >
                          <img alt="botão editar nota" src={iconeEditar}></img>
                        </button>
                        <button
                          className={stylesNotas.botaoFechar}
                          onClick={fecharNota}
                        >
                          <img alt="botão fechar nota" src={iconeFechar}></img>
                        </button>
                        {nota.titulo.length > 14 ? (
                          <h1
                            style={{ fontSize: '18px', marginTop: '2rem' }}
                            className={stylesNotas.titulo}
                          >
                            {nota.titulo}
                          </h1>
                        ) : (
                          <h1 className={stylesNotas.titulo}>{nota.titulo}</h1>
                        )}
                        <p className={stylesNotas.dataCompromissoConteudo}>
                          Data: {nota.dataCompromisso}
                        </p>
                        {nota.assunto.length > 0 && (
                          <div className={stylesNotas.assuntoConteudo}>
                            <span>{nota.assunto}</span>
                          </div>
                        )}
                        <button
                          className={stylesNotas.botaoApagar}
                          onClick={() => {
                            setAviso(true);
                            setId(nota.id);
                            fecharNota();
                          }}
                        >
                          Apagar
                        </button>
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
      </div>

      {aviso && <Aviso idNota={id} setAviso={setAviso} />}
    </>
  );
};

export default MinhasNotas;
