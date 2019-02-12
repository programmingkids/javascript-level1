var data = new Array(5,3,7,6,2);
console.log(data); // [5,3,7,6,2]

console.log(data.length); // 5

data.push(8);
console.log(data); // [5,3,7,6,2,8]

data.pop();
console.log(data); // [5,3,7,6,2]

data.sort();
console.log(data); // [2,3,5,6,7]

data.reverse();
console.log(data); // [7,6,5,3,2]
