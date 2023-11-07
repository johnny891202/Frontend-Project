// 1.DOM -> 讓JS與瀏覽器溝通上很重要的腳色
// 2.forEach -> 陣列用的迴圈，用來遍歷資料

/* DOM (Document Object Model) -> HTML 檔案轉換成 JS Object*/



//textContent → 動態新增/修改/取得節點中的文字內容
// const title = document.querySelector('h1');
// title.textContent = "變更後的標題";

//innerHTML → 動態新增/修改/取得 DOM 元素
// const box = document.querySelector('.box');
// box.innerHTML = "<h2>副標題</h2>"
// console.log(box.innerHTML)
// console.log(box)

//forEach + innerHTML範例一
// const list = document.querySelector('.list');
// list.innerHTML = `
// <li><p>1234</p><img src="https://i.imgur.com/QXa1fMZ.png"></li>
// <li><p>1234</p><img src="https://i.imgur.com/QXa1fMZ.png"></li>
// `

//forEach + innerHTML範例二
// const list = document.querySelector('.list');
// let data = ["日本一日遊","韓國一日遊"];

// let str = "";
// data.forEach(function(item){
//     str += `<li><p>${item}</p><img src="https://i.imgur.com/QXa1fMZ.png"></li>`
// })
// list.innerHTML = str;

//forEach + innerHTML範例三
// let data = [
//     {
//         text: "日本一日遊",
//         url: "https://i.imgur.com/QXa1fMZ.png"
//     },
//     {
//         text:"韓國一日遊",
//         url: "https://imgur.com/h6vGkLL.png"
//     }
// ];

// const list = document.querySelector('.list');
// let str = "";
// data.forEach(function(item){
//     str += `<li><p>${item.text}</p><img src="${item.url}"></li>`
// })
// list.innerHTML = str;

//forEach + if
//男生共有幾位?
// let data = [
//     {
//     name:"Tom",
//     gender:"male"
//     },
//     {
//     name:"John",
//     gender:"male"
//     },
//     {
//     name:"Jerry",
//     gender:"male"
//     },
//     {
//     name:"Mary",
//     gender:"female"
//     },
//     {
//     name:"Jane",
//     gender:"female"
//     }
// ]

// let maleNum = 0;
// data.forEach(function(item){
//     if(item.gender === "male"){
//         maleNum += 1;
//     }
// })

// console.log(`男生有${maleNum}位`)

//國中人數共有幾位?
// let data = 
// [
//     {"school":"復興國中","num":3013},
//     {"school":"後甲國中","num":2050},
//     {"school":"民德國中","num":1817},
//     {"school":"建興國中","num":1680},
//     {"school":"崇明國中","num":1544}
// ];

// let totalStudent = 0;

// data.forEach(function(item){
//     totalStudent += item.num
// })

// console.log(`台南國中學生數有${totalStudent}位`)

//高雄里長黨派各有幾位?
// let data = [{},{},{}]
// let newData = {
//     '無黨籍': 0,
//     '民主進步黨': 0,
//     '中國國民黨': 0,
//     '其他': 0
// }

// data.forEach(function(item){
//     if(item.黨籍 === '無黨籍'){
//         newData.無黨籍 += 1;
//     }else if(item.黨籍 === '民主進步黨'){
//         newData.民主進步黨 += 1;
//     }else if(item.黨籍 === '中國國民黨'){
//         newData.中國國民黨 += 1;
//     }else{
//         newData.其他 += 1;
//     }
// })

// console.log(`高雄無黨籍有${newData["無黨籍"]}位`);
// console.log(`高雄民主進步黨有${newData["民主進步黨"]}位`);
// console.log(`高雄中國國民黨有${newData["中國國民黨"]}位`);
// console.log(`高雄其他黨有${newData["其他"]}位`);

//