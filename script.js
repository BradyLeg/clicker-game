document.getElementById("clickObject").addEventListener("click", scoreUp, achievementChecker);

function scoreUp() {
    let originalScore = document.getElementById("score").value;
    let newScore = originalScore++;
    document.getElementById("score").innerHTML = newScore;
}

function achievementChecker() {
    let totalClicks = document.getElementById("score").value;
    if (totalClicks = 10) alert("10 Clicks!")
}