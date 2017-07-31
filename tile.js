var stage = document.querySelector("#stage");
var userStage = document.querySelector("#stageUser");

var topLeft = document.querySelector("#topLeft");
var topCenter = document.querySelector("#topCenter");
var topRight = document.querySelector("#topRight");

var middleLeft = document.querySelector("#middleLeft");
var middleCenter = document.querySelector("#middleCenter");
var middleRight = document.querySelector("#middleRight");

var bottomLeft = document.querySelector("#bottomLeft");
var bottomCenter = document.querySelector("#bottomCenter");
var bottomRight = document.querySelector("#bottomRight");

var tl = 0;
var tc = 0;
var tr = 0;
var ml = 0;
var mc = 0;
var mr = 0;
var bl = 0;
var bc = 0;
var br = 0;

var random = function() {
var One = Math.floor(Math.random() * 2);
var Two = Math.floor(Math.random() * 2);
var Three = Math.floor(Math.random() * 2);
var Four = Math.floor(Math.random() * 2);
var Five = Math.floor(Math.random() * 2);
var Six = Math.floor(Math.random() * 2);
var Seven = Math.floor(Math.random() * 2);
var Eight = Math.floor(Math.random() * 2);
var Nine = Math.floor(Math.random() * 2);
    
var pattern = [
    [One, Two, Three],
    [Four, Five, Six],
    [Seven, Eight, Nine]
];

var SIZE = 30;
var SPACE = 10;
var ROWS = pattern.length;
var COLUMNS = pattern[0].length;


for (var row = 0; row < ROWS; row++) {
    for (var column = 0; column < COLUMNS; column++) {
        var cell = document.createElement("div");

        cell.setAttribute("class", "cell");

        stage.appendChild(cell);

        if (pattern[row][column] === 1) {
            cell.style.backgroundColor = "black";
        }

        cell.style.top = row * (SIZE + SPACE) + "px";
        cell.style.left = column * (SIZE + SPACE) + "px";
    }
}
}

var process = function () {
    tl = parseInt(topLeft.value);
    tc = parseInt(topCenter.value);
    tr = parseInt(topRight.value);
    ml = parseInt(middleLeft.value);
    mc = parseInt(middleCenter.value);
    mr = parseInt(middleRight.value);
    bl = parseInt(bottomLeft.value);
    bc = parseInt(bottomCenter.value);
    br = parseInt(bottomRight.value);

    var userPattern = [
    [tl, tc, tr],
    [ml, mc, mr],
    [bl, bc, br]
    ];


    var SIZE = 30;
    var SPACE = 10;
    var ROWS = userPattern.length;
    var COLUMNS = userPattern[0].length;


    for (var row = 0; row < ROWS; row++) {
        for (var column = 0; column < COLUMNS; column++) {
            var cell = document.createElement("div");

            cell.setAttribute("class", "cell");

            userStage.appendChild(cell);

            if (userPattern[row][column] === 1) {
                cell.style.backgroundColor = "black";
            }

            cell.style.top = row * (SIZE + SPACE) + "px";
            cell.style.left = column * (SIZE + SPACE) + "px";
        }
    }
}

random();
process();