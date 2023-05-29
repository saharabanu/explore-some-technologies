//alias type, it is used primitive datta types

type user ={
    name:string,
    age: number
}

// interface , it is used for only object , we can extend it
interface IUser{
    name: string,
    age: number,
    phone: number
}

interface IExtendedUser extends IUser{
    role: number
}

const userTypeWithAlias:user = {
    name:'dadd',
    age: 34
}
const userTypeWithInterface:IExtendedUser = {
    name:'dadd',
    age: 34,
    phone:4667,
    role:1,

}


// Alias is best for function and array

type add = 
    (num1: number,
    num2: number)
=> number

const summation:add = (num1, num2) => num1 + num2;

function sum (num1:number, num2:number):number{
    return num1 - num2
}

// not good practice Interface

interface IAdd {
    (num1: number, num2: number): number
}

const summation1:IAdd = (num1, num2) => num1 + num2;



/// for array 



type arrayAlias = number[]

const rollNumber:arrayAlias = [1,2,3,4,5,6,7,8,9,60]

// interface  it uses index
interface IArray {
    [index: number] : string
}

const rollNumber1:IArray = ['1','2','3','4']
