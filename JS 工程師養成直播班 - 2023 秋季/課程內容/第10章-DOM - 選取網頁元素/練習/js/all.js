/* //querySelector 選擇器

const el = document.querySelector('h1'); //querySelector 選取網頁上的元素 括號裡面放css選擇器
const al = document.querySelector('.header');

//textContent 寫入文字資料

el.textContent = "Hello World!!"; */

/* //innerHTML 插入HTML標籤

const main = document.querySelector(".main");

main.innerHTML = `<h1 class="header">標題</h1>` //可以使用 `` '' "" //innerHTML特性會將原本內容全部清空後放入新增的內容
 */

/* //innerHTML加入變數

const list = document.querySelector('.list');
let myLink = "https://www.google.com.tw"
let linkName = "Google連結"
let content = `<li><a href=${myLink}>${linkName}</a></li>`

list.innerHTML = content + content; */

/* //setAttribute 增加 HTML 標籤屬性

const myLink = document.querySelector('a');
myLink.setAttribute('href','https://www.yahoo.com.tw');  //設定屬性會帶入兩個參數 第一個參數 要改哪個屬性 第二個參數 要加什麼內容
myLink.setAttribute('class','red') */

/* //querySelectorAll 可重複選取多個元素
const myLink = document.querySelectorAll('a');
myLink[0].setAttribute('href','https://www.yahoo.com.tw');
myLink[0].setAttribute('class','red')

myLink[1].setAttribute('href','https://www.google.com.tw');
myLink[1].setAttribute('class','red') */

/* // .innerHTML、.textContent、.getAttribute 取值方法
const myLink = document.querySelector('a');
//取屬性
console.log(myLink.getAttribute('href'));
console.log(myLink.getAttribute('class'));
//取HTML結構
console.log(myLink.innerHTML);

let content = myLink.innerHTML;
console.log(content)

//取文字內容
console.log(myLink.textContent) */


//表單元素取值方式
const txt = document.querySelector('.txt');
console.log(txt.value);
const list = document.querySelector('.list');
console.log(list.value);

//重新賦予值
txt.value = 'hello!!'
list.value = '高雄市'
console.log(txt.value);
console.log(list.value);