/**
 * GUESSING GAME:
 *
 * Created By: Jacob Nigh
 * Date: Mar 20, 2015
 * 
 * GUESSING GAME
 */

//Game variables
(function (){

	var guess = 0;
	var guessR = 3;
	var guessM = 0;
	var placeHolder;
	
	var randomNum = Math.floor(Math.random() * (10 - 1)) + 1;
	console.log(randomNum);
	
	var obj = {
		input: document.querySelector('#input'),
		output: document.querySelector('#output'),
		button: document.querySelector('button')
	};
	
	//var input = document.querySelector('#input');
	//var output = document.querySelector('#output');
	//var button = document.querySelector('button');
	

	
	var buttonClick = function(e)
		{
			console.log("Im running");
			validation();	
		}
		
	
	function validation()
		{
			placeHolder = parseInt(obj.input.value);
			
			console.log(placeHolder);
			
			if(isNaN(placeHolder))
				{
					alert('The value you have enter was not a number! Please enter a number between 1-10');	
				}
			else if(placeHolder === "")
				{
					alert('The value you have enter was blank! Please enter a number between 1-10');
				}
			else if(placeHolder < 1 || placeHolder > 10)
				{
					alert('The number you have entered was not in between 1 and 10! Please enter a number between 1-10');
				}
				else
				{
					runGame();
				}
		}
		
	function runGame()
		{
			guessR--;
			guessM++;
			guessInfo = "Guesses remaining: " + guessR + " Guess you have made: " + guessM;
			placeHolder = parseInt(input.value);
		
			if(placeHolder < randomNum)
				{
					obj.output.innerHTML = "The number you have entered is too low! " + guessInfo;
				}
			else if(placeHolder > randomNum)
				{
					obj.output.innerHTML = "The number you have entered us too high! " + guessInfo;	
				}
			else if(placeHolder = randomNum)
				{
					obj.output.innerHTML = "You have guessed the correct number! Congratulations! " + guessInfo;	
					
				}
			if(guessR === 0 && guessR != randomNum)
				{
					obj.output.innerHTML = "You have reached the guess limit.";
					obj.button.removeEventListener('click', buttonClick, false);	
				}
			
		
		}
		
	
		
		
	obj.button.addEventListener("click", buttonClick, false);
		
})();

/*

Open the HTML file associated with this assignment and take note of the elements that have an id attribute and also the button.
Create a variable to store a random integer within the range 1-10.
Create variables that reference the DOM(html) elements or 1 object literal.
Create an .addEventListner event listener on the guess button to listen for a click event.
When the guess button is clicked, evaluate your guess with the number the computer has chosen.
Create a function to validate the users input:
	-Validate that a number was entered -- AND
	-Validate that the number entered is between 1 and 10
If your guess is higher than the computer's number then display appropriate message in the HTML.
If your guess is lower than the computer's number then display appropriate message in the HTML.
If your guess is equal to the computer's number then display appropriate message and end the game.
Tally all the wrong guesses and end the game after the 3rd incorrect guess and show appropriate game over message in the HTML.
Deactivate the button by removing the event listener when the game is over.
EXTRA CREDIT: Use a keyboard event for the ENTER button that also acts like clicking on the guess button.


*/