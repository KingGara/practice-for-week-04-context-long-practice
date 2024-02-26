// Write a function that will accept a function and any number of arguments after that 
// concatenated to an array of args. The 'allTheArgs' function should return the passed in
// function modifed to always be invoked with the passed in arguments. 

// function allTheArgs(func, ...args) {
//   let cash = args
//   return (...params) => {
//     cash = [...cash, ...params]
//     return func(...cash)
//   }
// }

// function declaration takes a func and ...args 
// function allTheArgs(func, ...args) {
 
//   // Initalize variable with value of args array. 
//   // Captures inital args passed to the allTheArgs function and stores them in cash
//   let cash = args
  
//   // Returns an arrow function that accepts any number of parameters. 
//   return (...params) => {

//     // Concatenating cash array with params array. Assigning results to cash. 
//       cash = [...cash, ...params]
      
//       // Invokes OG func. with the concatenetaed args stored in cash array, returns result.
//       return func(...cash)
//     }
// }

function allTheArgs(func, ...args) {
  return (...additionalArgs) => {
    return func(...args, ...additionalArgs)
  }
}

function sum(...nums) {
  return nums.reduce((total, num) => total + num );
}
const onePlusTwo = allTheArgs(sum, 1, 2);

const onePlusTwoPlusThree = onePlusTwo(3);
const onePlusTwoPlusFour = onePlusTwo(4);

console.log(onePlusTwoPlusThree); // => 6
console.log(onePlusTwoPlusFour); // => 7



const bow = (...names) => {
  return "You bowed to " + names.join(" and ") + ".";
};

console.log(bow("Sandy")) // prints "You bowed to Sandy"

let bowSandy = allTheArgs(bow, "Sandy");
console.log(bowSandy());
console.log(bowSandy('Joe', 'Nico'));

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;