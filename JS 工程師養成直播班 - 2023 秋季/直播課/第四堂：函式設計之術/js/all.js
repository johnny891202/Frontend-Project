/* 宣告函式並且呼叫函式 */

// function funcName(){
//     console.log('執行函式');
// }

// funcName();

/* 參數 */
// function callNum(num){
//     console.log(`呼叫${num}號`);
// }

// callNum(8);

/* 多個參數 */
// function addNum(num1,num2){
//     console.log(num1,num2);
//     console.log(num1 + num2);
// }
// addNum(3,5);

/* input output練習 */
//題目一
// function talk(text){
//     const sayHi = `hi,${text}`;
//     return sayHi;
// }

//題目二
// let data = 0;

// function count(num){
//     return data += num;
// }

//題目三
// function count(num){
//     return num ** 2;
// }

//題目四
// function twoFixed(num){
//     return Number(num.toFixed(2)); //toFixed(x) --> x代表小數點後第幾位
// }

//題目五
// function calcBmi(height,weight){
//     return Number((weight / (height / 100)**2).toFixed(2));
// }

//題目六
// function checkWeather(weather){
//     if(weather === "雨天"){
//         return '要帶雨具';
//     }else if(weather === "晴天"){
//         return '不用帶雨具';
//     }
// }

//題目七
// let data = []

// function add(string){
//     data.push(string)
//     return data
// }

//題目八
// let data = []
// function add(name,gender){
//     const obj = {};
//     obj.name = name;
//     obj.gender = gender;
//     data.push(obj);
//     return data;
// }

//題目八縮寫
// let data = []
// function add(name,gender){
//     data.push({name:name,gender:gender});
//     return data;
// }

// let data = []
// function add(name,gender){
//     data.push({name,gender});
//     return data;
// }

//題目九
// const bmiStatesData = {
//     overThin:{
//         state:"過輕",
//         color:"藍色"
//     },
//     normal:{
//         state:"正常",
//         color:"紅色"
//     }
// }

// function checkBmiStates(status){
//     return `你的體重${bmiStatesData[status].state},指數為${bmiStatesData[status].color}`;
// }