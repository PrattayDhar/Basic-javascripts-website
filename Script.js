
document.getElementById("player-button").addEventListener('click', function () {
    topFive('player-name', 'player-button');
})

document.getElementById("player-button2").addEventListener('click', function () {
    topFive('player-name2', 'player-button2');
})
document.getElementById("player-button3").addEventListener('click', function () {
    topFive('player-name3', 'player-button3');
})
document.getElementById("player-button4").addEventListener('click', function () {
    topFive('player-name4', 'player-button4');
})
document.getElementById("player-button5").addEventListener('click', function () {
    topFive('player-name5', 'player-button5');
})
document.getElementById("player-button6").addEventListener('click', function () {
    topFive('player-name6', 'player-button6');
})

// BUDGET CALCULATION

document.getElementById('FirstCalculation').addEventListener('click', function () {
    const oldinput = document.getElementById('playerinput').value;
    const newinput = parseInt(oldinput);
    const len = document.getElementsByTagName('li').length;
    let cost = newinput * len;
    const textfild = document.getElementById('fild');
    textfild.innerText = cost;
    document.getElementById('playerinput').value = " "

})

// Budget 2nd Part Calculation

document.getElementById('totalcalculation').addEventListener('click', function () {

    const managerinput = parseInt(document.getElementById('Managerinput').value);
    const couchinput = parseInt(document.getElementById('couchinput').value);
    const playercost = parseInt(document.getElementById('fild').innerText);
    const totalcost = managerinput + couchinput + playercost;
    const totaltextFild = document.getElementById('totaltextFild');
    totaltextFild.innerText = totalcost;
    document.getElementById('Managerinput').value = " ";
    document.getElementById('couchinput').value = " "







})







