export default function initFormularioApi(){
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
  event.preventDefault();

  let cepFormatado = cepInput.value;

  fetch('https://viacep.com.br/ws/' + cepFormatado + '/json/')
  .then(response => {
    response.json().then(j => {
    nomeOutput.innerText = nomeInput.value;
    cepOutput.innerText = j.cep;
    logradouro.innerText = j.logradouro;
    bairro.innerHTML = j.bairro;
    cidade.innerText = j.localidade;
    estado.innerText = j.estado;
    })
  })
}

button.addEventListener('click', enviarFormulario);
console.log(nomeInput)
}

