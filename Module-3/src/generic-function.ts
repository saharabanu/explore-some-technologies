// arrow function generic function


const createArray = <T>(params: T): T[] => {
  return [params]
}
interface IPerson {
name: string
}
// console.log(createArray<string>('bang'));
// console.log(createArray<boolean>(true));
// console.log(createArray<IPerson>({name:"sahara"

// }));



// double / tuple parameter by generic function

const createArray1 = <X, Y>(params: X, params2: Y): [X, Y] => {
    return [params, params2]
  }
  // normal function
function createArray2<X, Y> (params: X, params2: Y): [X, Y]{
    return [params, params2]
  }

  

//   console.log(createArray1<string, string>('bang','fr'));
//   console.log(createArray1<boolean, number>(true, 67));
//   console.log(createArray1<IPerson, string>({name:"sahara"
  
//   }, 'uio'));
//   console.log(createArray1<IPerson, Array<string> >({name:"sahara"
  
//   }, ['e','fg']));


  //spread operator in arrow function 


  const myInfo1 =<T> (param: T) => {

    const salary = 345677;
    const newData = {...param, salary}
    return newData
  }
  const myDetails ={
    name: "fdfdg",
    job: "private"
}

 const result = myInfo1(myDetails);
console.log(result);

