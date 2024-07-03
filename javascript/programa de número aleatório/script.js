const meubotao = document.getElementById('meubotao');
const minhalabel = document.getElementById('minhalabel');
const min = 1;
const max = 100;
let randomNum;

meubotao.onclick = function() {
    randomNum = Math.floor(Math.random() * max) + min;
    minhalabel.textContent = randomNum;
}