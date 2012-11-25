alert("JavaScript works!");

/*
Author: Robert Woods
Date: 11-23-12
Project 1 SDI
My Time Management
*/

// setting the variables

var myName = "Robert";
    boss = "Chef";
    workEarly = true;
    homeWorkDone = true;
    hoursEarly = 3;
    
// initial output

console.log( "Today " + boss + " called " + myName + " to see if " 
			+ myName + " could come into work " + hoursEarly + " hours early. " );
console.log( "The " + boss + " was told by " + myName + " that homework comes first over coming into work early because "
			 + myName + " has a certain amount of hours set aside for homework. " );
console.log( "The " + boss + " told " + myName + " to do his best to finish quickly. " ); 
console.log( "If " + myName + " gets his homework done in time " 
			+ myName + " can go into work early. " , workEarly , homeWorkDone  );
console.log( "If " + myName + " cannot get his homework done he will not go in early. ");

// if/else section

if ( homeWorkDone === true ){
  if ( hoursEarly === 3 ){
	if ( workEarly === true ){
	     console.log( " great! " + myName + " finished his homework so he can go to work early to help the "
	                 + boss + "." );
	    } else {
		    console.log( " The homework took much longer than expected. " );
		};
	} else {
		console.log( " The homework is finished but " + myName + " needs to study with the extra time. " );
	};
} else {
     console.log( " Sorry " + boss + " the dog ate the homework and it needs to be redone. " );
};
 

		
		
		


 
           



			
			





