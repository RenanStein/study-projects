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
let intervalo = setInterval(refresh, 10000);

if(imgRefresh) {
    function refreshInterval() {
        clearInterval(intervalo);
        intervalo = setInterval(refresh, 10000);
    }

    imgRefresh.addEventListener('click', refreshInterval);
}

}
