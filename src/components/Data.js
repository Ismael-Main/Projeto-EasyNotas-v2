const Data = () => {
  //Data em que a nota foi salva
  let data = new Date();
  let dia = String(data.getDate()).padStart(2, '0');
  let mes = String(data.getMonth() + 1).padStart(2, '0');
  let ano = data.getFullYear();
  return { dia, mes, ano };
};

export default Data;
