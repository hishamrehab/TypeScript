function printNumber(item: number , defaultValue :number ) : [number , number] {
    return [item,defaultValue];
}


function printString(item: string , defaultValue :string ) : [string , string] {
    return [item,defaultValue];
}


const num = printNumber(1 , 20);
const str = printString("hello" , "world");
console.log(num);
console.log(str );