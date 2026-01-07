// const value cannot be changed
const accountId =700759   

// two ways to define variables are var amd let
let accountEmail= "bhattprakhar17@gmail.com"
var accountPassword = "Pabhat123"
whichCity = "uttarpradesh"

// if value is not assigned to varibales then javascript keep it undefined 
let whichState;


// accountId = 2 this is not allowed`
accountEmail= "bhattprakhar1325@gmail.com"
accountPassword = "Pabhat1234"
whichCity = "varanasi"


console.log( accountId);

// way to print all variable at once
console.table([accountEmail, accountId, accountPassword, accountState]);

/*
prefer not to use VAR , because of issue in block scope and functional scope
*/

