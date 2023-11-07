// 函式寫法教學
// function morningAction(){
//     console.log("起床");
//     console.log("刷牙");
//     console.log("出門");
// }

// morningAction();

// 函式裡面仍可以執行函式
// function nightAction(){
//     console.log("回家");
//     cleanBody();
//     console.log("睡覺");
// }
// function cleanBody(){
//     console.log("刷牙");
//     console.log("洗臉");
// }
// nightAction();

// 函式參數介紹
// function a(a,b){
//     console.log(a);
//     console.log(b);
// }
// a(3,8);

// 參數寫法-兩個數字相加工具
// function add(num1,num2){
//     console.log("你加總的數字為"+ (num1+num2));
// }
// add(2,3);

// return 寫法教學 
// return 宣告 let 
// return 可以有多個
// return 可以中斷函示執行，後面的程式就不跑了
// function calcTotalScore(chineseScore,mathScore){
//     let totalScore = chineseScore + mathScore
//     return totalScore;
// }
// calcTotalScore(40,60);
// let markTotalScore = calcTotalScore(40,60);
// let tomTotalScore = calcTotalScore(100,75);

// return 可以有多個-範例Code
// 檢查學生成績是否及格
// function checkScore(score){
//     if(score >= 60){
//         return "及格";
//     }
//     else{
//         return "不及格";
//     }
// }

// let tomScore = checkScore(75);
// console.log(tomScore);

// let markScore = checkScore(20);
// console.log(markScore);

//判斷是否為偶數
let count = 0;
function checkNumber(myInput){
    count += 1;
    if(myInput % 2 == 0){
        return "是偶數";
    }
    else{
        return "不是偶數";
    }
}

console.log(checkNumber(17));
console.log(checkNumber(12));
console.log(checkNumber(28));
console.log(`你一共計算了${count}次`);