/**
 * Duel Fight Game -
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!!!"); //Console logging the phrase fight

    //player name
    var playerOneName = "Spiderman"; // delcaring variable playerOneName to spiderman
    var playerTwoName = "Batman"; // delcaring variable playerTwoName to Batman

    //player damage
    var player1Damage = 20; // declaring variable to playerOne damage to 20
    var player2Damage = 20; // declaring variable to playerTwo damage to 20

    //player health
    var playerOneHealth = 100; // declaring variable of player ones health to 100
    var playerTwoHealth = 100; // delcaring variable of player twos health to 100

    //initiate round 
    var round = 0;

    function fight(){
        alert(playerOneName + ":" + playerOneHealth + "  *START*  " + playerTwoName + ":" + playerTwoHealth); // Function to alert  players ones health and name and also start in the middle as well as player twos health and name on the other side of start
        for (var i = 0; i < 10; i++) //for loop if i is equal to 0 and i is less than 10 keep adding
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5; // declaring variable of player ones damage times .5
            var minDamage2 = player2Damage * .5; // declaring variable of player twos damage times .5
            var f1 = Math.floor(Math.random()*(player1Damage - minDamage1) + minDamage1); // declaring variable to get random damage of player one
            var f2 = Math.floor(Math.random()*(player2Damage - minDamage2) + minDamage2); // declaring variable to get random damage of player two

            //inflict damage
            playerOneHealth -= f1; // player ones health minus equals to variable f1
            playerTwoHealth -= f2; // player twos health minus equals to variable f2

            console.log(playerOneName + ": " + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth); // console logs players health after round 1 

            //check for victor
            var result = winnerCheck(); // anonymous function to check for the winner
            console.log(result); // logging results
            if (result === "no winner") //if statement say that if there is no winner then it adds another around and they go again
            {
                round++; // round goes up one
                alert(playerOneName + ":" + playerOneHealth + "  *ROUND " + round + " OVER" + "*  " + playerTwoName + ":" + playerTwoHealth); //alert stating both players health and name

            } else{
                alert(result); //else alerts the results of the winner
                break; //breaks afterwards to stop the program
            };

          };
    };

    function winnerCheck(){ //if no winner then they both died and no one wins
        var result = "no winner";
        if (playerOneHealth < 1 && playerTwoHealth < 1)
        {
            result = "You Both Die";
        } else if(playerOneHealth < 1){ //if not player one wins
            result = playerTwoName + " WINS!!!"
        } else if (playerTwoHealth < 1) // if not player two wins
        {
            result = playerOneName + " WINS!!!"
        };
       return result; // log results
    };

    /*******  The program gets started below *******/
    fight(); //program gets restarted

})();