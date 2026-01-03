class Dog {
    bark() : void {
        console.log("hello")
    }
}

class Cat{
    mwo() :void {
        console.log("mwo");
    }
}


function animalSound(animal: Dog | Cat) : void {
 if(animal instanceof Dog  ) {
    animal.bark();
 } else {
    animal.mwo();
 }
}


const myDog = new Dog();
const myCat= new Cat();

animalSound(myDog);
animalSound(myCat); 