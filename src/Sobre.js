import React from 'react';
import ToolBar from './components/ToolBar';
import styles from './Sobre.module.css';
import stylesMain from './StyleMain.module.css';

const Sobre = () => {
  return (
    <>
      <ToolBar />
      <div className={styles.sobreCtn} id="sobreCtn">
        <h1 className={stylesMain.titulo}>Sobre</h1>
        <div className={styles.texto}>
          <p>
            Olá, meu nome é <b>Ismael Borges</b> e este é um pequeno projeto que
            desenvolvi totalmente do zero. Esse aplicativo web foi desenvolvido
            em React.js e Redux.
          </p>
          <p>
            Esse app salva as notas criadas no localstorage do seu navegador,
            senso assim ao menos que o mesmo seja limpo as notas ficaram sempre
            disponíveis.
          </p>
          <p>
            Funcionalidades: <b>Criar, editar e apagar as notas.</b>
          </p>
        </div>
        <div className={styles.contatosCtn}>
          <h1 className={stylesMain.titulo}>Contato</h1>
          <div className={styles.redes}>
            <a
              href="https://www.facebook.com/ismael.borges.507"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="30"
                height="30"
                id="face"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_48_30)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.9456 0C23.6314 0 25 1.36865 25 3.05439V21.9456C25 23.6313 23.6313 25 21.9456 25H16.747V15.5803H19.9989L20.6177 11.5461H16.747V8.92808C16.747 7.82441 17.2876 6.74858 19.0214 6.74858H20.7813V3.31401C20.7813 3.31401 19.1841 3.04146 17.6571 3.04146C14.4692 3.04146 12.3856 4.97353 12.3856 8.47134V11.5461H8.84204V15.5803H12.3856V25H3.05439C1.36865 25 0 23.6313 0 21.9456V3.05439C0 1.36865 1.3686 0 3.05439 0H21.9456V0Z"
                    fill="#646464"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_48_30">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="mailto:ismaelbb26@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="30"
                height="30"
                id="email"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.875 0H3.125C1.39911 0 0 1.39911 0 3.125V21.875C0 23.6009 1.39911 25 3.125 25H21.875C23.6009 25 25 23.6009 25 21.875V3.125C25 1.39911 23.6009 0 21.875 0Z"
                  fill="#646464"
                />
                <rect
                  x="3.5"
                  y="5.5"
                  width="18"
                  height="14"
                  rx="1.5"
                  stroke="white"
                />
                <path
                  d="M4 6.5L10.9362 12.5114C11.2998 12.8265 11.7649 13 12.2461 13H13.1716C13.702 13 14.2107 12.7893 14.5858 12.4142L20 7L20.5 6.5L21 6M4 19L11 12.5M21 19L14 12.5"
                  stroke="white"
                />
              </svg>
            </a>
            <a
              href="http://api.whatsapp.com/send?1=pt_BR&phone=5535984381361"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 25 25"
                fill="none"
                id="whats"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.875 0H3.125C1.39911 0 0 1.39911 0 3.125V21.875C0 23.6009 1.39911 25 3.125 25H21.875C23.6009 25 25 23.6009 25 21.875V3.125C25 1.39911 23.6009 0 21.875 0Z"
                  fill="#646464"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.7344 12.477C22.7344 17.8575 18.3387 22.2192 12.9162 22.2192C11.1946 22.2192 9.57734 21.7791 8.17018 21.0071L2.73438 22.7344L4.50626 17.5072C3.61236 16.0388 3.09763 14.3171 3.09763 12.4769C3.09763 7.09613 7.4934 2.73438 12.9161 2.73438C18.3387 2.73443 22.7344 7.0962 22.7344 12.477ZM12.9162 4.28597C8.36413 4.28597 4.66148 7.9606 4.66148 12.477C4.66148 14.269 5.24565 15.9291 6.23378 17.2793L5.20269 20.3208L8.37484 19.3126C9.6784 20.1683 11.2394 20.6675 12.9161 20.6675C17.4676 20.6675 21.1708 16.9933 21.1708 12.4769C21.1708 7.9606 17.4677 4.28597 12.9162 4.28597V4.28597ZM17.8739 14.7205C17.8134 14.621 17.653 14.5612 17.4127 14.4419C17.1719 14.3226 15.9882 13.7447 15.768 13.6652C15.5471 13.5856 15.3865 13.5456 15.2261 13.7844C15.0659 14.024 14.6047 14.5612 14.464 14.7205C14.3235 14.88 14.1835 14.9 13.9427 14.7805C13.7024 14.6611 12.9266 14.409 12.0073 13.5954C11.2919 12.9624 10.8088 12.1811 10.6684 11.9418C10.5279 11.7028 10.6535 11.5737 10.7739 11.4548C10.8822 11.3474 11.0146 11.1757 11.1351 11.0366C11.2554 10.8969 11.2954 10.7975 11.3755 10.6381C11.4561 10.4787 11.4155 10.3394 11.3556 10.2196C11.2954 10.1005 10.8139 8.92513 10.6134 8.44716C10.4128 7.96919 10.2128 8.04884 10.0721 8.04884C9.93157 8.04884 9.77129 8.02884 9.61058 8.02884C9.45008 8.02884 9.18923 8.08877 8.9688 8.32751C8.7483 8.56667 8.12673 9.14416 8.12673 10.3192C8.12673 11.4944 8.98887 12.6298 9.10937 12.789C9.22958 12.9479 10.7738 15.4376 13.2203 16.3941C15.6677 17.3498 15.6677 17.0313 16.109 16.991C16.5497 16.9516 17.5324 16.4138 17.7334 15.8559C17.9338 15.2984 17.9338 14.82 17.8739 14.7205V14.7205Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sobre;
