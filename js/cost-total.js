document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const managerCost = inputField('manager-field');

    const coachCost = inputField('coach-field');

    const playerExpenses = textField('player-expenses');

    const totalCost = managerCost + coachCost + playerExpenses;

    const total = document.getElementById('total');
    total.innerText = totalCost;

})