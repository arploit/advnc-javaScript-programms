var b = {
	name: 'bjay',
	say() {
		console.log(this);
	},
};

var c = {
	name: 'cjay',
	say() {
		return function () {
			console.log(this);
		};
	},
};

var d = {
	name: 'djay',
	say() {
		return () => {
			console.log(this);
		};
	},
};

b.say();
c.say()();
d.say()();

/*output:
    b : object this,
    c : window this, 
    d : object this

*/
