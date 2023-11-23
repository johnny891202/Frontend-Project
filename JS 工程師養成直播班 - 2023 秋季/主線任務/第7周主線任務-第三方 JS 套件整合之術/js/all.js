let data = [];

axios.get("https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json")
    .then(function (res) {
        data = res.data.data;
        regionFilter(data);
        renderC3();
    })
    .catch(function (error) {
        console.log(error);
    })

const list = document.querySelector('.ticketList');
const searchCount = document.querySelector('.searchResult-text');
const addTicketForm = document.querySelector('.addTicket-form');
const regionSearch = document.querySelector('.regionSearch');

/* 顯示套票列表 */
function render(data) {
    let str = "";
    data.forEach(function (item) {
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
    searchCount.innerHTML = `本次搜尋共${data.length}筆資料`;
}

/* 篩選器 */
function regionFilter(data) {
    const selectedRegion = regionSearch.value;
    // 如果有選取地區，則進行篩選
    if (selectedRegion) {
        filterData = data.filter(function (item) {
            return selectedRegion === item.area;
        });
    } else {
        // 否則顯示全部套票
        filterData = data;
    }

    render(filterData);
    regionSearch.addEventListener('change', function (e) {
        filterData = data.filter(function (item) {
            return e.target.value === item.area || e.target.value === ""
        })
        render(filterData)
    })
}

/* 顯示圖表 */
function renderC3() {
    let totalObj = {};
    data.forEach(function (item) {
        if (totalObj[item.area] === undefined) {
            totalObj[item.area] = 1;
        } else {
            totalObj[item.area] += 1;
        }
    })
    console.log(totalObj)

    let newData = [];
    let area = Object.keys(totalObj);
    area.forEach(function (item) {
        let ary = [];
        ary.push(item);
        ary.push(totalObj[item]);
        newData.push(ary);
    })
    console.log(newData)

    const chart = c3.generate({
        bindto: ".chart",
        data: {
            columns: newData,
            type: 'donut',
            colors: {
                "台北": "#26C0C7",
                "台中": "#5151D3",
                "高雄": "#E68618"
            },
            size: {
                width: 160
            }
        },
        donut: {
            title: "套票地區比重"
        }
    });
}

/* 新增套票 */
const ticketName = document.querySelector(".ticketName");
const ticketImgUrl = document.querySelector(".ticketImgUrl");
const ticketRegion = document.querySelector(".ticketRegion");
const ticketPrice = document.querySelector(".ticketPrice");
const ticketNum = document.querySelector(".ticketNum");
const ticketRate = document.querySelector(".ticketRate");
const ticketDescription = document.querySelector(".ticketDescription");
const addTicket = document.querySelector(".addTicket-btn")

addTicket.addEventListener('click', function (e) {
    let newData = {};
    newData.id = data.length;
    newData.name = ticketName.value;
    newData.imgUrl = ticketImgUrl.value;
    newData.area = ticketRegion.value;
    newData.price = parseInt(ticketPrice.value);
    newData.group = parseInt(ticketNum.value);
    newData.rate = parseInt(ticketRate.value);
    newData.description = ticketDescription.value;
    data.push(newData);
    //重新篩選並顯示選取的地區的套票
    regionFilter(data)
    renderC3()
    console.log(data)
    addTicketForm.reset();
})