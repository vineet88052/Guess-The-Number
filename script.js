'use strict';
let No = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
function reload()
{
    score = 20;
    No = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.comparison').textContent = "Start Guessing!";
    document.querySelector('.check').disabled = false;
    document.querySelector('.start').style.display = "block";
    document.querySelector('.wrong').style.display = "none";
    document.querySelector('.correct').style.display = "none";
    document.querySelector('.guess-no').value = "";
}
// console.log("No: " + No);
let playerGuess;
let correct  = new Audio("./correctSound.wav");
let wrong = new Audio("./wrongSound.wav");
document.querySelector('.reload').addEventListener('mousedown', function() {
    document.querySelector('.reload').style.left = "4px";
    document.querySelector('.reload').style.top = "4px";
    document.querySelector('.reload').style.boxShadow = "4px 4px 0 black";
})
document.querySelector('.reload').addEventListener('mouseup', function() {
    reload();
    document.querySelector('.reload').style.left = "0px";
    document.querySelector('.reload').style.top = "0px";
    document.querySelector('.reload').style.boxShadow = "8px 8px 0 black";
})

document.querySelector('.check').addEventListener('mousedown', function () {
    document.querySelector('.check').style.left = "4px";
    document.querySelector('.check').style.top = "4px";
    document.querySelector('.check').style.boxShadow = "4px 4px 0 black";
})
document.querySelector('.check').addEventListener('mouseup', function () {
    document.querySelector('.check').style.left = "0px";
    document.querySelector('.check').style.top = "0px";
    document.querySelector('.check').style.boxShadow = "8px 8px 0 black";
})

document.querySelector('.check').addEventListener('click', function () {
    if (document.querySelector('.guess-no').value === "") {
        document.querySelector('.comparison').textContent = "Enter Your Guess!";
        return;
    }
    playerGuess = Number(document.querySelector('.guess-no').value);
    if (playerGuess == No)
    {
        document.querySelector('.start').style.display = "none";
        document.querySelector('.wrong').style.display = "none";
        document.querySelector('.correct').style.display = "block";
        document.querySelector('.comparison').textContent = "Correct!";
        correct.play();
        document.querySelector('.check').disabled = true;
        if (score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else
    {
        wrong.play();
        document.querySelector('.start').style.display = "none";
        document.querySelector('.correct').style.display = "none";
        document.querySelector('.wrong').style.display = "block";
        score--;
        document.querySelector('.score').textContent = score;
        if (score == 0)
        {
            document.querySelector('.comparison').textContent = "Try again!";
            document.querySelector('.check').disabled = true;
            return;
        }
        if(playerGuess > No)
        {
            document.querySelector('.comparison').textContent = "Too High!";
        }
        else 
        {
            document.querySelector('.comparison').textContent = "Too Low!";
        }
    }
    console.log(playerGuess);
});