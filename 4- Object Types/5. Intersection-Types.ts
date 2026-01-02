type UserInfo = {
    first: string;
     last : string;
     age: number   
}


type AccountDetails = {
    email : string;
    password: string;
}

type User = UserInfo  & AccountDetails;

const hisham : User = {
    first: "HIhsam",
    last: "Rehabn",
    age: 25,
    email: "hishamrehab@gmail.com",
    password: "12546"
}