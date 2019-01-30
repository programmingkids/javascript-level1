var values = [4,3,7,9,2];

// ここに関数「getAverage」を定義します
function getAverage( data ) {
    var total = 0;
    for( var i in data ) {
        total += data[i];
    }
    return total / data.length;
}

var result = getAverage( values );
console.log( result ); // 5
