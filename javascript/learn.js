const meutexto = document.getElementById('meutexto');
const meuenvio = document.getElementById('meuenvio');
const meuresultado = document.getElementById('meuresultado');
let age = 0;

meuenvio.onclick = function(){
    age = meutexto.value;
    age = Number(age);

    if (age >= 100) {
    meuresultado.textContent = "Você é um centenário!";
    }
    else if (age == 0) {
    meuresultado.textContent = "Você acabou de nascer, não pode acessar o site!";
    }
    else if (age >= 18) {
    meuresultado.textContent = "Você pode acessar o site!";
    }
    else if(age < 0) {
    meuresultado.textContent = "Sua idade não pode ser negativa!";
    }
    else {  
    meuresultado.textContent = "Você deve ter mais de 18 anos para acessar o site!";
    }
}