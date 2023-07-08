var players = [];
var scores = {};
var wins = {};

function setPlayers() {
    var numPlayers = document.getElementById("numPlayers").value;
    var playersDiv = document.getElementById("players");
    playersDiv.innerHTML = '';

    for (var i = 0; i < numPlayers; i++) {
        var name = prompt("Enter the name of player " + (i+1) + ":");
        players.push(name);
        scores[name] = 0;

        if (!wins[name]) {
            wins[name] = 0;
        }

        playersDiv.innerHTML += '<div>' + name + ': <input type="number" id="score' + i + '" value="0"></div>';
    }
}

function determineWinner() {
    for (var i = 0; i < players.length; i++) {
        scores[players[i]] = parseInt(document.getElementById("score" + i).value);
    }

    var winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    wins[winner] += 1;

    var winsDiv = document.getElementById("wins");
    winsDiv.innerHTML = 'Wins: ' + JSON.stringify(wins);
}
