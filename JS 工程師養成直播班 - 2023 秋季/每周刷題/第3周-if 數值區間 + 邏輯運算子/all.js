/* 題目一：多重條件 */

function myThought(day){
    switch(day){
        case 1:
            console.log("星期一:猴子穿新衣");
            break;
        case 2:
            console.log("星期二，猴子肚子餓");
            break;
        case 3:
            console.log("星期三，猴子去爬山");
            break;
        case 4:
            console.log("星期四，猴子看電視");
            break;
        case 5:
            console.log("呈期五，猴子去跳舞");
            break;
        case 6:
            console.log("星期六，猴子去斗六");
            break;
        case 7:
            console.log("星期日，猴子過生日");
            break;
        default:
            console.log("一周只有七天，輸入錯囉");
            break;
    }
}

console.log("題目一：多重條件");
myThought(1)
myThought(7)
myThought(8)

/* 題目二：飲酒測試 */

function isDrinkable(age){
    age >= 18 ? console.log(true) : console.log(false); //條件運算子
}

console.log("題目二：飲酒測試");
isDrinkable(7)
isDrinkable(18)

/* 題目三：發燒檢測 */

function isFever(degree){
    degree >= 38 ? console.log(true) : console.log(false);
}

console.log("題目三：發燒檢測");
isFever(37)
isFever(39)

/* 題目四：溫標轉換 */

function CtoF(degree){
    console.log(((degree * 9 / 5) + 32).toFixed(1));
}
function FtoC(degree){
    console.log(((degree - 32) * 5 / 9).toFixed(1));
}

console.log("題目四：溫標轉換");
CtoF(10)
FtoC(10)

/* 題目五：餵食青蛙 */

function frogEat(num){
    if(num <= 5){
        console.log("嘓！");
    }else if(num >= 50){
        console.log("嘔")
    }else{
        console.log("...");
    }
}

console.log("題目五：餵食青蛙");
frogEat(1)
frogEat(100)
frogEat(10)

/* 題目六：計算球體體積 */

function sphereVolume(num){
    console.log( (4 / 3 * Math.PI*(num ** 3)).toFixed(1));
}

console.log("題目六：計算球體體積");
sphereVolume(1);
sphereVolume(10);
sphereVolume(20);

/* 題目七：BMI 計算 */
function bmi(height,weight){
    if(height <= 0 || weight <= 0){
        console.log("無法計算");
    }
    
    const bmi = weight / (height/100)**2;
    if(bmi < 18.5){
        console.log("體重過輕");
    }else if(bmi >= 18.5 && bmi < 24){
        console.log("正常範圍");
    }else if(bmi >= 24 && bmi < 27){
        console.log("過重");
    }else if(bmi >= 27 && bmi < 30){
        console.log("輕度肥胖");
    }else if(bmi >= 30 && bmi < 35){
        console.log("中度肥胖");
    }else if(bmi >= 35){
        console.log("重度肥胖");
    }
}



console.log("題目七：BMI 計算");
bmi(178,20)
bmi(178,65)
bmi(178,77)
bmi(178,89)
bmi(178,100)
bmi(178,200)

/* 題目八：斜邊計算 */
function calcHypotenuse(x,y){
    let answer = (((x ** 2) + (y ** 2)) ** 0.5).toFixed(1);
    console.log(answer);
}

console.log("題目八：斜邊計算");
calcHypotenuse(10, 10)

/* 題目九：FizzBuzz */

function fizzBuzz100(){
    let result = [];
    let count = 1;
    while (count <= 100){
        if( count % 3 === 0 && count % 5 === 0){
            result.push("FizzBuzz");
        }else if(count % 3 === 0){
            result.push("Fizz");
        }else if(count % 5 === 0){
            result.push("Buzz");
        }else{
            result.push(count);
        }
        count++;
    }
    console.log(result);
}


console.log("題目九：FizzBuzz");
fizzBuzz100();

/* 題目十：蜘蛛下網 */
function spiderLeaveWeb(x,y){
    let posX = 0;
    let posY = 0;
    let position;
    //判斷還在不在網子上面
    if((x > 11 || y > 11) || (x < 0 || y < 0)){
        console.log("蜘蛛不在網上了!");
    }
    //判斷目前的位置在哪
    if( x <= 5){
        posX = 0;
        if(y <= 5){
            posY = 0;
            position = "左上";
        }else{
            posY = 11;
            position = "左下";
        }
    }else{
        posX = 11;
        if(y <= 5){
            posY = 0;
            position = "右上";
        }else{
            posY = 11;
            position = "右下";
        }
    }
    if(posX - x === 0 && posY - y === 0){
        return console.log(`${position}角為最近的支撐點，距離 0 單位`)
    }
    let range = (((posX - x)**2 + (posY - y)**2) **0.5).toFixed(1);
    console.log(`${position}角為最近的支撐點，距離${range}單位`)
}

console.log("題目十：蜘蛛下網");
spiderLeaveWeb(8, 3)

spiderLeaveWeb(5, 5)
spiderLeaveWeb(6, 5)
spiderLeaveWeb(5, 6)
spiderLeaveWeb(6, 6)

spiderLeaveWeb(20, 20)

spiderLeaveWeb(0, 0)
spiderLeaveWeb(11, 0)
spiderLeaveWeb(0, 11)
spiderLeaveWeb(11, 11)