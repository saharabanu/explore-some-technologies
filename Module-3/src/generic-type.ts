// generic type

type GenericArray<T> = Array<T>


// we can add many arguments and parameter using tuple

type GenericArrayTuple<X, Y> = [X, Y];


type myInfoType = {
    name:string, 
    job:string
}
// GeneGenericArrayTuple<object, number> it is not best practise.
const myInfo:GenericArrayTuple<myInfoType, number> = [{
      name:"Babu",
      job:"Private",
     
},
4000000
]

const number1 : GenericArray<number> = [2,3,4,5,6,778,54];
const number2: GenericArray<string> = ['8','56','3','2431','2','234','5',];
const number3: GenericArray<{name:string, age:number}> = [{name:"sa", age:3}];




//for good practice and well code
type userInfo = {
    name:string,
    roll:number
}

const user1 : GenericArray<userInfo>  = [
    {
    name:"daubli",
    roll:1
    },
    {
    name:"publi",
    roll:3
    },
    {
    name:"fobli",
    roll:6
    },
]

