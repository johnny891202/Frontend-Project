/* 題目一：選取 DOM */

// 01. 使用 getElementById + getAttribute("id") 來獲取 01 的 id 內容
console.log(document.getElementById("target").getAttribute("id"));
// 02. 使用 getElementsByClassName 來獲取一個 HTMLCollection
console.log(document.getElementsByClassName("target"));
// 03. 使用 querySelector 來獲取一個 Element
console.log(document.querySelector(".target"));
// 04. 使用 querySelectorAll 來獲取一個 NodeList
console.log(document.querySelectorAll("[data-target]"));
// 05. 使用 nextSibling 來獲取一個 Node
console.log(document.querySelector(".target").nextSibling);

/* 題目二：修改 DOM */

//接續第一題，請創造一個 selectMe 變數並存放內文字為"選我01"的元素，並依照以下的要求使用 DOM API 修改其屬性：

const selectMe = document.querySelector(".target");
//修改文字為紅色 (inline-style)
selectMe.style.color = "red";

//新增 “hello” 的 class 屬性
selectMe.classList.add("hello");
console.log(selectMe);
//修改文字內容為 “被選了01”
selectMe.textContent = "被選了01";

/* 題目三：監聽 DOM */

//接續第二題，請為該元素(選我01)設置事件監聽，當被「點擊」時做出以下反應：

//背景改為黃色
//內文字改為 “已被點擊！”
//再點擊一下回復原本狀態(背景與內容文字回復原樣)。
selectMe.addEventListener("click", () => {
    if (selectMe.textContent === "被選了01") {
        selectMe.style.backgroundColor = "yellow";
        selectMe.textContent = "已被點擊!";
    } else {
        selectMe.style.backgroundColor = "white";
        selectMe.textContent = "被選了01";
    }
})



/* 題目四：創造、插入 DOM */
//請製作一個按鈕，當點擊時會在 HTML 文件中新增以下內容
const addHelloWorld = document.querySelector(".btn");
const list = document.querySelector(".list");
let str = ``;
addHelloWorld.addEventListener("click", () => {
    str += `<p>你好世界</p>`;
    list.innerHTML = str;
})

/* 題目五：監聽表單 */
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.type);
})

/* 題目六：加減計數器 */
