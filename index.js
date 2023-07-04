/* Closure */
function counter() {
	let count = 0;
	
	return function() {
		return count++;
	}
}

let cntr = counter();
console.log(cntr());
console.log(cntr());


/* bind, call and apply */
let user = {
	name: "Steve",
	age: 30	
}

let admin = {
	name: "Admin123",
	age: 50
}

function message(phrase) {
	if(phrase) {
	  console.log(`${phrase}, welcome ${this.name}`);
	  return;
	}
	
	console.log(`welcome ${this.name}`);
}

message.call(user, "hello");
message.apply(admin, ["hello"]);

const msg = message.bind(user);
msg();

/* object inheritance */
let animal = {
	canEat: true,
	printName: function(name) {
		console.log("Animal name is:", name);
	}
};

let rabbit = {
	speed: 50,
	__proto__: animal
};


rabbit.printName("Mighty Rabbit");

/* same with function inheritance */
let animal = {
	canEat: true,
	printName: function() {
		console.log("Animal name is:", this.name);
	}
};

function Rabbit(name) {
	this.speed = 50;
	this.name = name;
};

Rabbit.prototype = animal;

let rabbit = new Rabbit("Mighty Rabbit");
rabbit.printName();

/* class inheritance */
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }

}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5);
rabbit.stop();
