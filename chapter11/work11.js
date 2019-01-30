var global = 'this is global';

function sayHello() {
    console.log(global);
}

sayHello(); // this is global
console.log(global); // this is global
