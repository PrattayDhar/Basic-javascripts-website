
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

document.getElementById('FirstCalculation').addEventListener('click', function(){
    const oldinput = document.getElementById('playerinput').value;
    const newinput = parseInt(oldinput);
    const len = document.getElementsByTagName('li').length;
    const cost= newinput*len;
    const textfild= document.getElementById('fild');
    textfild.innerText=cost;
    
})







