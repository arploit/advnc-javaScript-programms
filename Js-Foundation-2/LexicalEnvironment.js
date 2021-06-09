// 1: gives methods access to their objects

const obj = {
	name: 'Billy',
	sing: function () {
		return 'lalala ' + this.name;
	},
	singAgain() {
		return this.sing() + '!';
	},
};

// const k = obj.sing;
// console.log(k());

//2: execute same code for multiple objects

function importantPerson() {
	console.log(this.name);
}

var name = 'Sunny';

const obj1 = {
	name: 'Cassy',
	importantPerson: importantPerson,
};

const obj2 = {
	name: 'Jacon',
	importantPerson: importantPerson,
};

window.importantPerson();
console.log(window.name);
