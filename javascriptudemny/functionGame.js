function getUserChoice(userInput){
    userInput = userInput.toLowerCase(); //convierte a minusculas todo lo que metemos

    //if para comprobar que esta bien introducido por parametro
    if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
        return userInput;
    } else {
        return console.log('Error');
    }

}


//getUserChoice('cosa')


function getComputerChoice() {

    var randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'bear';
    } else if (randomNumber === 1) {
            return 'human';
        }    else {
                 return 'gun';
            }
}

// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());

function determineWinner(userChoice,computerChoice){

    if (userChoice === computerChoice) {
        return 'Salio corbata !!!';
    }

    if (userChoice === 'human') {
        if (computerChoice === 'bear') {
            return ' el pc  OSO';
        } else {
            return 'perdiste humano';
        }
    }

    if (userChoice === 'bear') {
        if (computerChoice === 'gun') {
            return ' el pc salio gun ';
        } else {
            return 'perdiste bear  ';
        }
    }

    if (userChoice === 'gun') {
        if (computerChoice === 'human') {
            return 'el pc salio humano ';
        } else {
            return 'perdiste  gun ';
        }
    }
}

function playGame(){

    let promptUserChoice = prompt('Escoge entre bear, human o gun: ');

    let userChoice = getUserChoice(promptUserChoice);

    let computerChoice = getComputerChoice();

    console.log(determineWinner(userChoice,computerChoice));
}


