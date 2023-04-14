class BankAccount {
    constructor(accountName, accountbalance = 0)
    {
        this.accountName = accountName;
        this.accountNumber = Date.now();
        this.accountbalance = accountbalance;
    }

    deposit(amount){
        this.accountbalance += +amount;
    }

    withdraw(amount){
        this.accountbalance -= +amount;
    }

}

accounts = [];
const bankaccountForm = document.querySelector('#bankaccountForm');
const customerName = document.querySelector('#customerName');
const customerBalance = document.querySelector('#customerBalance');
const formTable = document.querySelector('#formTable')
bankaccountForm.addEventListener('submit',(e) => {
    e.preventDefault();
    BankAccount("parth",2000)
    const account = new BankAccount(customerName.value,+customerBalance.value);
    accounts.push(account);
    console.log(accounts);
    formTable.innerHTML = `<tr><td>${account.accountName}</td><td>${account.accountNumber}</td><td>${account.accountbalance}</td></tr>`
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
        (account) => account.accountNumber === +customerNumber1.value
        );
    account.withdraw(+amount1.value);
    console.log(accounts);
})



//  const parthAccount = new BankAccount('Parth',1000);
//  const vikasAccount = new BankAccount('Vikas');
//  vikasAccount.deposit(1000);
//  parthAccount.withdraw(200);
//  console.log(parthAccount,vikasAccount);