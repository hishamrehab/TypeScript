const person : {firstName : string  ; lastName :string ; age: number } = {
    firstName : "John",
    lastName : "Deo",
    age: 30
}

console.log(`Name : ${person.firstName} ${person.lastName} , Age : ${person.age}`);




function printUser() :
 {
    name : string ; 
    age : number ; 
    location : string
} {
return {
    name : "Hisham",
    age : 20 ,
    location: "Cairo"
};
}

const res = printUser();
console.log("res" , res);
