// Multiply numeric property values by 2

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.


describe("multiplyNumeric", function() {
    it("multiplies all numeric properties by 2", function() {
      let menu = {
        width: 200,
        height: 300,
        title: "My menu"
      };
      let res = multiplyNumeric(menu);
      assert.equal(menu.width, 400);
      assert.equal(menu.height, 600);
      assert.equal(menu.title, "My menu");
    });
  
    it("returns nothing", function() {
      assert.isUndefined( multiplyNumeric({}) );
    });
  
  });