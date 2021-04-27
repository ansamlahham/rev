'use script' ;
let score = 0
let userName = prompt ('What is your name?') ;

let userAnswer = prompt ('Do you think I live in Jordan ?');
switch (userAnswer.toUpperCase()){
    case 'Y' :
    case 'YES' :

    alert ('correct');
    score ++ ;
    break ;

    case 'N' :
    case 'NO' :

    alert ('you are not correct');
    break ;

    default :
    alert ('Please enter yes or no');
}


let userInput = prompt ('Do you think I am single ?');
switch (userInput.toUpperCase()){
    case 'Y' :
    case 'YES' :

    alert ('correct');
    score ++ ;
    break ;

    case 'N' :
    case 'NO' :

    alert ('you are not correct');
    break ;

    default :
    alert ('Please enter yes or no');
}
let userGuess = prompt ('Do you think I graduated?');
switch (userGuess.toUpperCase()){
    case 'Y' :
    case 'YES' :

    alert ('correct');
    score ++ ;
    break ;

    case 'N' :
    case 'NO' :

    alert ('you are not correct');
    break ;

    default :
    alert ('Please enter yes or no');
}

for (let i=0 ; i<4 ; i++) {
let userOutput = prompt ('What do you think my favirouite number ?');
if (userOutput === '7'){
alert ('Your correct');
score ++ ;
break;

}else{
    alert ('Opps try again!');
}
}
alert ('My fav number is 7');

document.write (' welcome to my page ' + userName + score );