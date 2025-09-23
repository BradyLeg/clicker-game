window.onload = function() {
    document.getElementById("button").addEventListener("click", scoreUp);
    document.getElementById("button").addEventListener("click", achievementChecker);
}

function scoreUp() {
    let originalScore = parseInt(document.getElementById("score").innerHTML);
    let newScore = originalScore + 1;
    document.getElementById("score").innerHTML = newScore;
}

function achievementChecker() {
    let totalClicks = parseInt(document.getElementById("score").innerHTML);
    if (totalClicks === 10) alert("10 Clicks!");
}