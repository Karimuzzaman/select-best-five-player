

document.getElementById('btn-calculate').addEventListener('click', function () {


    const totalPlayer = textField('selected-player');

    const perPlayerCost = inputField('per-player-field');

    const costTotalPlayer = totalPlayer * perPlayerCost;

    const playerExpensesElement = document.getElementById('player-expenses');
    playerExpensesElement.innerText = costTotalPlayer;

})