 /* FEET TO MILE 
 --------------------*/

function feetToMile(givenFeet){
    var milesDefaults = 0.000189394; // Formula: 1 foot = 0.000189394 mile --- Source Google
    if(givenFeet > 0){ // check number if positive
        var result = givenFeet*milesDefaults;
        return result;
    }else{
        return "You must give a Postive Number";
    }
}
var feetOutput = feetToMile(12);
console.log("Given Feet to Mile = ",feetOutput);


/* WOOD CALCULATOR
----------------- */

function woodCalculator(givenChair, givenTable, givenBed){
    var chair = 1; //Chair Default Value
    var table = 3; //Table Default Value
    var bed = 5; //Bed Default Value

    if((givenChair && givenTable && givenBed) > 0 ){

        var totalChair = chair*givenChair; // Get total Chair wood
        var totalTable = table*givenTable; // Get total Table wood
        var totalBed = bed*givenBed; // Get total Bed wood
        var totalWood = totalChair + totalTable + totalBed;
        return totalWood;
    }else{
        return "You given number must be a Postive Number";
    }

}

var totalWoodCalculate = woodCalculator(5,1,1);
console.log("Total Wood: ", totalWoodCalculate);


/* BRICK CALCULATOR
----------------- */

function brickCalculator(givenTala){

    if(givenTala > 15 && givenTala <= 20){
        var brick = (12*1000)*givenTala;
        return brick;
    }
    else if(givenTala > 20){
        var brick = (10*1000)*givenTala;
        return brick;
    }else{
        var brick = (15*1000)*givenTala;
        return brick;
    }
}

var totalBrick = brickCalculator(16);
console.log("Total Brick: ", totalBrick);



/* TINY FRIENDS
----------------- */

function tinyFriends(friends){
    var smallName = friends[0];
    for(var i = 0; i < friends.length; i++){
        if(friends[i].length > 0){
            var currentName = friends[i];
            //console.log(smallName.length, currentName.length);
            if(smallName.length > currentName.length){
                smallName = currentName;
            }
        }else{
            return "You must give a Name. Empty array not Supported.";
        }
        
    }
    return smallName;
}

var tinyFriendsResult = tinyFriends(['Joney', 'Spark', 'Jui', 'Farhana', 'jui', 'ju', 'j']);

console.log("Tiny Frined Name: ", tinyFriendsResult);