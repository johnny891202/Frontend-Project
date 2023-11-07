const id = location.href.split('=')[1];
//console.log(location.href) -> http://localhost:8080/page/page.html?id=1
//console.log(location.href.split('=')) -> ['http://localhost:8080/page/page.html?id','1']
const _url = "http://localhost:3000";

axios.get(`${_url}/todos/${id}`)
.then(function(response){
    document.querySelector("h1").textContent = `待辦事項${response.data.id}`
    document.querySelector(".content").textContent = response.data.content
})