/* axios-嘗試串接外部資料 */

// axios.get('https://hexschool.github.io/ajaxHomework/data.json')
// .then(function(response){
//     console.log(response)
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
// })

/*  axios-response 參數詳細講解 */
// axios.get('https://hexschool.github.io/ajaxHomework/data.json')
// .then(function(response){
//     let ary = response.data;
//     console.log(ary[0].name);
//     const title = document.querySelector('.title');
//     title.textContent = ary[0].name
// })

/* axios-非同步觀念 */
// let ary = [];
// axios.get('https://hexschool.github.io/ajaxHomework/data.json')
// .then(function(response){
//     console.log('資料有回傳了')
//     ary = response.data;
// })

// console.log(ary);

/* 透過函式設計處理非同步 */

let ary = [];
axios.get('https://hexschool.github.io/ajaxHomework/data.json')
.then(function(response){
    console.log('資料有回傳了')
    ary = response.data;
    renderData();
})

function renderData(){
    console.log(ary);
    const title = document.querySelector('.title');
    title.textContent = ary[0].name;
}

console.log(ary);