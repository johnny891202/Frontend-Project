let data = [
    {Charge: "免費",name: "AA充電站"},
    {Charge: "投幣式",name: "BB充電站"},
    {Charge: "投幣式",name: "CC充電站"},
    {Charge: "投幣式",name: "DD充電站"},
];
const list = document.querySelector('.list');
/* 預設載入函示 */
function init(){
    
    let str = '';

    data.forEach(function(item,index){
    str += `<li>${item.name}，${item.Charge}</li>`;
    })
    list.innerHTML = str;
}

init();
/* 篩選器邏輯 */
const stationFilter = document.querySelector('.filter');
stationFilter.addEventListener('click',function(e){
    if(e.target.value == undefined){
        console.log('你點擊到空的地方');
        return;
    };
    let str = "";
    data.forEach(function(item,index){
        if(e.target.value == "全部"){
            str += `<li>${item.name}，${item.Charge}</li>`
        }else if(e.target.value == item.Charge){
            str += `<li>${item.name}，${item.Charge}</li>`
        }
    })
    list.innerHTML = str;
})

/* 新增資料 */
const stationName = document.querySelector(".stationName");
const stationCharge = document.querySelector(".stationCharge");
const btn = document.querySelector(".btn");

btn.addEventListener('click',function(e){
    console.log(stationName.value);
    console.log(stationCharge.value);
    let newData = {};
    newData.Charge = stationCharge.value;
    newData.name = stationName.value;
    data.push(newData);
    init();
    stationCharge.value = "免費";
    stationName.value = "";
})