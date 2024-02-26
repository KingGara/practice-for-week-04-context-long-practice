function bindToAnArg(func, arg) {
  return function () {
    return func(arg, ...arguments);
  };
}

// function bindToAnArg(func, arg) {
//   return func.bind(null, arg);
// }



function add(num1, num2) {
  return num1 + num2
}

const addTwo = bindToAnArg(add, 2)
const addThree = bindToAnArg(add, 3);

const twoPlusSix = addTwo(6);
const twoPlusSeven = addTwo(7);
const threePlusSeven = addThree(7);
const threePlusEight = addThree(8);
console.log({
  twoPlusSix,
  twoPlusSeven,
  threePlusSeven,
  threePlusEight
})


function iSpy(thing) {
  return "I spy a " + thing;
}

let spyTree = bindToAnArg(iSpy, "tree");
console.log(spyTree());
console.log(spyTree("car"));

let spyCar = bindToAnArg(iSpy, "car");
console.log(spyCar());
console.log(spyCar("potato"));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = bindToAnArg;
