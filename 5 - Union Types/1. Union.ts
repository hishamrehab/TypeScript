let password : string | number = 20


type UserInfo = {
    fist : string;
    last : string;
    age: number;
}

type AccountDetails = {
     email :string;
      password: string
}

let user : UserInfo | AccountDetails = {
   email: "someone@gmail.com",
   password : "password",
}
 

const items: (number | string)[] = [1 , 5 , 4 , "hello"];
console.log("items" , items);