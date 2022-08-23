function calculatePlayer(element) {

    const selectedPlayer = document.getElementById(element);
    const totalPlayerString = selectedPlayer.innerText;
    const totalPlayer = parseInt(totalPlayerString);
    return totalPlayer;

}

function playerCost(element) {

    const perPlayerField = document.getElementById(element);
    const perPlayerValueString = perPlayerField.value;
    const perPlayerCost = parseInt(perPlayerValueString);
    return perPlayerCost;

}

document.getElementById('btn-calculate').addEventListener('click', function () {


    const totalPlayer = calculatePlayer('selected-player');

    const perPlayerCost = playerCost('per-player-field');

    const costTotalPlayer = totalPlayer * perPlayerCost;

    const playerExpensesElement = document.getElementById('player-expenses');
    playerExpensesElement.innerText = costTotalPlayer;

})