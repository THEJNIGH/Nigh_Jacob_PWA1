
/*******************************************
STUDENT ACTIVITY 1:
1.  Use substr() to console.log 'JavaScript!' from str1.
console.log(str1.substr(7, 11));
2.  Use concat() to console.log 'I love JavaScript ! JavaScript loves me!' with str1 and str2.
********************************************/
var str1 = 'I love JavaScript! ';
var str2 = 'JavaScript loves me!';
var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


console.log(str1.substr(7,11));
console.log(str1.concat(str2));


/*******************************************
STUDENT ACTIVITY 2:
--- USE THE var's from STUDENT ACTIVITY 1 ---

1.  Use substring() to console.log 'JavaScript' from str2.
********************************************/


console.log(str2.substr(0,10));



/*******************************************
STUDENT ACTIVITY 3:
--- USE THE var's from STUDENT ACTIVITY 1 ---

1. Use toLowerCase() to console.log the str1 all in lowercase letters.
2. Use toUpperCase() to console.log the str1 all in uppercase letters.
********************************************/

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(abc.toUpperCase());
console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(abc.toLowerCase());


/*******************************************
STUDENT ACTIVITY 4:

1.  What method would you use to console.log the variable dec with two decimals.
2.  Use toString() to console.log the type of num.
 ********************************************/

var num = 4567896;
var dec = 33.123456;

console.log(dec.toFixed(2));
console.log(num.toString());



/*******************************************
 STUDENT ACTIVITY 5:

 1.  concatenate the firstQtr and secondQtr arrays and store the results in the
        variable combined
 2.  console.log the results stored in the variable combined
 3.  combine all three arrays and stored the results in the variable combined
 4.  console.log the results stored in the variable combined

 Use the combined variable for items 5 and 6 the below:
 5.  join the array elements into a string and console.log the results
 6.  remove the last element of the array and console.log the results and the new array
 7.  use array "secondHalfYr", and reduce the array to "Sept" & "Oct"
        and console.log the results
 ********************************************/

    var firstQtr = ["Jan", "Feb", "Mar"];
    var secondQtr = ["Apr", "May", "Jun"];
    var secondHalfYr = ["Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
 	
	var combined = firstQtr.concat(secondQtr);
	var combined1 = combined.concat(secondHalfYr);
	
	console.log(combined);
	console.log(combined1);
	
	console.log(combined1.join(","));
	console.log(combined1.pop());
	console.log(combined1);
	
	console.log(secondHalfYr.slice(2,4));




/*******************************************
 STUDENT ACTIVITY 6:

	1.  create a "Switch" conditional that does the following:
		a.  have a var named "age" initialized to a number
		b.  if age 13 then console.log "child"
			if age 18 then console.log "adult"
			if no age then console.log "No answer"
********************************************/
	
	var age = 18;
	switch(age)
	{
		case 13:
			console.log("Child");
			break;
		
		case 18:
			console.log("Adult");
			break;
		
		case "":
			console.log("No answer");
			break;
		default:
			console.log("We cant tell your age");
			break;
	};





/*******************************************
 STUDENT ACTIVITY 7:

	1.  create an array with the following cartoon characters
		(Superman, Batman, Wolverine, Iceman)

		a.  create a for loop using the slower method (3 parameters)
			- in the loop just console.log the values
		b.  create a for loop using the faster method (4 parameters)
			- in the loop just console.log the values
********************************************/

	var comics = ["Superman","Batman","Wolverine","Iceman"];
	
	for(var i = 0; i < comics.length; i++)
	{
		console.log("The current super hero is: ",comics[i]);	
	}

	for(var i = 0, max = comics.length; i < max; i++)
	{
		console.log(" I have " + comics[i] + " as one of my super heros"); 
	}

/*******************************************
    STUDENT ACTIVITY 8: (More Practice):

     1.  output "name" in lowercase
     2.  output "name" in uppercase
     3.  output the character in the 3rd index
     4.  output the index number where the work "nice" us located
     5.  output the characters in "name" between indexes 10 & 14
     6.  create a array variable using "name", and output the array
     7.  output the item in index 4
     8.  join all elements of the array separated by a "|"
     9.  output the array in reverse order
     10. output the current array without the first item
     11. output the array with a new item at the end of the array
     - add "NEW VALUE"
     12. output the array without "NEW VALUE"
********************************************/

    console.log('------ More PRACTICE ----------');

    var name = 'This is a nice change of pace';
	

	console.log(name.toLowerCase());
	console.log(name.toUpperCase());
	console.log(name.charAt(3));
	console.log(name.indexOf("nice"));
	console.log(name.slice(10,14));
	var array = ["This","is","a","nice","change","of","pace"];
	console.log(array);
	console.log(array[4]);
	console.log(array.join("|"));
	console.log(array.push("NEW VALUE"));
	console.log(array);
	
