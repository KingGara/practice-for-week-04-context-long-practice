/* Write a function that will accept an object, a function and delay. The boundFuncTimer should
invoke the function func with obj as its context after a delay. 
*/

function boundFuncTimer(obj, func, delay) {
  setTimeout(() => {
    func.call(obj)
  }, delay)
}


class Animal {
  constructor(age) {
    this.age = age;
  }

  growOlder() {
    this.age++;
    console.log(this.age);
  }
}

const dog = new Animal(1);
const cat = new Animal(5);

boundFuncTimer(dog, dog.growOlder, 5000);
boundFuncTimer(cat, dog.growOlder, 7000);
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;