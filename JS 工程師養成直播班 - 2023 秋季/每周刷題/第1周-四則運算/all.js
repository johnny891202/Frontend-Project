/* 題目1：相加產生器 (+) */

function add(num1,num2){
    console.log(num1 + num2);
}
console.log("題目1：相加產生器 (+)");
add(1,1);
add(2,2);
add(3,3);

/* 題目2：相減產生器 (-) */

function subtract(num1,num2){
    console.log(num1 - num2);
}

console.log("題目2：相減產生器 (-)");
subtract(1,1);
subtract(2,3);
subtract(8,3);

/* 題目3：相乘三次 (*) */

function multiply3Times(num){
    console.log(num **3);
}

console.log("題目3：相乘三次 (*)");
multiply3Times(3);
multiply3Times(0);
multiply3Times(9);

/* 題目4：取 2 的餘數（%） */

function remainder(num){
    console.log(num%2);
}

console.log("題目4：取 2 的餘數（%）");
remainder(3);
remainder(2);
remainder(8);


/* 題目5：取 2 的餘數 + 判斷是否可整除 (% + 結果判斷) */

function isDivisible(num){
    if(num % 2 === 0){
        console.log("已整除");
    }else{
        console.log("未整除");
    }
}

console.log("題目5：取 2 的餘數 + 判斷是否可整除 (% + 結果判斷)");
isDivisible(3);
isDivisible(2);
isDivisible(8);


/* 題目6：我要存錢(區域變數、全域變數) */

let bankMoney = 0;

function addBankMoney(num){
    bankMoney += num;
    console.log(`bankMoney 值為 ${bankMoney}`);
}
console.log("題目6：我要存錢(區域變數、全域變數)");
addBankMoney(1);
addBankMoney(50);
addBankMoney(10);

/* 題目7：簡單計算機 */

function calculate(num1,num2,operator){
    switch (operator){
        case '+' : 
            console.log(num1 + num2);
            break;
        case '-' :
            console.log(num1 - num2);
            break;
        case '*' :
            console.log(num1 * num2);
            break;
        case '/' :
            console.log(num1 / num2);
            break;
    }
}

console.log("題目7：簡單計算機");
calculate(3,5,'+');
calculate(4,2,'-');
calculate(7,9,'*');
calculate(5,5,'/');

/* 題目8：簡單計算機 + 顯示算式過程 */
function calculateProcess(num1,num2,operator){
    switch (operator){
        case '+' : 
            console.log(`${num1}${operator}${num2}=${num1 + num2}`);
            break;
        case '-' :
            console.log(`${num1}${operator}${num2}=${num1 - num2}`);
            break;
        case '*' :
            console.log(`${num1}${operator}${num2}=${num1 * num2}`);
            break;
        case '/' :
            console.log(`${num1}${operator}${num2}=${num1 / num2}`);
            break;
    }
}

console.log("題目8：簡單計算機 + 顯示算式過程");
calculateProcess(3,5,'+');
calculateProcess(4,2,'-');
calculateProcess(7,9,'*');
calculateProcess(5,5,'/');

/* 題目9：商業邏輯題：增加服務費 */

function serviceCharge(num){
    return num + num * 0.05;
}

const total = serviceCharge(100);


console.log("題目9：商業邏輯題：增加服務費");
console.log(`您總計費用為 ${total}`);

/* 題目10：重構題：消除重複，抽離變因 */

function sixAngleCalculate(num){
    const subTotal = num * 100;
    const serviceCharge = serviceCharge2(subTotal);
    const total = subTotal + serviceCharge;
    return(total);
}

function eightAngleCalculate(num){
    const subTotal = num * 800;
    const serviceCharge = serviceCharge2(subTotal);
    const total = subTotal + serviceCharge;
    return(total);
}

function serviceCharge2(num){
    return num * 0.1 ;
}

console.log("題目10：重構題：消除重複，抽離變因");
sixAngleCalculate(5);
eightAngleCalculate(5);