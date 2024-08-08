const fruits =[{name: "Apple", color: "red", calories: 95},
  {name:"Orange", color: "orange", calories: 45},
  {name:"Banana", color: "yellow", calories: 105},
  {name:"Grape", color: "purple", calories: 45},
  {name:"Pineapple", color: "yellow", calories: 452},
  {name:"Strawberry", color: "red", calories: 45},
];

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
