class BankAccount {
    accountName;
    accountNumber;
    #accountbalance;
    
    constructor(accountName, accountbalance = 0)
    {
        this.accountName = accountName;
        this.accountNumber = Date.now();
        this.#accountbalance = accountbalance;
    }

    deposit(amount){
        this.#accountbalance += +amount;
    }

    withdraw(amount){
        this.#accountbalance -= +amount;
    }

    set balance (amount){
        if (isNaN(amount)) {
            throw Error("input is not a valid number")
        }
        this.#accountbalance = +amount;
    }

    get balance (){
        return this.#accountbalance;
    }

}

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;
    constructor(accountName, accountbalance = 0){
        super(accountName, accountbalance)
    }

    #calculateInterest() {
        console.log(`calculating interest`)
    }

    takeBusinessLoan (amount) {
        this.#calculateInterest();
        console.log(`Business loan is passed for ${amount}`)
    }
}

class SavingAccount extends BankAccount {
    transactionLimit = 20000;
    constructor(accountName, accountbalance = 0){
        super(accountName, accountbalance)
    }

    takePersonalLoan(amount) {
        console.log (`Personal loan is passed ${amount}`)
    }
}

const parthAccount = new CurrentAccount("Parth", 2000);
const vikasAccount = new SavingAccount("Vikas", 500);
parthAccount.takeBusinessLoan(5000);
console.log(vikasAccount.balance);