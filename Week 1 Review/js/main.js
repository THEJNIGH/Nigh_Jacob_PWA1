/**
 * Created by jessicagarlic on 3/7/15.
 * Jacob Nigh
 * PWA1
 * Mar 7, 2014
 */

//alert("Yo");

// Functions!

var width = 10;
var height = 25;

var total = calcArea(width, height); //function and pass arguements
calcArea(40, 50); 

function calcArea(w,h) // basic function and catches width and height in the parameters (w,h);
{
		var area = w * h;
		console.log(area);
		return area; // area now equals total
}

// Generate random number

var min = 180;
var max = 220;

function randomize(mn, mx)
{
		var randomNumber = Math.round(Math.random() * (mx - mn) + mn);
		return randomNumber;
}
var total = randomize(min, max);
console.log(total);

// Anon Function

var width = 10;
var height = 20;

 var areaTotal = function(w, h)
 {
	 var area = w * h;
	console.log(area);
	return area; 
 }
 
 var total = areaTotal(width, height);