async function registerSubmit(){
    let form=document.getElementById('register');
    let formData=new FormData(form);
    let user_name=`'${formData.get('user_id')}'`;
    let password=`'${formData.get('password')}'`;
    let email=`'${formData.get('email')}'`;
    let data= {user_name,password,email};
    await fetch("http://localhost:5000/register", {
    method: "POST",
    mode:"cors",
    headers:{
        "Access-Control-Allow-Origin":"*",
        "Content-type":"application/json"
    },
    body: JSON.stringify(data)
        }).then(function (res) {
            res.json().then(function (lol){
                document.getElementById("alert-box").style.visibility="visible";
                document.getElementById("alert-box-text").innerHTML = JSON.stringify(lol.message);
            })
        });
}
async function loginSubmit(){
    let form=document.getElementById('login');
    let formData=new FormData(form);
    user_name=`'${formData.get('user_id')}'`;
    password=`'${formData.get('password')}'`;
    let data = {user_name,password};
    await fetch("http://localhost:5000/login", {
    method: "POST",
    mode:"cors",
    headers:{
        "Access-Control-Allow-Origin":"*",
        "Content-type":"application/json"
    },
    body: JSON.stringify(data)
        }).then(function (res) {
            res.json().then(function (lol){
                document.getElementById("alert-box").style.visibility="visible";
                document.getElementById("alert-box-text").innerHTML = JSON.stringify(lol.message);
            })
        });
            
    // document.getElementById("alert-box").style.visibility="visible";
    // document.getElementById("alert-box-text").innerHTML = JSON.stringify({user_name,password});
}

var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");

document.getElementById("login-btn").addEventListener("click",login);
document.getElementById("register-btn").addEventListener("click",register);
document.getElementById("login-submit-btn").addEventListener("click",loginSubmit);
document.getElementById("register-submit-btn").addEventListener("click",registerSubmit);
document.getElementById("close-button").addEventListener("click",closeButton);

function closeButton(){
    console.log("hello world-2");
    document.getElementById("alert-box").style.visibility="hidden";
}

function register(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}

function login(){
    x.style.left="50px";
    y.style.left="400px";
    z.style.left="0px";
}