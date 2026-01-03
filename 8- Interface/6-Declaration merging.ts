//  Original Interface

interface Car {
    brand: string;
    start() : void;
}

// Declaration merging (interface extension)
interface Car {
    model : string;
    stop() :void;
}

const myCar :Car = {
    brand: "BMW",
    model: "M3",
    start() {
        console.log("Start");
    },
    stop() {
        console.log("Stop");
    }
}

console.log(myCar.start());
console.log(myCar.stop());
