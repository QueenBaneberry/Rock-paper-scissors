//starting score and define varables;
let humanScore=0;
let computerScore=0;
//create function that calls on current scores and alert a string declaring them
function score(){
    humanScore;
    computerScore;
    return "Human Score:"+humanScore+" Computer Score:"+computerScore
 }
//select random value from an array of values to represent the computer play
function computerPlay1() {
    let computerChoices=["rock","paper","scissors"];
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}
//prompts user for their choice and converts it to lower case
function personPlay1() {
choice=prompt ("Please choose from the following options: rock, paper, or scissors");
choseLowerCase=choice.toLowerCase();
return choseLowerCase
}
//game function represents how the game will actually play out 
function game(personPlay,computerPlay){
personPlay=personPlay1()
computerPlay=computerPlay1()
if(personPlay==="rock"&&computerPlay==="rock"||personPlay==="paper"&&computerPlay==="paper"||personPlay==="scissors"&&computerPlay==="scissors")
{
 return alert("You have tied this round");
}
if (personPlay==="rock"&&computerPlay==="scissors"||personPlay==="paper"&&computerPlay==="rock"||personPlay==="scissors"&&computerPlay==="paper"){
    ++humanScore;
 return alert("You have won this round");
}
if (personPlay==="rock"&&computerPlay==="paper"||personPlay==="paper"&&computerPlay==="scissors"||personPlay==="scissors"&&computerPlay==="rock"){
    ++computerScore;
 return alert("You have lost this round");
}
else{
   releaseEvents
  return alert ("Please choose from the approved choices");
}
};
//compares score and declares winner
function declareWinner(){
    if (humanScore>computerScore){
     return alert ("You have beaten the machines");
    }
    if (computerScore>humanScore){
     return alert( "You lost to the machines") 
    }
    else{
     return alert("A tie! Double or nothing?");
    }
};
//play game until someone has 5 points and declare winner (fullgame)
function gamePlay(){
   while (humanScore<5&&computerScore<5) {
       game();
   }
   return declareWinner()
}
