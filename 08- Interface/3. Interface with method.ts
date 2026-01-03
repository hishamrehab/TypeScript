interface Person {
    firstName : string;
    lastName: string;
    age : number;
    sayHello() : void;
}

function greet(person: Person) {
  console.log(`Hello , ${person.firstName} ${person.lastName}`)
 person.sayHello();
}


const john: Person = {
    firstName : "John",
    lastName : "Doe",
    age : 30 ,
    sayHello() {
        console.log("Hi There");
    },
};


const hisham: Person = {
    firstName : "Hisham",
    lastName : "Rehab",
    age : 20 ,
    sayHello() {
        console.log("Whats");
    },
}


greet(john);
greet(hisham);

// -----------------------------------------
interface Song{ 
   songName : string;
   singerName : string;
   printSongInfo(songName :string , singerName: string) : string;
}

const song1 : Song = {
    songName: "Natural",
    singerName: "Imagin Drigon",
    printSongInfo: (songName , singerName) => {
        return `Song ${songName} , Singer : ${singerName}`
    }
};

console.log(song1.printSongInfo("Natural" , "Imaginer Drigon"));
