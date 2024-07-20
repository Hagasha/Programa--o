function openFridge(...foods) {
  console.log(...foods);
}
function getFood(...foods) {
    return foods;
}

const food1 = 'Pizza';
const food2 = 'Hamburguer';
const food3 = 'Hotdog';
const food4 = 'Sushi';
const food5 = 'Salad';

// openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);