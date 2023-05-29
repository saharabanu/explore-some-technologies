//type guard 
 /****
  // key of guard 

 // key in guard
 // instanceof guard 
  ***/



 type numericType =  number | string


 function keyOfGuard(num1: numericType, num2: numericType): numericType {
    if(typeof num1 === "number" && typeof num2 === 'number'){
        return num1 + num2
    }
    else{
        return num1.toString() + num2.toString()
    }

    
    
 }

//  console.log(keyOfGuard("1","3"))
//  console.log(keyOfGuard(34,60))

// key in guard

type normalUserType = {
    name: string
}
type adminUserType = {
    name: string,
    roll: string
}


function keyInGuard(param: normalUserType | adminUserType) {
   if("roll" in param){
       return `I am admin and My roll is ${param.roll}`
   }
   else{
       return " I am in Normal User"
   }

   
   
}

const normalUser = {name: "killob"};
const adminUser = {name: "admillo", roll:"admin"};

//  console.log(keyInGuard(normalUser))
//  console.log(keyInGuard(adminUser))


/// instanceof guard 
 type uniqueType = {
    name: string,
     job: string, 
     company: string
 }
  class Person1 {
    name: string;
    job: string;
    company: string;
    constructor(name: string,job:string, company: string
    ){
        this.name = name,
        this.job = job,
        this.company = company

    }

    makeIdentify(){
        console.log("He is an employer")
    }
  }
 

  class Amirul extends Person1{
    designation: string;
    constructor(name: string,job: string,  company: string,designation: string){
        super(name,job,company)
        this.designation = designation
        

    }
   hisCalling(){
    console.log(`${this.name} is a ${this.job}employer. He works at ${this.company} as an ${this.designation} `)
   }
   
  }


  class Yeaqub extends Person1{
    salary:number
    constructor(name: string, job: string, company: string, salary: number){
        super(name, job, company)
        this.salary = salary
        

    }

    hisIdentify(){
        console.log(`${this.name} is a ${this.job}employer. He works at ${this.company} and Now his salary is ${this.salary} `)
    }
  }

// another sytem 
function isAmirul (info : Person1):info is Amirul{
    return info instanceof Amirul

}
function isYeaqub (info : Person1):info is Yeaqub{
    return info instanceof Yeaqub

}
  
    function getDetails (info: Person1){
     if(isAmirul(info)){
        info.hisCalling();
     }
     else if (isYeaqub(info)) {
        info.hisIdentify()
     } else {
        info.makeIdentify()
     }
    //  else if (info instanceof Yeaqub) {
    //     info.hisIdentify()
    //  } else {
    //     info.makeIdentify()
    //  }
    }
//   console.log(myBrother);
//   console.log(myHusband);
const myBrother = new Yeaqub(
    "yeaqub","Private", "Incepta", 48900
     )
     const myHusband = new Amirul(
    "Amirul","Private", "Helathcare", "MIO"
     )
getDetails(myBrother)
  
