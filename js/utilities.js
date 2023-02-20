function depositInputFunction(depositId) {
    const userDeposit = document.getElementById(depositId);
    const userDepositValueString = userDeposit.value;
    const userDepositValue = parseFloat(userDepositValueString);
    userDeposit.value = '';
    return userDepositValue;
}
function depositTextFunction(depositTextId) {
    const userDepositText = document.getElementById(depositTextId);
    const userDepositTextString = userDepositText.innerText;
    const userDepositTextTotal = parseFloat(userDepositTextString);
    return userDepositTextTotal;
}
function setDepositAmount(depositTextId, newValue) {
    const userDepositText = document.getElementById(depositTextId);
    userDepositText.innerText = newValue;
}