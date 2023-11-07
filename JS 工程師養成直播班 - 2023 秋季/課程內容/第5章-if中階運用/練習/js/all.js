//腰圍判斷
console.log("練習-腰圍判斷")
let sex = "female";
let cm = 77;

if(sex == "male"){
    console.log("男生")
    if(cm >= 90){
        console.log("體型過胖");
    }
    else{
        console.log("體型正常");
    }
}
else if(sex == "female"){
    console.log("女生")
    if(cm >= 80){
        console.log("體型過胖");
    }
    else{
        console.log("體型正常");
    }
}

//觀察客戶體溫
console.log("練習-觀察客戶體溫")
let temperature = 36;
if(temperature >= 37.5){
    console.log("不得進入");
}
else{
    console.log("可以進入");
}
console.log("結束");

//計算成績是否及格
console.log("練習-計算成績是否及格")
let myScore = 40;
if(myScore >= 60){
    console.log("成績及格");
}
else{
    console.log("成績不及格");
}
console.log("結束");

//計算成績評等
console.log("練習-計算成績評等");
let score = 85;
if(score >= 80){
    console.log("優秀");
}
else if(score >= 60){
    console.log("普通");
}
else if(score >= 0){
    console.log("不及格");
}
else{
    console.log("無法判定");
}
console.log("結束");