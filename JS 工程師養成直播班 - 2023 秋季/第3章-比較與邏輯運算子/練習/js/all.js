//比較運算值 > < >= <= == !=

// =、==、=== 差異講解
// = 賦予值
// == 比較運算子
///===會比較也會看型別

let a = 1;
let b = "1";
console.log(a == b);
console.log(a === b);

// 邏輯運算子 && ||
// &&同時滿足條件 ||滿足其中一個條件

// 邏輯運算子範例情境

// &&練習
//必須同時符合兩個條件
//消費滿500
//是 VIP

let cost = 600;
let isVip = true;
console.log( cost >= 500 && isVip == true);


// ||練習
// 小孩吃東西
// 只要冰箱有米飯或蘋果任一個，小朋友就願意吃飯

let rice = true;
let apple = false;
console.log( rice == true || apple == true);