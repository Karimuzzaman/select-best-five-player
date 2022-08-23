

document.getElementById('btn-calculate').addEventListener('click', function () {


    const totalPlayer = calculatePlayer('selected-player');

    const perPlayerCost = playerCost('per-player-field');

    const costTotalPlayer = totalPlayer * perPlayerCost;

    const playerExpensesElement = document.getElementById('player-expenses');
    playerExpensesElement.innerText = costTotalPlayer;

})