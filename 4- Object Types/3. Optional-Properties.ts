type User = {
     name : string;
     age?: number;
     location : string;
}

const user : User = {
    name : "Hisham",
    age : 30,
    location: "Cairo"
}

console.log(
    `Name : ${user.name} , 
     Age : ${user.age} ,
     location: ${user.location}`
);