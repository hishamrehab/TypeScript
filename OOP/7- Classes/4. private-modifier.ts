class Person {
    private first : string;
    public last : string;
    constructor (first : string , last : string) {
        this.first = first;
        this.last = last;
    }

    getName() : string {
        return `${this.first} ${this.last}`
    }
}

let p1 = new Person("John" , "Doe");
console.log(p1.getName());