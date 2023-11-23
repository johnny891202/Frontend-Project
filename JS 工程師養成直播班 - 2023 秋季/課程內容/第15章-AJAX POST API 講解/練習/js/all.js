//https://hex-escape-room.herokuapp.com/api/user/signup

const form = document.querySelector(".signUpForm")
const account = form.querySelector(".account")
const password = form.querySelector(".password")
const send = form.querySelector(".send")


send.addEventListener("click",function(e){
    callSignUp()
})


function callSignUp(){
    //驗證是否有輸入帳號或密碼
    if(account.value === "" || password.value === ""){
        alert("請填寫正確資訊");
        return;
    }
    //抓取 input 裡面的 value
    let obj = {};
    obj.email = account.value;
    obj.password = password.value;
    console.log(obj);

    axios.post("https://hex-escape-room.herokuapp.com/api/user/signup",obj)
    .then(function(res){
        if(res.data.message === "帳號註冊成功"){
            alert("恭喜帳號註冊成功");
        }else{
            alert("帳號註冊失敗，此信箱已經註冊過了!")
        }
        form.reset();
    })
    .catch(function(error){
        console.log(error)
    })
}