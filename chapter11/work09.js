function calc() {
    var sum = 0;
    for( var i = 1; i <= 10; i++ ) {
        sum += i;
    }
    return sum;
}

var result = calc();
console.log( result ); // 55
