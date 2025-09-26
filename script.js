// Variables & Flags
let upgradeAddOne = false;
let upgradeMultiplier = false;

let achievement10Flag = false;
let achievement100Flag = false;

const unlock = "ACHIEVEMENT UNLOCKED: ";
const achievement10Clicks = "10 Clicks!";
const achievement100Clicks = "100 Clicks!";

// Set up
window.onload = function() {
    document.getElementById("button").addEventListener("click", scoreUp);
    document.getElementById("button").addEventListener("click", achievementChecker);
    document.getElementById("add_upgrade").addEventListener("click", upgradeAdd);
    document.getElementById("multi_upgrade").addEventListener("click", upgradeMult);
}

// Changing Score
function scoreUp() {
    let originalScore = parseInt(document.getElementById("score").innerHTML);
    let modifier = 0;

    if (upgradeAddOne && upgradeMultiplier) modifier = 10;
    else if (upgradeAddOne) modifier = 2;
    else if (upgradeMultiplier) modifier = 5
    else modifier = 1

    let newScore = originalScore + modifier;

    document.getElementById("score").innerHTML = newScore;
}

// Achievements
function achievementChecker() {
    let totalClicks = parseInt(document.getElementById("score").innerHTML);

    
    if (totalClicks >= 100 && !achievement100Flag)
    {
        achievement100Flag = true;
        alert(unlock + achievement100Clicks);
        let p = document.createElement("p");
        p.innerHTML = achievement100Clicks;
        document.getElementById("ach-text").appendChild(p);
    }
    else if (totalClicks >= 10 && !achievement10Flag)
    {
        achievement10Flag = true;
        alert(unlock + achievement10Clicks);
        document.getElementById("ach-text").innerHTML = achievement10Clicks;
    }

}

// Upgrades
function upgradeAdd() {
    upgradeAddOne = true;
    alert("Unlocked Add Click!");
}

function upgradeMult() {
    alert("Unlocked Click Multiplier!");
    upgradeMultiplier = true;
}