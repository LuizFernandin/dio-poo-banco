import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus()){
      let result: number = this.getBalance() + value
      this.setBalance(result)
      console.log('Voce pegou um empréstimo: R$' + value + ' - Saldo da conta: R$' + this.getBalance())
    }
  }
}