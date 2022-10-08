var integer1;
var integer2;
var input;

input = window.prompt("Enter first integer");
integer1 = parseInt(input);

input = window.prompt("Enter second integer");
integer2 = parseInt(input);

if(integer1===integer2) {
    document.write("The Two integers are same");

} else if(integer1>integer2) {
    document.write("Larger number is:" + integer1);
} else {
    document.write("Larger number is:" + integer2);
}