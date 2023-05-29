// inheritance common gulu ak jaigai rakhte hobe
class Parent {
    name: string;
    age: number;
    constructor(name: string,
        age: number){
        this.name = name;
        this.age = age;
            

    }
    makeSleep(hours: number):string{
        return ` ${this.name} sleeps ${hours} daily`

    }
}
class Student extends Parent{
   
     readIn: number
   constructor(name: string, age: number,  readIn: number){
    super(name, age)
         this.readIn =  readIn

     }
    
}
const student1 = new Student("shara", 12, 7);
// console.log(student1)

class Teacher extends Parent{
   
    specialist: string
    constructor(name: string, age: number,  specialist: string){
       super(name, age)
        this.specialist = specialist
 
    }
    takenClass (subject: string):string{
        return ` ${this.name} teaches in ${subject} daily`
    }
}

const teacher1 = new Teacher("shara", 12, 'English');
console.log(teacher1)