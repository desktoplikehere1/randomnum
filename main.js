let number = Math.floor(Math.random() * 100 + 1);
let guesses = 0;
function tryGuess(){
    const guess = document.getElementById("guess");
    const res = document.getElementById("res");
    const a = document.getElementById("a")
    a.textContent = "";
    let userGuess = Number(guess.value);
    guesses++;
    if (userGuess === number){
        res.textContent = `🎉 You are correct! The number is ${number}`;
        a.textContent = `It took you ${guesses} attempts to guess the number`
        number = Math.floor(Math.random() * 100 + 1);
        guesses = 0;
    } else if (userGuess > number){
        res.textContent = `❌ Too high! Try again.`;
    } else {
        res.textContent = `❌ Too low! Try again.`;
    }
}
