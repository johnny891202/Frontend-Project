let data = [];

function renderData() {
    const list = document.querySelector('.list');
    let str = "";
    data.forEach(function (item, index) {
        str += `<li>${item.content} <input type="button" data-num="${index}" class="delete" value="刪除待辦"></li>`
    })
    list.innerHTML = str;
}

const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const list = document.querySelector('.list');

/* 新增待辦功能 */
save.addEventListener('click', function (e) {
    if (txt.value == "") {
        alert("請輸入內容");
        return;
    }
    console.log(txt.value);
    let obj = {};
    obj.content = txt.value;
    data.push(obj);
    renderData();
})

/* 刪除待辦功能 */
list.addEventListener('click', function (e) {
    if (e.target.getAttribute("class") !== "delete") {
        alert("你目前不是點擊到按鈕");
        return;
    }
    let num = e.target.getAttribute("data-num");
    data.splice(num, 1);
    renderData();
})


// renderData();
