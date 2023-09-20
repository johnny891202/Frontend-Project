// if、else、else if
let todayDegree = 14;
let wearJacket = 15;

if(wearJacket >= todayDegree){
    console.log("小美穿外套");
}
else{
    console.log("因為天氣太熱，所以小美不穿外套");
}

//小明想去吃牛肉麵(110元)，錢不夠的話就去吃夜市牛排(80元)或是薯條(35元)
//都沒辦法吃就回家吃飯

let wallet = 10;
let noodles = 110;
let steak = 80;
let fries = 35;

if(wallet >= 110){
    console.log("小明去吃牛肉麵");
}
else if(wallet >= 80){
    console.log("小明去吃牛排");
}
else if(wallet >= 35){
    console.log("小名去吃薯條");
}
else{
    console.log("小明回家吃飯");
}