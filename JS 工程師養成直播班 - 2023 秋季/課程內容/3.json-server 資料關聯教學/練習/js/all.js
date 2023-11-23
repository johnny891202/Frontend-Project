const list = document.querySelector('.list');

let data = [];

function init(){
    axios.get(`${_url}/posts`)
    .then(function(response){
        data = response.data;
        renderData();
    })
}
init();

function renderData(){
    let str = '';
    data.forEach(function(item){
        str += `<li>${item.title}<a href="detail.html?id=${item.id}">觀看內容</a></li>`
    })
    list.innerHTML = str;
}
