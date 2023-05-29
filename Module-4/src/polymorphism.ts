// poymorphism 

/**
 * jodi parameter na lage tahole constructor er dorkar nai
 * aki function akek jaigai akkek rokom result dei
 */
class Person2 {
workTime(){
        console.log('As s teacher,I teach daily 6 hours')
    }
}
class Student1 extends Person2 {
workTime(){
        console.log('As s student,I read daily 10 hours')
    }
}
class Developer extends Person2 {
workTime(){
        console.log('As s developer,I do code  daily 6 hours')
    }
}

function workFunc (param: Person2){
    param.workTime()
}

const pers1 = new Person2();
const pers2 = new Student1();
const pers3 = new Developer();

workFunc(pers1)
workFunc(pers2)
workFunc(pers3)

class Shape {
   getArea ():number{
    return 0
   }
}

class Circle extends Shape{
    radius : number;
    constructor(radius:number){
        super()
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }

}
class Rectangle extends Shape{
    width : number;
    height: number;
    constructor(width:number, height: number){
        super()
        this.width = width,
        this.height= height
    }

    getArea(): number {
        return this.height * this.width
    }

}

function getAreaShape (param: Shape){
    console.log(param.getArea())

}

 getAreaShape(new Circle(10));
getAreaShape( new Rectangle(10,24));
