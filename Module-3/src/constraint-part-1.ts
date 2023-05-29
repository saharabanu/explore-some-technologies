type PersonType = {
    name:string,
    age: number,
    honesty: boolean
}

type newType = "name" | "age" | "honesty"  // manually works 

// type er key gulu niye kaj korar jonno  extends keyof use korte hobe


type newTypeUsingKeyOf = keyof PersonType

function getProperty<X, Y extends keyof X> (obj:X, key: Y) {
  return obj[key]
}
const myDetails2 ={
    name: "fdfdg",
    age: 45,
    honesty: true
}
const property = getProperty(myDetails2,"honesty");
console.log(property)