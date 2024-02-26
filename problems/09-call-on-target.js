/* Write a function that will accept a function and two objects.
callOnTarget should return the result of the func invoked with obj1 
as its context and obj2 as the first argument. 
*/

function callOnTarget(func, obj1, obj2) {
  return func.call(obj1, obj2)
}

const cat = {
  name: "Breakfast"
};

const mouse = {
  name: "Jerry"
};

function greet(other) {
  return "I'm " + this.name + ". Nice to meet you, " + other.name;
}

console.log(callOnTarget(greet, cat, mouse));

console.log(callOnTarget(greet, mouse, cat));

const dog = {
  name: "Noodles",
  chase: function(animal) {
    return "Woof, my name is " + this.name + " and I'm chasing" + animal.name;
  }
}

console.log(callOnTarget(dog.chase, cat, dog));
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;