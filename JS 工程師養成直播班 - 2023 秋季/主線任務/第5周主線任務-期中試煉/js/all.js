let data = [
    {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
    },
    {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
    },
    {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
    }
];

const list = document.querySelector('.ticketList');
const searchCount = document.querySelector('.searchResult-text');
/* 顯示套票列表 */
function init(){
    let str = "";
    let filteredData = data;
    filteredData.forEach(function(item){
        str += `<li>
                    <div class="ticketList-img">
                        <img src="${item.imgUrl}" alt="">
                        <p class="ticketList-region">${item.area}</p>
                        <p class="ticketList-rate">${item.rate}</p>
                    </div>
                    <div class="ticketList-content">
                        <div class="ticketList-description">
                            <h3>
                                <a href="#">${item.name}</a>
                            </h3>
                            <p>${item.description}</p>
                        </div>
                        <div class="ticketList-info">
                            <p class="ticketList-num">
                            <i class="fas fa-exclamation-circle">剩下最後 ${item.group} 組</i>
                            </p>
                            <p class="ticketList-price">
                                TWD<span>${item.price}</span>
                            </p>
                        </div>
                    </div>
                </li>`;
    })
    list.innerHTML = str;
    searchCount.innerHTML = `本次搜尋共${filteredData.length}筆資料`;
}
init();
/* 篩選器 */
const regionFilter = document.querySelector('.regionSearch');

regionFilter.addEventListener('change',function(e){
    let str = "";
    let filteredData = data.filter(function(item){
        return e.target.value === item.area || e.target.value === "";
    });
    filteredData.forEach(function(item){
        if(e.target.value == item.area){
            str += `<li>
                <div class="ticketList-img">
                    <img src="${item.imgUrl}" alt="">
                    <p class="ticketList-region">${item.area}</p>
                    <p class="ticketList-rate">${item.rate}</p>
                </div>
                <div class="ticketList-content">
                    <div class="ticketList-description">
                        <h3>
                            <a href="#">${item.name}</a>
                        </h3>
                        <p>${item.description}</p>
                    </div>
                    <div class="ticketList-info">
                        <p class="ticketList-num">
                        <i class="fas fa-exclamation-circle">剩下最後 ${item.group} 組</i>
                        </p>
                        <p class="ticketList-price">
                            TWD<span>${item.price}</span>
                        </p>
                    </div>
                </div>
            </li>`;
        }else if(e.target.value == ""){
            str += `<li>
                <div class="ticketList-img">
                    <img src="${item.imgUrl}" alt="">
                    <p class="ticketList-region">${item.area}</p>
                    <p class="ticketList-rate">${item.rate}</p>
                </div>
                <div class="ticketList-content">
                    <div class="ticketList-description">
                        <h3>
                            <a href="#">${item.name}</a>
                        </h3>
                        <p>${item.description}</p>
                    </div>
                    <div class="ticketList-info">
                        <p class="ticketList-num">
                        <i class="fas fa-exclamation-circle">剩下最後 ${item.group} 組</i>
                        </p>
                        <p class="ticketList-price">
                            TWD<span>${item.price}</span>
                        </p>
                    </div>
                </div>
            </li>`; 
        }
    })
    list.innerHTML = str;
    searchCount.innerHTML = `本次搜尋共${filteredData.length}筆資料`;
})

/* 新增套票 */
const ticketName = document.querySelector(".ticketName");
const ticketImgUrl = document.querySelector(".ticketImgUrl");
const ticketRegion = document.querySelector(".ticketRegion");
const ticketPrice = document.querySelector(".ticketPrice");
const ticketNum = document.querySelector(".ticketNum");
const ticketRate = document.querySelector(".ticketRate");
const ticketDescription = document.querySelector(".ticketDescription");
const addTicket = document.querySelector(".addTicket-btn")

addTicket.addEventListener('click',function(e){
    let newData = {};
    newData.name = ticketName.value;
    newData.imgUrl = ticketImgUrl.value;
    newData.area = ticketRegion.value;
    newData.price = ticketPrice.value;
    newData.group = ticketNum.value;
    newData.rate = ticketRate.value;
    newData.description = ticketDescription.value;
    data.push(newData);
    init();
    ticketName.value = "請填寫套票名稱";
    ticketImgUrl.value = "請填寫圖片網址";
    ticketRegion.value = "";
    ticketPrice.value = "請填寫套票金額";
    ticketNum.value = "請填寫套票組數";
    ticketRate.value = "請填寫套票星級";
    ticketDescription.value = "請填寫套票描述(限100字)";
})
