class Person{
  constructor(name, age, ...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}



class Address{
  constructor(street, city, zip, country){
    this.street = street;
    this.city = city;
    this.zip = zip;
    this.country = country;
  }
}

const person = new Person('John', 30, '123 Main St', 'New York', '10001', 'USA');
const person2 = new Person('Jane', 25, '123 Main St', 'New York', '10001', 'USA');
const person3 = new Person('Doe', 35, '123 ruin St', 'Los Angeles', '12311', 'USA');

console.log(person3.address.zip);