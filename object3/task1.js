// Two functions – one object
// importance: 2
// Is it possible to create functions A and B so that new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true
// If it is, then provide an example of their code.

alert("yes its possible");

let obj={}
function A() {return obj;} 
function B() { return obj; }
alert (new A() == new B());