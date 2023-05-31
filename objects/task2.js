// Check for emptiness
// importance: 5

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false




describe("isEmpty", function() {
    it("returns true for an empty object", function() {
      assert.isTrue(isEmpty({}));
    });
  
    it("returns false if a property exists", function() {
      assert.isFalse(isEmpty({
        anything: false
      }));
    });
});