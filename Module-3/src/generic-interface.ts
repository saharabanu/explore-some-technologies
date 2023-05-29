// generic  interface 

//for good practice and well code
interface IUserInfo  {
    name:string,
    roll:number
}

const user2 : GenericArray<IUserInfo>  = [
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


// 

interface MyCarInfoInterface<T, U=null  > {
    name: string,
    price: number,
    color: T,
    BackupCamera?: U
}

const myCarInfo:MyCarInfoInterface<string, boolean > = {
    name:"BMW",
    price: 44444,
    color:"Blue",
    BackupCamera: true
}

interface IColorInterface {
    insideColor:string,
    outSideColor:string
}
const myCarInfo1:MyCarInfoInterface<IColorInterface> = {
    name:"BMW",
    price: 44444,
    color:{
        insideColor:"White",
        outSideColor:"Blue"
    },
}


//

