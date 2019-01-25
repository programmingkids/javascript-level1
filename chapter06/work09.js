var signal = '黄';

if( signal == '赤' ) {  // 成立しません
    console.log('止まります');
} else if(signal == '黄') { // 成立します
    console.log('注意して進みます'); // ここが実行されます
} else {
    console.log('進みます');
}
