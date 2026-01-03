function getRandomkeyValuePair<T>(obj :{[key : string]: T}): {
    key: string;
    value: T
}{
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)]
    return { key: randKey , value : obj[randKey]}
}


const stringObject = { a : "apple" , b : "banana" , c : "cherry"}
const randomStringPair = 
getRandomkeyValuePair<string>(stringObject)
console.log(randomStringPair);

const numberObject = { one: 1 , two : 2 , three : 3};
const randomNumberPair = getRandomkeyValuePair<number>(numberObject);
console.log(randomNumberPair);
