function topFive(Player, buttonPlayer) {
    const len = document.getElementsByTagName('li').length;
    if (len < 5) {
        const list = document.createElement('li');
        const name = document.getElementById(Player).innerText;
        list.innerText = name;
        const ol = document.getElementById("list");
        ol.appendChild(list);
        document.getElementById(buttonPlayer).disabled = true;
    }
    else
        alert('Your Limit Only Top 5')
}

function Validation(evnt) {
    const char = String.fromCharCode(evnt.which);
    if (!(/[0-9]/.test(char))) {
        alert('UPPS!! Please Give Number');


    }


}




