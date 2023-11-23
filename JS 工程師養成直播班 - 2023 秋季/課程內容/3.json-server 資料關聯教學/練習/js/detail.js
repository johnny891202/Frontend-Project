const id = location.href.split("=")[1];

function init(){
    if(id == undefined){
        alert("您的操作錯誤，將轉移到首頁");
        location.href = "./posts.html";
    }
    getPost(id);
    getComment(id);
}
init();

function getPost(id){
    axios.get(`${_url}/posts/${id}?_expand=user`)
    .then(function(response){
        document.querySelector('h1').textContent = response.data.title;
        document.querySelector('h2').textContent = `創作者:${response.data.user.name}`;
    })
}
function getComment(id){
    axios.get(`${_url}/posts/${id}/comments?_expand=user`)
    .then(function(response){
        let data = response.data;
        let str = "";
        data.forEach(function(item){
            console.log(item)
            str += `<li><h4>留言者:${item.user.name}</h4><p>內容:${item.body}</p></li>`
        })
        document.querySelector('.contentList').innerHTML = str;
    })
}