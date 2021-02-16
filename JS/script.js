//Challenge-1:Age in days
function dayConverter(){
    var birthYear = prompt('Enter the year you were born in A.D...friend!');
    if((birthYear>0)&&(birthYear<2021)){
        var days =(2020 - birthYear) * 365;
        var display =document.createElement('h1');
        var textdisplay = document.createTextNode('You are ' + days + ' days old..');
        display.setAttribute('id','finalResult');
        display.appendChild(textdisplay);
        document.getElementById('result').appendChild(display);
    }else{
        var display =document.createElement('h1');
        var textdisplay = document.createTextNode('Sorry! Invalid input..');
        display.setAttribute('id','finalResult');
        display.appendChild(textdisplay);
        document.getElementById('result').appendChild(display);
    }
};
function reSet(){
    document.getElementById('finalResult').remove();
};

//Challenge-2:Random cat generator
function generateCat(){
    var image = document.createElement('img');
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    document.getElementById('display-cat').appendChild(image);
};
//challenge-3: rock,paper,scissors
function finalGame(yourChoice){
    //console.log(yourChoice);
    var playerChoice,computerChoice;
    playerChoice= yourChoice.id;
   // console.log(playerChoice);
    var number = generateRandom();
    //console.log(number);
    computerChoice = numberTochoice(number);
    //console.log(computerChoice);
    var result = decideWinner(playerChoice,computerChoice);
    //console.log(result);
    //returns [1,0] i.e human winner computer loser and so on
    var message = finalMessage(result);//{'message':'You win!','color':'green'}
    rpsFrontend(playerChoice,computerChoice,message);
};
function generateRandom(){
    return Math.floor(Math.random()*3);
};
function numberTochoice(number){
    return ['rock','paper','scissors'][number];
};
//console.log(numberTochoice(1));
function decideWinner(humanChoice,botChoice){
    var dbsdeciding = {
        'rock': {'rock':0.5,'paper':0,'scissors':1},
        'paper': {'rock':1,'paper':0.5,'scissors':0},
        'scissors':  {'rock':0,'paper':1,'scissors':0.5}
    };
    var yourScore = dbsdeciding[humanChoice][botChoice];
    //var computerScore = dbsdeciding[botChoice][humanChoice];
    console.log(yourScore);
    return yourScore;
};
//decideWinner('paper','paper');
function finalMessage(score){
    if(score===1){
        return {'message':'You win!','color':'green'};
    }else if(score===0.5){
        return {'message':'It\'s a tie','color':'yellow'};
    }else{
        return {'message':'You lost!','color':'red'};
    };
};
function rpsFrontend(human,computer,Message){
    var dbsaccess = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    //creating divs to display
    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+ dbsaccess[human] +" ' height = 150px width = 150px style='box-shadow: 0px 10px 50px rgba(4,105,4,1);'>";
    messageDiv.innerHTML = "<h1 style='color:"+ Message['color'] + "; padding: 30px; font-size: 60px;'>"+ Message['message']+"</h1>";
    botDiv.innerHTML = "<img src='"+ dbsaccess[computer] +" ' height = 150px width = 150px style='box-shadow: 0px 10px 50px rgba(155,5,5,1);'>";

    //display
    document.getElementById('resultDisplay').appendChild(humanDiv);
    document.getElementById('resultDisplay').appendChild(messageDiv);
    document.getElementById('resultDisplay').appendChild(botDiv);
};

//challenge 4: counter
let count = 0;
displayCount();
function increaseValue(){
    count++;
    displayCount();
};
function decreaseValue(){
    count--;
    displayCount();
};
function displayCount(){
    document.getElementById('output').innerHTML= count;
}
function resetValue(){
    count =0;
    displayCount();
}

// Challenge-5 :Digital clock

let showTime = () =>{
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var am_pm = "AM";
    if(hours > 12){
        hours = hours - 12;
        am_pm = "PM"
    }else{
        am_pm = "AM";
    }
    if(hours == 0){
        hours=12;
    }
    hours = (hours < 10)?`0${hours}`:hours;
    minutes = (minutes <10)?`0${minutes}`:minutes;
    seconds = (seconds < 10)? `0${seconds}`:seconds;
    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds} ${am_pm}`;
}
setInterval(showTime,1000);
//showTime();