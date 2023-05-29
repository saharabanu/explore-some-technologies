
//string


const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
     const data:string = 'It is a Asynchoronous system';
     if(data){
        resolve(data)
     }
     else{
        reject("failed")
     }
    })
};


const getPromise =async () :Promise<string> => {
  const data =await makePromise();
  return data
}
// console.log(getPromise());

//bolean

const makePromise1 = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
     const data:boolean = true;
     if(data){
        resolve(data)
     }
     else{
        reject("failed")
     }
    })
};


const getPromise1 =async () :Promise<boolean> => {
  const data =await makePromise1();
  return data
}
// console.log(getPromise1())

//Object

const makePromise2 = (): Promise<object> => {
    return new Promise<object>((resolve, reject) => {
     const data:object = {
        name:"dsaa"
     };
     if(data){
        resolve(data)
     }
     else{
        reject("failed")
     }
    })
};


const getPromise2 =async () :Promise<object> => {
  const data =await makePromise2();
  return data
}
// console.log(getPromise2())

//fetch api

interface IGetTodo {
    userId: number;
    id: number;
    title: string;
    completed : boolean
    
//         id: number,
//         name: string,
//         username: string,
//         email: string,
//         address: {
//         street: string,
//         suite: string,
//         city: string,
//         zipcode: string,
//         geo:string,
//         lng: string
        
//         }
 }

// const getTodos =async ()   => {
//   const response =await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   return await response.json();
// }


// const getTodoData =async (): Promise<void> => {
//     const result = await getTodos();
//     console.log(result)

// }
// getTodoData()
// console.log(getTodos())

interface ITodo {
    userId: number;
    id: number,
    title: string,
    completed: boolean
    }
const getTodo = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await res.json()

}

const getData = async () => {
    const result = await getTodo();
    // console.log(result)

}
getData()

function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];
  
    return item[key];
  
  }
  
  
  
  const users = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
  
//   console.log(getArrayItem(users, 0, 'name'))




interface Person {

    firstName: string;
  
    lastName: string;
  
  }
  
  
  
  function fullName<T extends Person>(person: T): string {
  
    return `${person.firstName} ${person.lastName}`;
  
  }
  console.log(fullName({firstName: "string",
  
    lastName: "ss"}))