const Calculator = require('./02-calculator.js')

class FancyCalculator extends Calculator {
	constructor() {
		super();
	}

	setTotal(newTotal) {
		this.total = newTotal;
		return this.total
	}

	modulo(num) {
		this.total = this.total % num
		return this.total;
	}

	squared() {
		this.total = this.total * this.total
		return this.total;
	}

}

let fancyCalculator = new FancyCalculator();
console.log(fancyCalculator.setTotal(5));
console.log(fancyCalculator.squared());
console.log(fancyCalculator.modulo(4));
console.log(fancyCalculator.total);

console.log(fancyCalculator.add(9));
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
