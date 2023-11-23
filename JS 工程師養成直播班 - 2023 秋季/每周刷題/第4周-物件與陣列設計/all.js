/* 題目一：創建陣列與物件 */

const toBuyList = ["牛奶","酪梨","咖啡粉","蘋果麵包"];
const userInfo = {
    age: 20,
    name: "小明",
    sex: "男",
    hobby: ["前端開發", "讀書", "跑步"],
    favoriteFood: "滷肉飯",
    isVegetarian: false
};

console.log("題目一：創建陣列與物件");
console.log(toBuyList)
console.log(userInfo)

/* 題目二：獲取陣列與物件長度 */

console.log("題目二：獲取陣列與物件長度");
console.log(toBuyList.length);
console.log(Object.keys(userInfo).length);

/* 題目三：獲取陣列或物件內容 */

let key = Object.keys(userInfo);

console.log("題目三：獲取陣列或物件內容");
console.log(toBuyList[0],toBuyList[toBuyList.length - 1]);
console.log(`${key[0]}: ${userInfo.age} / ${key[key.length - 1]}: ${userInfo.isVegetarian}`)

/* 題目四：複製陣列或物件(淺拷貝) */

const newToBuyList = [...toBuyList]; //類似toBuyList.slice()，但toBuyList不會受到影響
const newUserInfo = Object.assign({},userInfo);

console.log("題目四：複製陣列或物件(淺拷貝)");
console.log(newToBuyList);
console.log(newUserInfo);

/* 題目五：修改陣列與物件(增、刪、改) */

newToBuyList.splice(2,1);
newToBuyList.unshift("布丁");
newToBuyList.pop();

newUserInfo.age += 1;
newUserInfo.isVegetarian = true;
newUserInfo.hasDriverLiscense = true;
delete newUserInfo.favoriteFood;

console.log("題目五：修改陣列與物件(增、刪、改)");
console.log(newToBuyList)
console.log(newUserInfo)

/* 題目六：複製陣列或物件(深拷貝) */
const nestedNumbers = [[1],[2]];
const deepCloneNestedNumbers = JSON.parse(JSON.stringify(nestedNumbers));
deepCloneNestedNumbers[0].push(300);

console.log("題目六：複製陣列或物件(深拷貝)");
console.log(nestedNumbers,deepCloneNestedNumbers);

/* 題目七：月有陰晴圓缺🌚🌝 */

const moonPhase = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
function moonCakeTime(planetPhase){
    return planetPhase.map(function(moonPhase){
        if(moonPhase === "🌕"){
            return "🌕 + 🥮";
        }else{
            return moonPhase;
        }
    })
}

console.log("題目七：月有陰晴圓缺🌚🌝");
console.log(moonCakeTime(moonPhase));

/* 題目八：組合 HTML 標籤 */

const cardData = [
    {
        url: "https://www.hexschool.com/",
        content: "六角學院"
    },
    {
        url: "https://www.heptagonschool.com/",
        content: "七角學院"
    },
    {
        url: "https://www.Octagonschool.com/",
        content: "八角學院"
    }
]
const cardHTML = []
cardData.forEach(function(item){
    console.log(item)
    const cardStructure = `<li><a href='${item.url}'>${item.content}</a></li>`
    cardHTML.push(cardStructure)
})

console.log("題目八：組合 HTML 標籤");
console.log(cardHTML);

/* 題目九：小餐館訂單顯示 */

const orders = ["🍔","🍜","🍕","🍜","🍔"];
function countOrders(orders){
    let counts = {};
    // console.log(counts)
    orders.forEach(function(item){
        // console.log(item)
        if(counts[item]){
            counts[item] += 1;
        }else{
            counts[item] = 1;
        }
        // console.log(counts)
    })
    return counts;  
}

console.log("題目九：小餐館訂單顯示");
console.log(countOrders(orders));

/* 題目十：代辦事項 */

let tasks = [];

function addTask(task){
    const addTask = {
        id: tasks.length + 1,
        name: task,
        isCompleted: false
    }
    tasks.push(addTask);
    console.log(tasks);
}

function removeTask(targetId){
    tasks.forEach(function(item,index){
        if(item.id === targetId){
            tasks.splice(index,1)
        }
    })
    console.log(tasks)
}

function toggleTask(targetId){
    tasks.forEach(function(item){
        if(item.id === targetId){
            item.isCompleted = true;
        }
    })
    console.log(tasks)
}

function renderTasks(tasks){
    console.log(tasks)
}

console.log("題目十：代辦事項");
addTask("A");
addTask("B");
addTask("C");
toggleTask(2);
removeTask(1);
renderTasks(tasks);