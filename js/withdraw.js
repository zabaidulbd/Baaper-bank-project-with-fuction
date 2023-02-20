document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmount = depositInputFunction('user-withdraw');
    const withdrawTotal = depositTextFunction('withdraw-total');
    const withdrawTotalAmount = withdrawAmount + withdrawTotal;
    setDepositAmount('withdraw-total', withdrawTotalAmount);
    const totalBalanceAmount = depositTextFunction('balance-amount');
    const finalTotalAmount = totalBalanceAmount - withdrawAmount;
    setDepositAmount('balance-amount', finalTotalAmount);
})