class PartyPlanner {
	constructor() {
		this.guestList = [];
	}
	
	addToGuestList(name) {
		this.guestList.push(name);
	}

	throwParty() {
		if (this.guestList.length === 0) {
			return "Gotta add people to the guest list"
		} else {
			const guests = this.guestList.join(' and ');
			return `Welcome to the party ${guests}`
		}
	}
}

const party = new PartyPlanner();

console.log(party.throwParty());

party.addToGuestList("James");
console.log(party.throwParty());

party.addToGuestList("Alvin");
console.log(party.throwParty());
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}