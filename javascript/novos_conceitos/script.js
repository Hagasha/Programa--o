const fruits =[{name: "Apple", color: "red", calories: 95},
  {name:"Orange", color: "orange", calories: 45},
  {name:"Banana", color: "yellow", calories: 105},
  {name:"Grape", color: "purple", calories: 45},
  {name:"Pineapple", color: "yellow", calories: 452},
  {name:"Strawberry", color: "red", calories: 45},
];

const calories = fruits.reduce((acc, fruit) => {
  acc[fruit.color] = acc[fruit.color] || 0;
  acc[fruit.color] += fruit.calories;
  return acc;
}, {});

console.log(calories);