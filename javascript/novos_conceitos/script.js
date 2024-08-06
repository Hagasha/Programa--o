// atribui elementos de arranjo para variáveis

const colors = ["red", "green", "blue", "black", "white"];

const[firsColor, secondColor, thirdColor, ...restColors] = colors;
console.log(firsColor); // red
console.log(secondColor); // green
console.log(thirdColor); // blue
console.log(restColors); // ['black', 'white']