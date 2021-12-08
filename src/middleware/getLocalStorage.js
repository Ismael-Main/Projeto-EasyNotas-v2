function getLocalStorage() {
  const notasStorage = JSON.parse(window.localStorage.getItem('notas'));
  if (notasStorage !== null || undefined) return notasStorage;
  else return '';
}
export default getLocalStorage;
