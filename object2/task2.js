// Create a calculator
// importance: 5
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


let calculator = {
    sum() {
        c = this.a + this.b;
        return c;
    },
    Mul() {
        d = this.a * this.b;
        return d;
    },
    read() {
        this.a = +prompt("Enter the value of a",'');
        this.b = +prompt("Enter the value of b",'');
    },
};

calculator.read();
alert (calculator.sum());
alert ( calculator.Mul() );