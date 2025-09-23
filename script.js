document.getElementById("clickObject").addEventListener("click", scoreUp);

function scoreUp() {
    let originalScore = document.getElementById("score").value;
    let newScore = originalScore++;
    document.getElementById("score").innerHTML = newScore;
}