// type assertion , it has two syntax <>, and as keyword

let num:any;
num = 56;
(num as number).toFixed(2); 


const kgToGram = (num:string | number) : string | number |undefined=> {
    if(typeof num === "number"){
     const gram = num * 1000;
     return gram;


    }
    if(typeof num === "string"){
     const gram = parseFloat(num) / 1000;
     return gram;


    }

}

const resultToNumber = kgToGram(10) as number;
const resultToString = kgToGram("5000") as string;
const resultToString1 =<string> kgToGram("5000");
// console.log(resultToNumber, resultToString);

type customError ={
    message: string
}

try{
// console.log('hello')
}
catch(err){
    // console.log((err as customError).message)
    // or 
    console.log((<customError> err).message)

}

