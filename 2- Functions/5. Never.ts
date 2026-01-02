function throwError(msg: string) : never {
    throw new Error(msg);
}


function infiniteLoop() : never {
while(true) {  }
}


let x: never;

function neverRetuns() : never {
 while(true) {

 }
}

x = neverRetuns();