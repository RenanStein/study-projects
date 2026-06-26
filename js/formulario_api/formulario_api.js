export default function initFormularioApi(){

}


const button = document.querySelector('[data-button]');
const nomeInput = document.querySelector('[data-nome="input"]');
const cepInput = document.querySelector('[data-cep="input"]');
const nomeOutput = document.querySelector('[data-nome="output"]');
const cepOutput = document.querySelector('[data-cep="output"]');
const logradouro = document.querySelector('[data-logradouro]');
const bairro = document.querySelector('[data-bairro]');
const cidade = document.querySelector('[data-cidade]');
const estado = document.querySelector('[data-estado]');

let dados = [];

function enviarFormulario(){
  const dadosFormulario = new objetoDados(nomeInput.value, cepInput.value);
  dados.push(dadosFormulario);

  let cepFormatado = cepInput.value;

  fetch('https://viacep.com.br/ws/' + cepFormatado + '/json/')
  .then(response => {
    response.json().then(j => {
      console.log(j)
      console.log(j.estado)
    })
  })
}


function objetoDados(nome, cep){
  this.nome = nome;
  this.cep = cep;
}

button.addEventListener('click', enviarFormulario);
console.log(nomeInput)

