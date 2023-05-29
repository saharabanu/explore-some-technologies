/******
 // access modifier, public, private, protected

 private hole access kora jabena
 protected hoile bises khetr acces kora jabe

 private and readonly use korai better
 ****/

 class BankAccount {
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
       
        getBalance () {
            console.log(`My balance is ${this._balance}`)
        }
        addBalance (amount: number) {
            // this._balance = this._balance + amount
            console.log(`My  Total balance is ${this._balance} + ${amount}`)
        }

    }
  
   
  
 class StudentAccount extends BankAccount{
    test(){

    }
  }

  const myAccount = new BankAccount(234,'Sahara', 5666, 'Noagaon')
  console.log(myAccount);
  


