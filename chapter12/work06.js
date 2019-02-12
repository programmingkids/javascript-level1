function Calc(a, b) {
    this.a = a;
    this.b = b;
}

Calc.prototype.add = function() {
    return this.a + this.b;
};

Calc.prototype.multiply = function() {
    return this.a * this.b;
};

var calc1 = new Calc(3,5);
console.log(calc1.add());
console.log(calc1.multiply());
