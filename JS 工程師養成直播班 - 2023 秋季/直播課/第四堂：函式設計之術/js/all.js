let children = [
    {name: "K",age: 15},
    {name: "Cream",age: 14},
    {name: "Cindy",age: 16}
]

function showChildrenNum(){
    console.log(`有${children.length}位小朋友`);
}

function addChild(name,age){
    let obj = {};
    obj.name = name;
    obj.age = age;
    children.push(obj);
}

showChildrenNum();

addChild("Johnny",22);

console.log(children);