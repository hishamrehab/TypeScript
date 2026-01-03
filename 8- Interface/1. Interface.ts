interface Computer {
    name : string;
    ram :number;
    hdd: number;
}


const ComputerExample:Computer = {
    name : "HELLO",
    ram: 9,
    hdd: 100
}

console.log(ComputerExample.name);
console.log(ComputerExample.ram);
console.log(ComputerExample.hdd);


// Another Example 
interface Movie {
  readonly  name : string;
    ratings: number;
    genra?: string;
}

const movie1 : Movie = {
    name : "Start Wars",
    ratings: 8.9,
    genra: "Action"
}

