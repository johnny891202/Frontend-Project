/* //addeventListener 註冊事件監聽教學
const btn = document.querySelector('.btn');
const title = document.querySelector('h1');


btn.addEventListener('click',function(e){
    title.textContent = "按鈕已經被點擊";
}) //第一個參數 -> 要做什麼行為 */

/* //來寫一個加法器吧！
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const title = document.querySelector('h1');
let count = 0;

plus.addEventListener('click',function(e){
    count += 1;
    title.textContent = count;
})
minus.addEventListener('click',function(e){
    count -=1;
    title.textContent = count;
}) */

/* //event 物件 - 告訴你當下元素資訊
const btn = document.querySelector('.btn');
btn.addEventListener('click',function(e){
    console.log(e);
}) */

/* //透過 nodeName 瞭解目前 DOM 的 HTML 位置
const btn = document.querySelector('.btn');

console.log(btn.nodeName); */

/* //e.target - 了解目前所在元素位置
const btn = document.querySelector('.btn');
btn.addEventListener('click',function(e){
    console.log(e.target);
})

const list = document.querySelector('.list');
list.addEventListener('click',function(e){
    console.log(e.target);
}) */

/* //e.target 搭配 nodeName 節點，抓到你預期要做的事情
const btn = document.querySelector('.btn');
btn.addEventListener('click',function(e){
    console.log(e.target);
})

const list = document.querySelector('.list');
list.addEventListener('click',function(e){
    console.log(e.target.nodeName);
    if(e.target.nodeName == "INPUT"){
        console.log('你目前點到按鈕!');
    }
}) */

//preventDefault - 取消預設觸發行為
const myLink = document.querySelector('a');

myLink.addEventListener('click',function(e){
    e.preventDefault();
    console.log('有被點擊到');
})