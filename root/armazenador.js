window.onload = () => {
  // carrega o ultimo identificador de usuário usado
  tiposenha1.value = localStorage.getItem('tiposenha1');
  tiposenha2.value = localStorage.getItem('tiposenha2');
  tiposenha3.value = localStorage.getItem('tiposenha3');
  senha1.value = localStorage.getItem('senha1');
  senha2.value = localStorage.getItem('senha2');
  senha3.value = localStorage.getItem('senha3');

  // loga o usuário e registra o seu identificador
  login.onsubmit = (evento) => {
      localStorage.setItem('tiposenha1', tiposenha1.value);
      localStorage.setItem('senha1', senha1.value);
      localStorage.setItem('tiposenha2', tiposenha2.value);
      localStorage.setItem('senha2', senha2.value);
      localStorage.setItem('tiposenha3', tiposenha3.value);
      localStorage.setItem('senha3', senha3.value);
      alert(`Senhas Cadastradas.`);
      evento.preventDefault();
  };
  apagarTudo.onsubmit = (evento) => {
    localStorage.clear();
    alert(`As senhas foram apagadas.`)
    document.location.reload(true);
    evento.preventDefault();
  };
  apagarPrimeiro.onsubmit = (evento) => {
    localStorage.removeItem('tiposenha1');
    localStorage.removeItem('senha1');
    alert(`Primeiro campo foi apagado.`);
    document.location.reload(true);
    evento.preventDefault();
  };
  apagarSegundo.onsubmit = (evento) => {
    localStorage.removeItem('tiposenha2');
    localStorage.removeItem('senha2');
    alert(`Segundo campo foi apagado.`);
    document.location.reload(true);
    evento.preventDefault();
  };
  apagarTerceiro.onsubmit = (evento) => {
    localStorage.removeItem('tiposenha3');
    localStorage.removeItem('senha3');
    alert(`Terceiro campo foi apagado.`);
    document.location.reload(true);
    evento.preventDefault();
  };
};