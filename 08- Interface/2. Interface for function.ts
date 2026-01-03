interface MathOperation {
    (x:number , y : number) : number;
}

const add : MathOperation = (a , b) => a +b;
const subtract : MathOperation = (a , b) => a - b;

console.log(add(2 , 2));
console.log(subtract(10 , 20));

