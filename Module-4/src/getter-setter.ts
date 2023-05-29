/******
 // getter and setter
 ****/

 class BankAccount1 {
    readonly id: number;
    name: string;
    private _balance: number;
    protected  info: string;
    
       constructor(id: number,name: string,_balance: number,
         info: string){
          this.id = id,
          this.name= name,
          this._balance = _balance,
          this.info = info
       }

       get balance (){
        return this._balance
       }
       
        // getBalance ():number {
        //     return this._balance
        // }

        set deposit (amount:number){
             this._balance = this._balance + amount
        }
        // addBalance (amount: number) {
        //     return this._balance = this._balance + amount
            
        // }

    }
  
   
  
 class StudentAccount1 extends BankAccount1{
    test(){

    }
  }

  const myAccount1 = new BankAccount1(234,'Sahara', 5666, 'Noagaon')

//   console.log( myAccount1.getBalance())
  console.log( myAccount1.balance)
  console.log( myAccount1.deposit = 40)
  console.log( myAccount1)


