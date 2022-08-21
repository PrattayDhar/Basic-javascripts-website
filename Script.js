
document.getElementById("player-button").addEventListener('click', function () {
  
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    const name = document.getElementById('player-name')

    li.appendChild(document.createTextNode(name.innerText));
    ul.appendChild(li);
})
document.getElementById("player-button2").addEventListener('click', function () {
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    const name = document.getElementById('player-name2')

    li.appendChild(document.createTextNode(name.innerText));
    ul.appendChild(li);
    document.getElementById("player-button2").disabled = true;
})
document.getElementById("player-button3").addEventListener('click', function () {
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    const name = document.getElementById('player-name3')

    li.appendChild(document.createTextNode(name.innerText));
    ul.appendChild(li);
})
document.getElementById("player-button4").addEventListener('click', function () {
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    const name = document.getElementById('player-name4')

    li.appendChild(document.createTextNode(name.innerText));
    ul.appendChild(li);
})
document.getElementById("player-button5").addEventListener('click', function () {
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    const name = document.getElementById('player-name5')

    li.appendChild(document.createTextNode(name.innerText));
    ul.appendChild(li);
})
document.getElementById("player-button6").addEventListener('click', function () {
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    const name = document.getElementById('player-name6')

    li.appendChild(document.createTextNode(name.innerText));
    ul.appendChild(li);
})