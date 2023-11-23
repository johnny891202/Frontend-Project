//https://hex-escape-room.herokuapp.com/api/user/signup


/* 註冊功能 */
const signUpForm = document.querySelector(".signUpForm")
const account = document.querySelector(".account")
const password = document.querySelector(".password")
const signUp = document.querySelector(".signUp")


signUp.addEventListener("click",function(e){
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
        signUpForm.reset();
    })
    .catch(function(error){
        console.log(error);
    })
}

/* 登入功能 */
const loginForm = document.querySelector(".loginForm");
const loginAccount = document.querySelector(".loginAccount");
const loginPassword = document.querySelector(".loginPassword");
const login = document.querySelector(".login")

login.addEventListener("click",function(e){
    SignUp()
})

function SignUp(){
    if( loginAccount.value === "" || loginPassword.value === ""){
        alert("請填寫正確資訊");
    }

    let obj = {};
    obj.email = loginAccount.value;
    obj.password = loginPassword.value;
    console.log(obj)

    axios.post("https://hex-escape-room.herokuapp.com/api/user/signin",obj)
    .then(function(res){
        if(res.data.message === "登入成功"){
            alert("恭喜登入成功");
        }else{
            alert("帳號不存在或帳號密碼錯誤");
        }
        loginForm.reset();
    })
    .catch(function(error){
        console.log(error);
    })
}