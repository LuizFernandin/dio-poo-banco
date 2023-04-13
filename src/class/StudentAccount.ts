import { DioAccount } from "./DioAccount"

export class StudentAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
        let result: number = this.getBalance() + value
        this.setBalance(result)
      console.log('Voce depositou ' + value + ' - Com bonus de R$ 10' + ' - Saldo da conta: ' + this.getBalance())
    }
  }

}