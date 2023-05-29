// ternary operator 

const age = 50;

// if(age >= 18){
//     console.log("yes")
// }
// else{
//     console.log("no") 
// }

const isAdult = age >= 18 ? "Yes" : "No"

// console.log(isAdult)


// nullish coeslancing operator . It works only null and undefined falsy value.

const isAuthenticated = "";

const userName = isAuthenticated ?? "Guest";

// console.log({userName})

type manush ={
    name: string,
    age: number,
    address:{
        city: string,
        road: number,
        home? : ""
    }
}

const mamun: manush = {
    name:"Mamun",
    age: 24,
    address:{
        city:"Dhaka",
        road: 266,
        
    }
}

const home = mamun.address.home ?? "Not defined Home";
// console.log( home)

function generateAdder(a: number): (b: number) => number {

    return function(b: number) {
  
      return a + b;
  
    };
  
  }
  
  
  
  const addTwo = generateAdder(2);
  
//   console.log(addTwo(3));
  
//   console.log(addTwo(5));

