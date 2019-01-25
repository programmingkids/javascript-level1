var score = 85;

if( score == 100 ) {
    console.log('満点ですね');
} else if( score >= 90  ) {
    console.log('かなり良い点数です');
} else if( score >= 80  ) {          // このelse ifが成立します
    console.log('良い点数です');       // ここが実行されます
} else if( score >= 70  ) {
    console.log('普通の点数です');
} else {
    console.log('がんばろう');
}
