class Animal {
  speak() {
    return "Animal speaks";
  }
}

class Dog extends Animal {
  speak() {
    return "Dog barks";
  }
}

const d = new Dog();
console.log(d.speak());
