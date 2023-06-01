// Create new Calculator
// importance: 5
// Create a constructor function Calculator that creates objects with 3 methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
// For instance:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


function Calculator() {
    this.read = function(){
        this.a=+prompt("Enter the value of a",'');
        this.b=+prompt("enter the value of b",'');
    };
    this.sum = function(){
        return this.a + this.b;
    };
    this.mul = function(){
        return this.a * this.b;
    };
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );