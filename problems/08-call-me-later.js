class CallCenter {
	constructor(name) {
		this.name = name;
	}

	sayHello() {
		console.log(`Hello this is ${this.name}`)
	}

	callMeLater(delay) {
		setTimeout(() => {
			this.sayHello()
		},delay)
	}
}

let judy = new CallCenter("Judy"); 
judy.sayHello();
judy.callMeLater(1000);

let melan = new CallCenter("Melan");
melan.sayHello();
melan.callMeLater(1000);

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}