import getLocalStorage from '../middleware/getLocalStorage';
const CRIAR_NOTA = 'nota/CRIAR_NOTA';
const DELETAR_NOTA = 'nota/DELETAR_NOTA';
const EDITAR_NOTA = 'nota/EDITAR_NOTA';
const ATIVAR_AVISO = 'nota/ATIVAR_AVISO';
const ATIVAR_MODONOTURNO = 'nota/ATIVAR_MODONOTURNO';
const DESATIVAR_MODONOTURNO = 'nota/DESATIVAR_MODONOTURNO';

export const criarNota = (payload) => ({ type: CRIAR_NOTA, payload: payload });
export const deletarNota = (payload) => ({
  type: DELETAR_NOTA,
  payload: payload,
});
export const editarNota = (payload) => ({
  type: EDITAR_NOTA,
  payload: payload,
});
export const ativarPermissao = () => ({
  type: ATIVAR_AVISO,
});
export const ativarModoNoturno = () => ({
  type: ATIVAR_MODONOTURNO,
});
export const desativarModoNoturno = () => ({
  type: DESATIVAR_MODONOTURNO,
});

const estadoInicial = {
  modoNoturno: false,
  notas: [...getLocalStorage()],
};

export default function reducerPrincipal(state = estadoInicial, action) {
  switch (action.type) {
    case CRIAR_NOTA:
      return {
        ...state,
        notas: [...state.notas, action.payload],
      };

    case DELETAR_NOTA:
      return { ...state, notas: action.payload };

    case EDITAR_NOTA:
      return { ...state, notas: action.payload };

    case ATIVAR_MODONOTURNO:
      return { ...state, modoNoturno: true };

    case DESATIVAR_MODONOTURNO:
      return { ...state, modoNoturno: false };

    default:
      return state;
  }
}
