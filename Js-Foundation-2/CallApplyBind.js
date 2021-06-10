const wizard = {
	name: 'Merlin',
	health: 50,
	heal() {
		return (this.health = 100);
	},
};

const archer = {
	name: 'Robin Hood',
	health: 30,
};

console.log('1', archer);
wizard.heal.call(archer);
// assigning the function to different object

console.log('2', archer);

const array = [1, 3, 5];

function getMaxNumber(arr) {
	return Math.max.apply(null, arr);
}

console.log(getMaxNumber(array));
