import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StudentAccount } from './class/StudentAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(20)
peopleAccount.withdraw(10)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(30)
companyAccount.withdraw(10)
companyAccount.getLoan(100)
console.log(companyAccount)

const studentAccount: StudentAccount = new StudentAccount('Luiz', 20)
studentAccount.deposit(30)
studentAccount.withdraw(10)
console.log(studentAccount)