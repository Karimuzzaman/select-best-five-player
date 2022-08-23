function playerList(element) {


    const playerName = element.parentNode.parentNode.children[0].innerText;

    const orderList = document.getElementById('player-list');
    const li = document.createElement('li');


    playerTotal.push(orderList.childNodes);


    if (playerTotal.length > 5) {
        return alert("please select 5 or less than 5");
    }
    else {
        li.innerText = playerName;
        orderList.appendChild(li);
        element.disabled = true;
    }
    console.log(playerTotal);
    console.log(playerTotal.length);

    const selectedPlayer = document.getElementById('selected-player');
    selectedPlayer.innerText = playerTotal.length;

}
const playerTotal = [];







