let token = ""
let id = ""

function signUp(){
    axios.post("http://localhost:3000/signup",{
        "email": "ko8912022@mail.com",
        "password": "ko891202",
        "nickName":"維哲"
    })
    .then(function(response){
        console.log(response.data)
    })
    .catch(function(error){
        console.log(error.response)
    })
}

function login(){
    axios.post("http://localhost:3000/login",{
        "email": "ko891202@mail.com",
        "password": "1q2w3e4r5w"
    })
    .then(function(response){
        token = response.data.accessToken;
        localStorage.setItem("token",token);
        id = response.data.user.id;
    })
    .catch(function(error){
        console.log(error.response)
    })
}

function updatePassword(){
    axios.patch("http://localhost:3000/600/users/2",{
        "password": "1q2w3e4r5w"
    },{
        headers:{
            "authorization":`Bearer ${token}`
        }
    })
    .then(function(response){
        console.log(response.data);
    })
    .catch(function(error){
        console.log(error.response)
    })
}

function addPost(){
    axios.post(`http://localhost:3000/600/users/${id}/posts`,{
        "content":"今天要洗臉2"
    },{
        headers:{
            "authorization":`Bearer ${token}`
        }
    })
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error.response);
    })
}