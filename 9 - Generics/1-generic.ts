// function printNumber(item: number , defaultValue :number ) : [number , number] {
//     return [item,defaultValue];
// }


// function printString(item: string , defaultValue :string ) : [string , string] {
//     return [item,defaultValue];
// }


// function printBoolean(item: boolean , defaultValue :boolean ) : [boolean , boolean] {
//     return [item,defaultValue];
// }


// const num = printNumber(1 , 20);
// const str = printString("hello" , "world");
// const bool = printBoolean(true , false);
// console.log(num);
// console.log(str);
// console.log(bool);

// -------------------------------------------------------------
function uniqueDataTypesFunc<T>
(item : T, 
    defaultValue : T) : [T , T] {
   return [item , defaultValue];
}

const num = uniqueDataTypesFunc<number>(10 , 20);
console.log("num" , num);
const res = uniqueDataTypesFunc<string>("hello" , "world");
console.log("res" , res);
const bool = uniqueDataTypesFunc<boolean>(true , false);
console.log("bool" , bool);



interface Dog {
    name : string;
    breed : string;
}

const dog1 = uniqueDataTypesFunc<Dog>(
    {name : "Buddy" , breed: "breed"},
    {name : "Default" , breed : "Unknown"}
);
console.log("dog1" , dog1);