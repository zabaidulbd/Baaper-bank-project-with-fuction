document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositTotal = depositInputFunction('user-deposit');

    const userDepositTextTotalAmount = depositTextFunction('deposit-amount');

    const userDepositAmount = depositTotal + userDepositTextTotalAmount;

    setDepositAmount('deposit-amount', userDepositAmount);

    const addBalanceAmountTotal = depositTextFunction('balance-amount');

    const balanceTotal = userDepositAmount + addBalanceAmountTotal;

    setDepositAmount('balance-amount', balanceTotal)


})