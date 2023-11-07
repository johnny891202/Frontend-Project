let colors = ["blue","red","black"]; //中括號代表陣列
let family = {
    //屬性 : "值"
    motherName : "Mary",
    fatherName : "Tom",
    children : 2,
    isAdult: true
}; //大括號代表物件
console.log(family);

//讀取物件的值
console.log(family.fatherName);

//新增物件屬性
let home = {};
home.motherName = "Mary";
home.fatherName = "Tom";
home.children = 2;
home.isAdult = true;
console.log(home);

//修改物件值
home.motherName = "Jenny";
home.fatherName = "Johnny";
home.children += 4;
console.log(home);

//刪除物件資料
delete home.children;
console.log(home);

//另一種讀取物件屬性方法
console.log(home["motherName"]);
let a = "fatherName";
console.log(home[a])

//物件讀取資料判斷時間