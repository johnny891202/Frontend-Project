const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const list = document.querySelector('.list');

const _url = "http://localhost:3000";

let data = [];

//預設載入初始化環境
function init(){
    axios.get(`${_url}/todos`)
    .then(function(response){
        data = response.data;
        renderData()
    })
}
init();

function renderData(){
    let str = '';
    data.forEach(function(item){
        str += `<li><a href="page.html?id=${item.id}">${item.content}</a><input class="delete" type="button" data-id="${item.id}" value="刪除待辦"></li>`
    })
    list.innerHTML = str;
}

//新增待辦功能
save.addEventListener('click',function(e){
    if(txt.value==""){
        alert("請輸入內容");
        return;
    }
    let obj = {};
    obj.content = txt.value;
    axios.post(`${_url}/todos`,obj)
    .then(function(response){
        init();
    })
})

//刪除待辦功能
list.addEventListener('click',function(e){
    if(e.target.getAttribute("class")!=="delete"){
        return;
    }
    let num = e.target.getAttribute("data-id");
    axios.delete(`${_url}/todos/${num}`)
    .then(function(response){
        alert("刪除成功!");
        init();
    })
})