let login = document.getElementById('login');
login.addEventListener("click", function () {
    let loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})

//Deposit Button event Handler

const depositBtn = document.getElementById('addDeposit');

depositBtn.addEventListener("click", function () {
    const depositNumer = getInputNumber("depositeAmount")
    //console.log(depositNumer);
    /* const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepoNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumer + currentDepoNumber;
    document.getElementById('currentDeposit').innerText = totalDeposit; */

    updateSpanText('currentDeposit', depositNumer);
    updateSpanText('currentBalance', depositNumer);

    document.getElementById('depositeAmount').value = "";
});

//Withdraw Button event Handler 

const addWithdraw = document.getElementById('addWithdraw');
addWithdraw.addEventListener("click", function(){
    const withDrawAmount = getInputNumber("withdrawAmount");
    updateSpanText('currentWithdraw', withDrawAmount);
    updateSpanText('currentBalance', -1 * withDrawAmount);
    document.getElementById('withdrawAmount').value = "";
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumer){
    const current = document.getElementById(id).innerText;
    const currentAmount = parseFloat(current);
    const totalAmount = depositNumer + currentAmount;
    document.getElementById(id).innerText = totalAmount;
}