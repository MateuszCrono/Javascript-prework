
const randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);


function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';}
    if(argMoveId == 2){
        return 'papier';}
    if(argMoveId == 3){
        return 'nożyce';}
    else {}
    return 'nieznany ruch';}


const computerMove = getMoveName(randomNumber)
printMessage('PC wybrał: ' + computerMove);

const playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

const playerMove = getMoveName(playerInput)
printMessage('Twój ruch to: ' + playerMove);

function displayResult(ComputerMove, PlayerMove){
    printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
  
    if( computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }  
    if( computerMove == 'kamień' && playerMove == 'nożyce'){
        printMessage('Komputer wygrał!');
    }
    if( computerMove == 'kamień' && playerMove == 'kamień'){
        printMessage('Mamy remis!');
    }
    if( computerMove == 'papier' && playerMove == 'papier'){
        printMessage('Mamy remis!');
    }
    if( computerMove == 'papier' && playerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }
    if( computerMove == 'papier' && playerMove == 'kamień'){
        printMessage('Komputer wygrał!');
    }   else if( computerMove == 'nożyce' && playerMove == 'papier'){
            printMessage('Komputer wygrał!');
    }   else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
            printMessage('Mamy remis!');
    }   else if( computerMove == 'nożyce' && playerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
    }   else if( playerMove == 'nieznany ruch')
            printMessage('Coś nie pykło');
    }
    
    displayResult (computerMove, playerMove);
    