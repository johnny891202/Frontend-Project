//陣列寫法教學
let colors = ['blue','red','yellow','green','black'];
console.log(typeof(colors));

//陣列不只能放字串，也能放數字與混合資料
let books = [5,20,80,320];
console.log(books);

let data = ['blue',5,false];
console.log(data);

let ary = [];
console.log(ary);

//陣列讀取教學
//讀取陣列資料、瞭解陣列長度
console.log(colors[2]);
console.log(colors[4]);
console.log(colors[0]);

// 讀取陣列資料，並賦予新變數
let myfavcolor = colors[4];
console.log(myfavcolor);

// length 讀取陣列長度

let colorsNum = colors.length;
console.log(colorsNum);

//陣列預設寫入資料
let sports = [];
sports[0] = "swim";
sports[1] = "run";
sports[3] = "basketball";
sports[4] = "baseball";
console.log(sports);
console.log(sports.length);

//push 寫入資料
//將push上去的資料放入最後面
sports.push("tennis");
console.log(sports);

//unshift 寫入資料
sports.unshift("volleyball");
sports.unshift("pingpong");
console.log(sports);

//pop 與 shift 刪除資料
sports.pop();
console.log(sports);
sports.shift();
console.log(sports);

//splice 刪除指定資料
sports.splice( 2 , 2 );
//第一個數字，起始位置
//第二個數字，要往後刪除幾筆資料
console.log(sports);