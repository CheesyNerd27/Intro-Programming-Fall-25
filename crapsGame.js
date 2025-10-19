// Funtions are a nice way to organize our code and make it reusable
// Use descriptive function names
// () can hold function argument - if you need to pass in information to the function
function PlayCraps(){
    // Log that the function was called
    console.log("PlayCraps() function was called");

    // Roll die 1
    let Roll1 = RollDice();

    // Roll die 2
    let Roll2 = RollDice();

    Console.log("Roll1=" + Roll1);
    Console.log("Roll2=" + Roll2);

    // Caluclate the rolls
    let Sum = Roll1 + Roll2;

    // Variable to hold the result
    let Result = "";

    // See if the user lost - if they rolled a sum of 7 or 11
    // || means or
    // && means and
    if(Sum == 7 || Sum == 11){
        console.log("You Lost");
        Result = "You Lost!";
    }
    // Check if we rolled an even number
    // modulus - % - Do a division problem and we get the remainder as the result
    // 2/2 = 1 with no remainder = even number
    // 4/2 = 2 with no remainder = even number
    // 5/2 = 2 with a remainder = odd number
    // Roll1 % 2 == 0 - this will be true if we have an even number
    // We also need to make sure that Roll1 and Roll2 were the same
    else if(Roll1 % 2 == 0 && Roll1 == Roll2){
        console.log("You Won");
        Result = "You Won!";
    }
    // The catch-all else statement if neither above statement valued true
    else{
        console.log("You Push");
        Result = "You Push";
    }

    // Display Roll 1 in the Roll 1 div
    document.getElementById("divRoll1").textContent = "Roll 1: " + Roll1;

    // Display Roll 2 in the Roll 2 div
    document.getElementById("divRoll2").textContent = "Roll 2: " + Roll2;

    // Display Sum in the Sum div
    document.getElementById("divSum").textContent = "Sum: " + Sum;

    //Display Result in the Result div
    document.getElementById("divResult").textContent = "Result: " + Result;

}

//Create a function to generate a random number
function RollDice(){
    // Create a variable to hold a random number
    // Math.random() is a built in JavaScript function that generates a random number   
    let Die = Math.random() * 6; // Multiplies number is the possible maximum

    // Round the number and return the value
    return Math.ceil(Die);
}