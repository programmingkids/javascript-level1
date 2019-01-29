var colors = [["red","pink"],["blue","green"]];

// 1次元目のインデックスが「2」に2次元目の配列を追加します
colors[2] = ["black","white"];

console.log( colors[0][0] ); // red
console.log( colors[0][1] ); // pink
console.log( colors[1][0] ); // blue
console.log( colors[1][1] ); // green
console.log( colors[2][0] ); // black
console.log( colors[2][1] ); // white
