    
function reajuste(){
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    const resultado = document.getElementById('resultado');
    resultado.value = parseFloat(valor1) * ((100+parseFloat(valor2))/100);
    document.getElementById('resultado').innerText = resultado;
}
function limpar(){
    document.getElementById('valor2').value = "";
    document.getElementById('valor1').value = "";
    document.getElementById('resultado').value = "";
}
const btnReajuste = document.getElementById('btnReajuste');
btnReajuste.addEventListener("click",reajuste);
const btnlimpar = document.getElementById('limpar');
btnlimpar.addEventListener("click",limpar)