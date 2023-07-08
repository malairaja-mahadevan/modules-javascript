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

/* class inheritance for static properties and methods */
class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbits = [
  new Rabbit("White Rabbit", 10),
  new Rabbit("Black Rabbit", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Black Rabbit runs with speed 5.

conosole.log(Rabbit.planet); // Earth

/* Promise */
let promiseToCleanRoom = new Promise(function(resolve, reject) {
    let isClean = true;
    
    if(isClean) {
        resolve('Clean');
    } else {
        reject('Bad');
    }
});

promiseToCleanRoom
.then((result) => console.log('The room is ' + result))
.catch((result) => console.log('The room is not clean: ' + result));

/* Async & Await */
async function test() {
  let newPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise is finished!"), 1000)
  });
  let promiseResult = await newPromise; 
  console.log(promiseResult); // "done!"
}
test();

/* Generator function */
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

let one = generator.next();

console.log(JSON.stringify(one)); // {value: 1, done: false}

let two = generator.next();

console.log(JSON.stringify(two)); // {value: 2, done: false}

let three = generator.next();

console.log(JSON.stringify(three)); // {value: 3, done: true}
