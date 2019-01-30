var num1 = 3;
var num2 = 5;

// ここに関数「max」を定義します
function max(num1, num2) {
    if( num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

var result = max( num1, num2 );
console.log( result ); // 5
