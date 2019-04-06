//html sections needed: header, game instructions, random number display, characters display, score display, win/loss display


//define variables
var randomNumber =  Math.floor((Math.random() * 100) + 50);
console.log(randomNumber)
var counter = 0;
var damageNumber = Math.floor(Math.random() * 21);
console.log(damageNumber)
var wins = 0;
var losses = 0;




//generate random HP number 


//display in correcrt div
$("#randomHP").text(randomNumber);

// TODO assign images random damage value with a function?

$("#merle").attr("data-damagevalue", damageNumber);

//when player clicks on character button, a random number of points damage is added to their total HP

$(".character-image").on("click", function() {
    var damageValue = ($(this).attr("data-damagevalue"));
    damageValue = parseInt(damageValue);
    counter += damageValue;
    console.log(counter)
    $("#damage").text(counter);

//TODO figure out why the counter is not going up on immediate win/loss
//player WINS if total damage matches random HP number
if (counter === randomNumber) {
    $("#wins").text(wins++);
    $("#win-lose").text("YOU WIN!").css("color", "green")
  }

//player LOSES if total damage is above random HP number
  else if (counter >= randomNumber) {
    $("#losses").text(losses++);
    $("#win-lose").text("YOU LOSE.").css("color", "red")   
    reset()
  }


});

//TODO reset function generate new randomNumber, assign new damageNumbers, clear win-lose div, reset counter to 0
function reset() {
    counter = 0;
    $("#win-lose").empty();
    $("#randomHP").text(randomNumber);
     
}

//TODO loop audio FOR SURE maybe make each onclick have a boop sound if you have time


