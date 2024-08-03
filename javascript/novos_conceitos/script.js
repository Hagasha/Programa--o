class Animal{
    alive = true;

    eat(){
        console.log(`${this.name} está comendo...`);
    }
    sleep(){
        console.log(`${this.name} está dormindo...`);
    }
}

class Dog extends Animal{
    name = 'Cachorro';
    swim(){
        console.log(`${this.name} está nadando...`);
    }
}

class Cat extends Animal{
    name = 'Gato';
    climb(){
        console.log(`${this.name} está escalando...`);
    }
}

class Bird extends Animal{
    name = 'Pássaro';
    fly(){
        console.log(`${this.name} está voando...`);
    }
}

const dog = new Dog();
const cat = new Cat();
const bird = new Bird();

console.log(dog.alive);
dog.eat();
dog.sleep();
dog.swim();

console.log(cat.alive);
cat.eat();
cat.sleep();
cat.climb();

console.log(bird.alive);
bird.eat();
bird.sleep();
bird.fly();
