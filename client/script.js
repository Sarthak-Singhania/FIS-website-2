async function registerSubmit(){
    let form=document.getElementById('register');
    let formData=new FormData(form);
    let user_name=`'${formData.get('user_id')}'`;
    let password=`'${formData.get('password')}'`;
    let email=`'${formData.get('email')}'`;
    let data= {user_name,password,email};
    await fetch("localhost:5000/register", {
  method: "POST",
  headers: {'Content-Type': 'application/json'}, 
  body: JSON.stringify(data)
    }).then(res => {
        window.alert(res.message)
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
  headers: {'Content-Type': 'application/json'}, 
  body: JSON.stringify(data)
    }).then(res => {
        window.alert(res)
    });
}

var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");

document.getElementById("login-btn").addEventListener("click",login);
document.getElementById("register-btn").addEventListener("click",register);
document.getElementById("login-submit-btn").addEventListener("click",loginSubmit);
document.getElementById("register-submit-btn").addEventListener("click",registerSubmit);

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