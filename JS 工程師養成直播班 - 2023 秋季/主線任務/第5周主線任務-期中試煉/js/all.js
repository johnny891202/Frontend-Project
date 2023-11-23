let data = [];

axios.get("https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json")
.then(function(res){
    data = res.data.data;
    init();
})

const list = document.querySelector('.ticketList');
const searchCount = document.querySelector('.searchResult-text');
const addTicketForm = document.querySelector('.addTicket-form');
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
    addTicketForm.reset();
})
console.log(addTicketForm);