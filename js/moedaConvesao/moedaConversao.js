export default function moedaConversao(){
const spanMoeda = document.querySelector('[data-moeda="real"]');
const imgRefresh = document.querySelector('[data-refresh]');


function refresh(){
fetch('https://blockchain.info/ticker')
.then(response => response.json())
.then(m => {
    console.log(m.BRL)
    spanMoeda.innerText = 'R$ ' + m.BRL.buy;
})
}

refresh();
let tempo = 1000;
let intervalo = setInterval(refresh, tempo);

if(imgRefresh) {
    function refreshInterval() {
        clearInterval(intervalo);
        imgRefresh.classList.add('girar');
        intervalo = setInterval(refresh, tempo);

        function removeClass(){
            imgRefresh.classList.remove('girar');
        }
        setTimeout(removeClass, 500);
    }

    imgRefresh.addEventListener('click', refreshInterval);
}


const pFrase = document.querySelector('[data-frase]');

function loadingFrase(){
fetch('https://api.chucknorris.io/jokes/random')
.then(response => response.json())
.then(r => {
    console.log(r)
    pFrase.innerText = r.value;
})
}

loadingFrase();
setInterval(loadingFrase, 10000);
}
