
//Selects a random number between 19-120//
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19);
    console.log(Random)

    $('#randomNumber').text(Random);

    //Adding Random Number between 1-112 for each jewel//
   var num1 = Math.floor(Math.random() * 11 + 1);
   var num2 = Math.floor(Math.random() * 11 + 1);
   var num3 = Math.floor(Math.random() * 11 + 1);
   var num4 = Math.floor(Math.random() * 11 + 1);
   


})