class Person {
   name :string;
   age: number;

    constructor(name : string , age : number ) {
    this.name = name;
    this.age = age;
    } 
}

const person = new Person("John" , 20);
console.log(person);

