// null type

const searching = (value:string |null) => {
    if(value === null){
        console.log("there is nothing to search")
    }
    else{
        console.log("searching....")
    }

}

// searching("hello")


// unknown type 


const myCarSpeed = (speed : unknown) => {
   if(typeof speed === "number"){
      const convertedSpeed = (speed * 1000) / 3600;
      console.log(' My speed is',convertedSpeed)
   }
   if(typeof speed === "string"){
    const [value, unit] = speed.split(" ");
    const convertedSpeed = ( parseFloat(value)   * 1000) / 3600;
    console.log(' My speed is',convertedSpeed) 
   }
   else{
    console.log("there is wrong type")
   }
}

// myCarSpeed(30)
// myCarSpeed("20")
// myCarSpeed(true)



// never type 


function throwError(params:string):never {
    throw new Error(params)
}

// throwError("error error error !!!!!!!!!!!!!!!")