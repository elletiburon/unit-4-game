//html sections needed: header, game instructions, random number display, characters display, score display, win/loss display


//define variables
var randomNumber = 0;
console.log(randomNumber)
var counter = 0;
// var damageNumber = Math.floor(Math.random() * 21);
// console.log(damageNumber)
var wins = 0;
var losses = 0;


$(document).ready(function(){
    reset();
});




//when player clicks on character button, a random number of points damage is added to their total HP

$(".character-image").on("click", function () {
    $("#win-lose").text(" ");

    var damageValue = ($(this).attr("data-damagevalue"));
    damageValueIn = parseInt(damageValue);
    counter += damageValueIn;
    console.log(counter)
    $("#damage").text(counter);

    
    //player WINS if total damage matches random HP number


    if (counter === randomNumber) {
        $("#wins").text(++wins);
        $("#win-lose").text("YOU WIN!").css("color", "green")
        reset();
        
    }
    //player LOSES if total damage is above random HP number
    else if (counter > randomNumber) {
        $("#losses").text(++losses);
        $("#win-lose").text("YOU LOSE.").css("color", "red")
        reset();
        
    }
    console.log("test", counter, randomNumber, counter===randomNumber);

});



//reset funtion clears and resets all the shit that needs clearing and resetting

function reset() {

    counter = 0;
    $(this).attr("data-damagevalue",'0');

    randomNumber = Math.floor((Math.random() * 100) + 50);
    $("#randomHP").text(randomNumber);

    var merleR= Math.floor(Math.random() * 21) + 1;
    $("#merle").attr("data-damagevalue",merleR);
    var taakoR= Math.floor(Math.random() * 21) + 1;
    if (merleR == taakoR){
        taakoR= Math.floor(Math.random() * 21) + 1;
    }
    $("#taako").attr("data-damagevalue", taakoR);
    var magnusR= Math.floor(Math.random() * 21) + 1;
    if (magnusR == taakoR || magnusR == merleR){
        magnusR= Math.floor(Math.random() * 21) + 1;
    }
    $("#magnus").attr("data-damagevalue", Math.floor(Math.random() * 21) + 1);
    var angusR = Math.floor(Math.random() * 21) + 1;
    if (angusR == taakoR || angusR == merleR || angusR == magnusR){
        angusR= Math.floor(Math.random() * 21) + 1;
    }
    
    $("#angus").attr("data-damagevalue", Math.floor(Math.random() * 21) + 1);

   

}



