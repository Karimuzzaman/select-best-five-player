document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const managerCost = inputField('manager-field');

    const coachCost = inputField('coach-field');

    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseInt(playerExpensesString);

    const totalCost = managerCost + coachCost + playerExpenses;

    const total = document.getElementById('total');
    total.innerText = totalCost;

})