let people = [
    {
        area: "高雄",
        name: "小明"
    },
    {
        area: "高雄",
        name: "小天"
    },
    {
        area: "台中",
        name: "小華"
    },
    {
        area: "台北",
        name: "小華"
    }
]

let total = {};
people.forEach(function (item) {
    if (total[item.area] === undefined) {
        total[item.area] = 1;
    } else {
        total[item.area] += 1;
    }
})

const areaArray = Object.keys(total) //輸出結果: ['高雄','台中','台北']

let newData = [];
areaArray.forEach(function (item) {
    let ary = [];
    ary.push(item);
    ary.push(total[item])
    newData.push(ary);
})
console.log(newData)