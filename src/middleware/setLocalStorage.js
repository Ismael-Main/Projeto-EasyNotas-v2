function salvarLocalStorage(notas) {
  window.localStorage.setItem('notas', JSON.stringify(notas));
}
export default salvarLocalStorage;
