// constraint means force kore kono kisu kora, extend korte hoi and oita likhe dite hoi

const myInfo2 =<T extends IMyDe> (param: T) => {

    const salary = 345677;
    const newData = {...param, salary}
    return newData
  }

  interface IMyDe {
    name: string,
    job: string
  }
  const myDetails1:IMyDe ={
    name: "fdfdg",
    job: "private"
}

 const result2 = myInfo2<IMyDe>(myDetails1);
console.log(result2);