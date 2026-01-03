type Employee = {
    id : number;
    name : string
}

type Manager = {
    department : string;
    role : string
}


type ManagerWiyhEmployeeInfo = Employee &  Manager;

const manager : ManagerWiyhEmployeeInfo = {
    id : 123 ,
    name: "Alex Merson",
    department: "Engineering",
    role : "Senior Front End developer"
};

console.log(manager.id);
console.log(manager.name);
console.log(manager.department);
console.log(manager.role);