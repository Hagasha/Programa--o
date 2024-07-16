const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Tente adivinhar o número entre ${minNum} e ${maxNum}: `);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Por favor, insira um número válido.");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Por favor, insira um número entre ${minNum} e ${maxNum}.`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Muito baixo. Tente novamente.");
        }
        else if(guess > answer){
            window.alert("Muito alto. Tente novamente.");
        }
        else{
            window.alert(`Parabéns! Você acertou em ${attempts} tentativas.`);
            running = false;
        }
    }
}