function sayHello() {
    var local = 'this is local'; // これはローカル変数
    console.log( local ); // this is local
}

sayHello(); // this is local
console.log( local ); //  エラー発生（localは宣言されていません）
