

	/********************************** BATTLESHIP! ***********************************
	The board is 7 spaces long (zero counts as a space) and a ship is 3 spaces long
	User can pick a number between 0-6 and try to hit the ship
	If the user hits the ship, they are alerted. They have to "hit" all three spaces 
	occupied by the ship to "SINK" the battleship.
	Once the ship is sunk, they win and are alerted to how many guesses it took so
	SINK THE BATTLESHIP!
	**********************************************************************************/
	
	
//CREATE VAR's for 3 LOCATIONS ON THE BOARD
	var randomLoc = Math.floor(Math.random() * 5);
	var space2 = 4;
	var space3 = 5;
//CREATE VARIABLES FOR INITIAL GUESS, HITS, & GUESSES (TALLY SHOULD START AT 0)
	
	var guess;
	var hit = 0;
	var guesses = 0;

//CREATE VARIABLE TO DETERMINE IF SUNK IS TRUE OR FALSE (INITIATE AS FALSE)

	var sunk = false;

//CREATE A WHILE LOOP THAT WILL RUN UNTIL THE SHIP IS SUNK

	while(sunk == false){ 
	 
		guess = prompt("Guess a number between 0-6");
		
		if(guess > 6 || guess < 0){
			 
			 alert("I'm sorry that was not in the range of 0-6." + "\n Please enter a number between 0-6");
		} 
		else 
		{ 
			guesses++;
			
			if(guess == randomLoc || guess == space2 || guess == space3){
				
				alert("Hit!");
				hit++;
					if(hit == 3){
	 
					sunk = true;
					alert("This ship is sunk!");
					
					}
					}
					else {
						alert("Miss");
					}
			}
	}
		alert("YOU TOOK " + guesses + " GUESSES TO SINK THE BATTLESHIP");
	//PROMPT USER TO GUESS A NUMBER ON THE BOARD (0-6)
	
		
	
	//CREATE A CONDITIONAL STATEMENT TO VALIDATE THE USER'S GUESS
	//IS THE GUESS BETWEEN 0 AND 6?
	
	
	
	//INSIDE OF THE ELSE STATEMENT, TALLY GUESSES FOR EACH ATTEMPT
	
	
	
		//USE A NESTED CONDITIONAL INSIDE OF THE ELSE STATEMENT
		//IF THE USER'S GUESS MATCHES ANY OF THE SHIPS OCCUPIED SPACES, ALERT "HIT"
	
	
	
			//TALLY HITS BY ADDING ONE EACH TIME THE LOOP RUNS
			
			
			
			//CONDITION - IF USER REACHES 3 HITS, THEN THE SHIP IS SUNK
		
		
		
			//ELSE ALERT MISS!	
			
			
//CREATE VAR AND ALERT FOR STATS (YOU TOOK ? GUESSES TO SINK THE BATTLESHIP)



			////////////// ON YOUR OWN ///////////////////

// 	Try to replace location 1 with a random location
// 	USE: var randomLoc = Math.floor(Math.random() * 5); FOR YOUR FIRST VAR
