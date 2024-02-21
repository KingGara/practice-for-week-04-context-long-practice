class Car {
	constructor() {
		this.speed = 0
	}

	drive(newSpeed) {
		this.speed = newSpeed
		return this.speed
	}
}


let car = new Car();
car.drive(0);
console.log(car);

car.drive(10);
console.log(car);

car.drive(50);
console.log(car);

car.drive(100);
console.log(car);

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
