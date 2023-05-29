// static class type 

// static bole dile r this and constructor  kaj korbena 


class Counter {
   
        static num : number = 0;


        static increment(){
            return (Counter.num = Counter.num + 1)
        }
        static decrement(){
            return (Counter.num = Counter.num - 1)
        }
    
}

console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.decrement())