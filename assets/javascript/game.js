
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
   
    var userTotal = 0;
    var wins = 0;
    var losses = 0; 

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    //Resets the Game//
    function reset(){
        Random = Math.floor(Math.random() * 101 + 19);
        $("#randomNumber").text(Random);
        num1 = Math.floor(Math.random() * 11 +1);
        num2 = Math.floor(Math.random() * 11 +1);
        num3 = Math.floor(Math.random() * 11 +1);
        num4 = Math.floor(Math.random() * 11 +1);
        userTotal = 0;
        $("#finalTotal").text(userTotal);
    }

    //Adds to the wins Total//
    function winner(){
        alert("YOU WON!!!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    //Adds to the Losses Total//
    function loser(){
        alert ("YOU LOST!!!")
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }

    $("#red").on("click", function(){
        userTotal = userTotal + num1;
        console.log("New userTotal= "+ userTotal);
        $("#finalTotal").text(userTotal);
            if(userTotal === Random){
                winner();
            }else if ( userTotal > Random){
                loser();
            }
    })
    $("#green").on("click", function(){
        userTotal = userTotal + num2;
        console.log("New userTotal= "+ userTotal);
        $("#finalTotal").text(userTotal);
            if(userTotal === Random){
                winner();
            }else if ( userTotal > Random){
                loser();
            }
    })
    $("#pink").on("click", function(){
        userTotal = userTotal + num3;
        console.log("New userTotal= "+ userTotal);
        $("#finalTotal").text(userTotal);
            if(userTotal === Random){
                winner();
            }else if ( userTotal > Random){
                loser();
            }
    })
    $("#orange").on("click", function(){
        userTotal = userTotal + num4;
        console.log("New userTotal= "+ userTotal);
        $("#finalTotal").text(userTotal);
            if(userTotal === Random){
                winner();
            }else if ( userTotal > Random){
                loser();
            }
    })
})