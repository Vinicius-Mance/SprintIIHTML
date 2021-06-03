// validação login
try {
  let inputName = document.getElementById("input-name");
  let inputPassword = document.getElementById('input-password');
  document.getElementById("login-form").onsubmit = function(e) { e.preventDefault(); validateLogin(inputName.value,inputPassword.value);}
} catch (e) {}

//função validação login
function validateLogin(namePar,passwordPar) {

  let users = [
                {"name":"Heitor","password":"88116"},
                {"name":"José","password":"89295"},
                {"name":"Leandro","password":"88768"},
                {"name":"Vinicius","password":"87985"},
                {"name":"Ronqui","password":"cocacola"},
                {"name":"Alexandre","password":"pepsi"}
              ];

  let mensagemErro;

  for (var i = 0; i < users.length; i++) {

    if (users[i].name == namePar && users[i].password == passwordPar) {
      return  window.location.href="portal.html";
    } else if (users[i].name != namePar) {
      mensagemErro = "Nome de usuário incorreto";
    } else {
      mensagemErro = "Senha incorreta";
      break;
    }
  }
  alert(mensagemErro);
}

// validação formulário cpf
try {
  document.getElementById("cpf-form").onsubmit = function(e) {
    let nome = document.getElementById('nome');
    let cpf = document.getElementById('cpf');
    let idade = document.getElementById('idade');
    let sexo = document.getElementById('sexo');
    let email = document.getElementById('email');
    let telefone = document.getElementById('telefone');
    let cep = document.getElementById('cep');
    let logradouro = document.getElementById('logradouro');
    let numeroCasa = document.getElementById('numeroCasa');
    let complemento = document.getElementById('complemento');
    let bairro = document.getElementById('bairro');
    let cidade = document.getElementById('cidade');
    let estado = document.getElementById('estado');
    let pais = document.getElementById('pais');
    e.preventDefault();
    validateCpfForm(nome.value, cpf.value, idade.value, sexo.value, email.value, telefone.value, cep.value, logradouro.value, numeroCasa.value, complemento.value, bairro.value, cidade.value, estado.value, pais.value);
  }
} catch (e) {}

// função para testar e validar cpf
function testarCpf(cpf) {
  let soma = 0;
  let resto;

  if (!cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999") {
      return false;
  }

  for (var i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
  }

  if (resto == 10 || resto == 11) {
    resto = 0;
  }

  if (resto != parseInt(cpf.substring(9, 10))) {
    return false;
  }

  soma = 0;

  for (var i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
  }

  if (resto == 10 || resto == 11) {
    resto = 0;
  }

  if (resto == parseInt(cpf.substring(10, 11))) {
    return true;
  } else {
    return false;
  }

}

// validação do formulário cpf
function validateCpfForm (nome, cpf, idade, sexo, email, telefone, cep, logradouro, numeroCasa, complemento, bairro, cidade, estado, pais) {

let mensagemErro = "Você não preencheu os seguintes campos:"+"\r\n";
let erro = 0;
let cpfValido = true;

  if (nome == "" || nome == null) {
      mensagemErro = mensagemErro+"nome"+"\r\n";
      erro++;
  }

  if (cpf == "" || cpf == null) {
      mensagemErro = mensagemErro+"cpf"+"\r\n";
      erro++;
  } else if(!testarCpf(cpf)) {
      cpfValido = false;
      alert('Cpf inválido');
  }

  if (idade == "" || idade == null) {
      mensagemErro = mensagemErro+"idade"+"\r\n";
      erro++;
  }

  if (sexo == "" || sexo == null) {
      mensagemErro = mensagemErro+"sexo"+"\r\n";
      erro++;
  }

  if (email == "" || email == null) {
      mensagemErro = mensagemErro+"email"+"\r\n";
      erro++;
  }

  if (telefone == "" || telefone == null) {
      mensagemErro = mensagemErro+"telefone"+"\r\n";
      erro++;
  }

  if (cep == "" || cep == null) {
      mensagemErro = mensagemErro+"cep"+"\r\n";
      erro++;
  }

  if (logradouro == "" || logradouro == null) {
      mensagemErro = mensagemErro+"logradouro"+"\r\n";
      erro++;
  }

  if (numeroCasa == "" || numeroCasa == null) {
      mensagemErro = mensagemErro+"numeroCasa"+"\r\n";
      erro++;
  }

  if (bairro == "" || bairro == null) {
      mensagemErro = mensagemErro+"bairro"+"\r\n";
      erro++;
  }

  if (cidade == "" || cidade == null) {
      mensagemErro = mensagemErro+"cidade"+"\r\n";
      erro++;
  }

  if (estado == "" || estado == null) {
      mensagemErro = mensagemErro+"estado"+"\r\n";
      erro++;
  }

  if (pais == "" || pais == null) {
      mensagemErro = mensagemErro+"pais"+"\r\n";
      erro++;
  }

  if (erro == 0 && cpfValido) {
    let usuario = [nome, cpf, idade, sexo, email, telefone, cep, logradouro, numeroCasa, complemento, bairro, cidade, estado, pais];
        alert("Cadastro feito com sucesso!"+"\r\n"+
              "Suas informações: "+"\r\n"+
              "Nome: "+nome+"\r\n"+
              "CPF: "+cpf+"\r\n"+
              "Idade: "+idade+"\r\n"+
              "Sexo: "+sexo+"\r\n"+
              "Email: "+email+"\r\n"+
              "Telefone: "+telefone+"\r\n"+
              "CEP: "+cep+"\r\n"+
              "Logradouro: "+logradouro+"\r\n"+
              "Número: "+numeroCasa+"\r\n"+
              "Complemento: "+complemento+"\r\n"+
              "Bairro: "+bairro+"\r\n"+
              "Cidade: "+cidade+"\r\n"+
              "Estado: "+estado+"\r\n"+
              "País: "+pais+"\r\n");
    return  window.location.href="index.html";
  } else if (erro != 0 && cpfValido) {
    alert(mensagemErro);
  }
}

try {
  document.getElementById("cnpj-form").onsubmit = function(e) {
    let nome = document.getElementById('nome');
    let cnpj = document.getElementById('cnpj');
    let idadeEmpresa = document.getElementById('idadeEmpresa');
    let descricao = document.getElementById('descricao');
    let email = document.getElementById('email');
    let telefone = document.getElementById('telefone');
    let cep = document.getElementById('cep');
    let logradouro = document.getElementById('logradouro');
    let numeroCasa = document.getElementById('numeroCasa');
    let complemento = document.getElementById('complemento');
    let bairro = document.getElementById('bairro');
    let cidade = document.getElementById('cidade');
    let estado = document.getElementById('estado');
    let pais = document.getElementById('pais');
    e.preventDefault();
    validateCnpjForm(nome.value, cnpj.value, idadeEmpresa.value, descricao.value, email.value, telefone.value, cep.value, logradouro.value, numeroEndereco.value, complemento.value, bairro.value, cidade.value, estado.value, pais.value);
  }
} catch (e) {}

function validateCnpjForm(nome, cnpj, idadeEmpresa, descricao, email, telefone, cep, logradouro, numeroEndereco, complemento, bairro, cidade, estado, pais) {

let mensagemErro = "Você não preencheu os seguintes campos:"+"\r\n";
let erro = 0;

  if (nome == "" || nome == null) {
      mensagemErro = mensagemErro+"nome"+"\r\n";
      erro++;
  }

  if (cnpj == "" || cnpj == null) {
      mensagemErro = mensagemErro+"cnpj"+"\r\n";
      erro++;
  }

  if (idadeEmpresa == "" || idadeEmpresa == null) {
      mensagemErro = mensagemErro+"idade"+"\r\n";
      erro++;
  }

  if (descricao == "" || descricao == null) {
      mensagemErro = mensagemErro+"descrição"+"\r\n";
      erro++;
  }

  if (email == "" || email == null) {
      mensagemErro = mensagemErro+"email"+"\r\n";
      erro++;
  }

  if (telefone == "" || telefone == null) {
      mensagemErro = mensagemErro+"telefone"+"\r\n";
      erro++;
  }

  if (cep == "" || cep == null) {
      mensagemErro = mensagemErro+"cep"+"\r\n";
      erro++;
  }

  if (logradouro == "" || logradouro == null) {
      mensagemErro = mensagemErro+"logradouro"+"\r\n";
      erro++;
  }

  if (numeroEndereco == "" || numeroEndereco == null) {
      mensagemErro = mensagemErro+"número"+"\r\n";
      erro++;
  }

  if (bairro == "" || bairro == null) {
      mensagemErro = mensagemErro+"bairro"+"\r\n";
      erro++;
  }

  if (cidade == "" || cidade == null) {
      mensagemErro = mensagemErro+"cidade"+"\r\n";
      erro++;
  }

  if (estado == "" || estado == null) {
      mensagemErro = mensagemErro+"estado"+"\r\n";
      erro++;
  }

  if (pais == "" || pais == null) {
      mensagemErro = mensagemErro+"pais"+"\r\n";
      erro++;
  }

  if (erro == 0) {
    let usuario = [nome, cnpj, idadeEmpresa, descricao, email, telefone, cep, logradouro, numeroEndereco, complemento, bairro, cidade, estado, pais];
    alert("Cadastro feito com sucesso!"+"\r\n"+
          "Suas informações: "+"\r\n"+
          "Nome: "+nome+"\r\n"+
          "CNPJ: "+cnpj+"\r\n"+
          "Idade da empresa: "+idadeEmpresa+"\r\n"+
          "Descrição: "+descricao+"\r\n"+
          "Email: "+email+"\r\n"+
          "Telefone: "+telefone+"\r\n"+
          "CEP: "+cep+"\r\n"+
          "Logradouro: "+logradouro+"\r\n"+
          "Número: "+numeroEndereco+"\r\n"+
          "Complemento: "+complemento+"\r\n"+
          "Bairro: "+bairro+"\r\n"+
          "Cidade: "+cidade+"\r\n"+
          "Estado: "+estado+"\r\n"+
          "País: "+pais+"\r\n");
    return  window.location.href="index.html";
  } else {
    alert(mensagemErro);
  }

}

function mensagemBemVindo(){
  alert('Bem-vindo ao portal');
}
