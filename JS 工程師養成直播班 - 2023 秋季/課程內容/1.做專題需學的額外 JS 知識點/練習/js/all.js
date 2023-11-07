/* //setItem、getItem 基本操作

let str = "Tom";

localStorage.setItem("myName",str); //存放值在localStorage裡面
console.log(localStorage.getItem('myName'));//從localStorage撈值出來 */ 

/* let btn = document.querySelector('.btnSave');
let call = document.querySelector('.btnCall');

function saveName(e){
    let str = document.querySelector('.textClass').value;
    localStorage.setItem('myName',str);
}

btn.addEventListener('click',saveName);

call.addEventListener('click',function(e){
    let str = localStorage.getItem('myName');
    alert(`你的名字叫做${str}`);
}) */

//透過 JSON.parse、JSON.stringify 來編譯資料
//1.將 array 轉為 string   2.將 string 轉為 array
//因為 localstorage 只會保存 string 資料

let country = [
    {farmer:'柯維哲'}
];
let countryString = JSON.stringify(country);
localStorage.setItem('countryItem',countryString)

let getData = localStorage.getItem('countryItem');
let getDataArray = JSON.parse(getData);
console.log(getDataArray[0].farmer)
