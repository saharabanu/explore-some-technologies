class Person {
     // short hoyese  name: string, type and initialize ak stahe kore jai public likhe
    constructor(public name: string){
    // short hoyese this.name = name
    }
     public makeINfo (){
        console.log(`My name is ${this.name}`)
     }
}

const myName =new Person("Sahara");
const herName =new Person("Josna");
// or  console.log("my name is ", myName)
myName.makeINfo();
herName.makeINfo();
