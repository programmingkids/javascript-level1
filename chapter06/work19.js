var score = 90;

// ここから下に判定表に基づいたプログラムを作成します
if( score <= 100 && score >= 90 ) {
    console.log("成績はAです");
} else if( score <= 89 && score >= 80 ) {
    console.log("成績はBです");
} else if( score <= 79 && score >= 70 ) {
    console.log("成績はCです");
} else if( score <=69 && score >= 60 ) {
    console.log("成績はDです");
} else {
    console.log("成績はEです");
}
