// normal function

function add (num1:number, num2:number): number{
    return num1 + num2

}
const sum = add(5, 8);
// console.log(sum);

const add1 = (num1:number, num2:number):number => num1 + num2;



//callback function 

const person :{
    name: string,
    balance: number,
    getBalance(money:number):void
}={
    name:"banu",
    balance: 30,
    getBalance(money:number){
        return `My new Balance is ${this.balance + money}`

    }
}


// default parameter in last parameter

const add3 = (num1:number, num2:number = 34): number=> num1 + num2;
// console.log(add3(4))

// spread operator

const friends = ['kajol', 'nila', 'rahman']
const newFrined= [ 'suji', 'rujina'];


friends.push(...newFrined);
// console.log(friends)


/// rest operator

const greetFriends = (...friends:string[]):void => console.log(friends);

console.log(greetFriends("Rafi", "kafi","Mafi",'ruhi'))