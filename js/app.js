function playerList(element) {
    // console.log(element.parentNode.parentNode.children[0].innerText);

    const playerName = element.parentNode.parentNode.children[0].innerText;

    const orderList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = playerName;
    orderList.appendChild(li);

    element.disabled = true;








}