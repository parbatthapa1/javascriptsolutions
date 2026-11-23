const validateWithdrawal = (amount, balance) => {
    if (amount > balance) {
        return false;
    }
    else if (amount % 500 !== 0) {
        return false;
    }
    else if (amount + 25 > balance) {
        return false;
    }
    else {
        return true;
    }
};

const withdrawMoney = (amount, balance, callback) => {
    if (callback(amount, balance)) {
        let remainingBalance = balance - amount - 25;

        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs. 25");
        console.log("Remaining Balance: Rs.", remainingBalance);
    }
    else {
        console.log("Withdrawal Failed!");
        console.log("Invalid amount or insufficient balance.");
        console.log("Remaining Balance: Rs.", balance);
    }
};

withdrawMoney(3000, 10000, validateWithdrawal);