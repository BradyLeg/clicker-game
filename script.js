let upOne = false;

window.onload = function() {
    document.getElementById("button").addEventListener("click", scoreUp);
    document.getElementById("button").addEventListener("click", achievementChecker);
    this.document.getElementById("multi_upgrade").addEventListener("click", upgradeOne);
}

function scoreUp() {
    let originalScore = parseInt(document.getElementById("score").innerHTML);
    let modifier = 0;

    if (!upOne) modifier = 1;
    else modifier = 5

    let newScore = originalScore + modifier;

    document.getElementById("score").innerHTML = newScore;
}

function achievementChecker() {
    let totalClicks = parseInt(document.getElementById("score").innerHTML);
    if (totalClicks === 10) alert("10 Clicks!");
}

function upgradeOne() {
    upOne = true;
}