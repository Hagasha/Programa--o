const people = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 30 },
  { name: 'Jim', age: 40 },
  { name: 'Jill', age: 50 },
]
people.sort((a, b) => a.name.localeCompare(b.name)) // para comparar nome se usa essa função

console.log(people)