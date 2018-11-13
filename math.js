var userNum1;
var userNum2;
var message;

alert("Let's Do Some Math");
userNum1 = prompt("Please enter a number");
userNum1 = parseFloat(userNum1);
userNum2 = prompt("Please enter another number");
userNum2 = parseFloat(userNum2);

if (userNum2 === 0) {
alert("The second number is 0. You can't divide by zero. Reload and try again.");
} else if ( isNaN(userNum1) || isNaN(userNum2) ) {
alert("At least one of the values you typed is not a number. Reload and try again.");
} else {

message = "<h1>Math with the numbers " + userNum1 + " and " + userNum2 + "</h1>";
message += userNum1 + " + " + userNum2 + " = " + (userNum1 + userNum2);
message += "<br>";
message += userNum1 + " * " + userNum2 + " = " + (userNum1 * userNum2);
message += "<br>";
message += userNum1 + " / " + userNum2 + " = " + (userNum1 / userNum2);
message += "<br>";
message += userNum1 + " - " + userNum2 + " = " + (userNum1 - userNum2);
message += "<br>";
document.write(message);
}
