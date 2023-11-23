/* 題目一：字串取長度 */
function checkStringLength(str){
    console.log(str.length);

}

console.log("題目一：字串取長度");
checkStringLength("Hello")
checkStringLength("my name is Tom！")


/* 題目二：字串大小寫互換 */
function lowerCase(str){
    console.log(str.toLowerCase());
}

function upperCase(str){
    console.log(str.toUpperCase());
}

console.log("題目二：字串大小寫互換");
lowerCase("FOKFF@gmail.com");
upperCase("hello, world");


/* 題目三：字串去左右空白 */
function trimString(str){
    console.log(str.trim());
}

console.log("題目三：字串去左右空白");
trimString("    hi, mom!  ")
trimString(" aa@gmail.com  ")


/* 題目四：字串去任何空白 */

function removeAllSpaceString(str){
    console.log(str.replace(/\s/g,"")) //使用 \s 來表示空白字符
}

console.log("題目四：字串去任何空白");
removeAllSpaceString("Hello World")
removeAllSpaceString("你好     美麗的     世界")


/* 題目五：字串陣列互換 */
let answer;
function stringArraySwitcher(input){
    if(typeof(input) === "string"){
        answer = input.split(','); //使用split將字串轉換成陣列
        console.log(answer);
    }else if(typeof(input) === "object"){
        answer = input.join(",");
        console.log(answer);
    }
    
}

console.log("題目五：字串陣列互換");
stringArraySwitcher(['A', 'B', 'C']);
stringArraySwitcher('1,2,3');


/* 題目六：字串切割 */

function getArea(address){
    console.log(address.slice(3,6));
}

console.log("題目六：字串切割");
getArea("高雄市前鎮區一心二路33號");
getArea("高雄市新興區新興路66號");

/* 題目七：字串黏合 */

function concatString(str1,str2){
    let newString = str1.concat(str2);
    console.log(newString);
}


console.log("題目七：字串黏合");
concatString("我今天想來點", "六角冰咖啡")

/* 題目八：顯示字串 */

console.log("題目八：顯示字串");
console.log(`'字串'是 JavaScript 中一種基礎且重要的"型別"，必須好好學習。`)

/* 題目九：擷取字串內容 */

const input = "Hello"
function getCharacter(str,index){
    if(str.length < index){
        console.log(false);
    }else{
        console.log(str[index-1]);
    }
}

console.log("題目九：擷取字串內容");
getCharacter(input, 1);
getCharacter(input, 3);
getCharacter(input, 10);

/* 題目十：反轉字串 */

function stringReverser(str){
    console.log(str.split("").reverse().join(""));
}

console.log("題目十：反轉字串");
stringReverser("hello");