
var signubform = document.querySelector("#signubform");
signubform.addEventListener("submit",(e)=>{
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];
    var isUsuarioregistered = users.find(user => user.email===email);
    if(isUsuarioregistered){
        return alert("el usuario esta registrado");
    }

    users.push({name:name,email:email,password:password});
    localStorage.setItem("users",JSON.stringify(users));
    alert("registro exitoso");
    window.location.href ="inicio.html";

});



