function BankAccount (accountName, accountBalance = 0) {
    this.accountName = accountName;
    this.accountNumber = Date.now();
    this.accountBalance = accountBalance;

    // this.deposit = (amount) => {
    //     this.accountBalance = this.accountBalance + +amount  // method
    // }

    // this.withdraw = (amount) => {
    //     this.accountBalance = this.accountBalance - +amount  // method
    // }
}

// We can add this method in prototype so we can use it anywhere in object function

BankAccount.prototype.deposit = function (amount) {
    this.accountBalance = this.accountBalance + +amount  // method
}

BankAccount.prototype.withdraw = function (amount) {
    this.accountBalance = this.accountBalance - +amount  // method
}
// const parthAccount = new BankAccount("Parth S", 1000);
// const saurabhAccount = new BankAccount("Saurabh P");
// parthAccount.deposit(200);
// saurabhAccount.deposit(1000);
// saurabhAccount.withdraw(500);


// console.log(parthAccount,saurabhAccount);
const accounts = [];
const bankaccountForm = document.querySelector('#bankaccountForm');
const customerName = document.querySelector('#customerName');
const customerBalance = document.querySelector('#customerBalance');

bankaccountForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const account = new BankAccount(customerName.value, +customerBalance.value);
    accounts.push(account);
    console.log(accounts);
})

const depositForm = document.querySelector('#depositForm');
const customerNumber = document.querySelector('#customerNumber');
const amount = document.querySelector('#amount');

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const account = accounts.find(
        (account) => account.accountNumber === +customerNumber.value
        );
    account.deposit(+amount.value);
    console.log(accounts);
})


const withdrawForm = document.querySelector('#withdrawForm');
const customerNumber1 = document.querySelector('#customerNumber1');
const amount1 = document.querySelector('#amount1');

withdrawForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const account = accounts.find(
        (account) => account.accountNumber === +customerNumber.value
        );
    account.withdraw(amount1.value);
    console.log(accounts);
})