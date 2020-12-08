let usrInput = document.getElementById("usrInput");
let guessBtn = document.getElementById("guess");
let resetBtn = document.getElementById("reset");

let higherLower = document.getElementById('higherLower');
let guesses = document.getElementById('guesses');

guessBtn.addEventListener('click', onClickGuess);
resetBtn.addEventListener('click', onClickReset);



let number = 45;
let guessesAllowed = 10;
let guessesLeft = 10;




number = seedNumber(1,100);

function onClickGuess( ){

    if(inputsAreEmpty() || inputOutofBounds()){
        higherLower.textContent = "You must enter a number between 1-100!";
        return;
    }

    else{
        compareNumber();
        guesses.textContent = `Guesses Left: ${guessesLeft}`;
    }

}

function compareNumber(){
    if(guessesLeft <= guessesAllowed && guessesLeft > 0){
        parseInt(getInput());

        if(getInput() > number){
            guessesLeft--;
            return higherLower.textContent = "Too High! Guess Again";
        
        }

        else if(getInput() < number){
            guessesLeft--;
            return higherLower.textContent = "Too Low! Guess Again";
            
        }

        else if(getInput() == number){
            guessesLeft = 0;
            
            return higherLower.textContent = "Correct!";
        }

    }
}

function onClickReset( ){
    guessesLeft = 10;
    guesses.textContent = `Guesses Left: ${guessesLeft}`;
    higherLower.textContent = " ";
    number = seedNumber(1,100);
}

function getInput(){
    return usrInput.value;
}

function parseInput(){
    return parseInt(usrInput.value);
}

function inputsAreEmpty(){
    if (getInput() == '' || getInput() == NaN){
        return true;
    }
    else{
        return false;
    }
}

function inputOutofBounds(){
    if(parseInput() < 1 || parseInput() > 100){
        return true;
    }

    else{
        return false;
    }

}

function seedNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}






