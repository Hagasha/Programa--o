function createGame(){
let score = 0;

function addScore(points) {
  score+= points;
  console.log(`+${points} pontos!`);
}
function removeScore(points) {
  score-= points;
  console.log(`-${points} pontos!`);
}
function getScore() {
  return score;
}
return {addScore, removeScore, getScore};
}

const game = createGame();
game.addScore(10);
game.addScore(20);
game.removeScore(5);
console.log(`A pontuação final é de ${game.getScore()} pontos!`); 