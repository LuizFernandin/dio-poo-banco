export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true
  
    constructor(name: string, accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
    }
  
    getName = (): string => {
      return this.name
    }
  
    getBalance = (): number => {
      return this.balance
    }
  
    setBalance = (value: number): void => {
      this.balance = value
    }
  
    public validateStatus = (): boolean => {
      if (this.status) {
        return this.status
      }
  
      throw new Error('Conta inválida')
    }
  
    deposit = (value: number): void => {
      if(this.validateStatus()){
        let result: number = this.getBalance() + value
        this.setBalance(result)
        console.log('Voce depositou R$' + value + ' - Saldo da conta: R$' + this.getBalance())
      }
    }
  
    withdraw = (value: number): void => {
      if(this.validateStatus() && this.getBalance() > value){
        let result: number = this.getBalance() - value
        this.setBalance(result)
        console.log('Voce sacou: R$' + value + ' - Saldo da conta: R$' + this.getBalance())
      } else {
        console.log('Erro: valor de saque menor que o saldo atual: R$' + this.getBalance())
      }
    }
  }