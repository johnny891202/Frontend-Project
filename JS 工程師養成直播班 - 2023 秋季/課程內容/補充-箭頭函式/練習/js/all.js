/* //函式陳述式

function numA(x) {
    return x * x;
}
//函式表達式

const numB = function (x) {
    return x * x;
}

//差異 -> 函式表達式有先後順序的問題 */

/* //箭頭函式基本寫法

const numA = function (x) {
    return x * x;
}
console.log(numA(3))

const numB = (x, y) => {
    const a = 4;
    const b = 5;
    return a * b * x * y;
}

console.log(numB(4, 5)); */

/* //箭頭函式再縮寫

// const num = (x) => {
//     return `數字相乘 ${x * x}`;
// }

const num = (x) => `數字相乘 ${x * x}`;
//1.如果函式搭配到 return 可以不寫 return
//2.如果只有一個參數，可以省略括號
//3.沒有參數，還是要有空括號 


console.log(num(34)) */


//陣列 map 搭配箭頭函式寫法

//陣列操作 map、filter

// const data = [1, 8, 13, 20];

// const newData = data.map(function (item) {
//     return item + 2;
// })

// console.log(newData)

const data = [1, 8, 13, 20];

const newData = data.map(item => item + 20)

console.log(newData)

