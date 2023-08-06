var loginform = document.querySelector("#login");
loginform.addEventListener("submit",(e)=>{
    e.preventDefault();
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];
    var validUser = users.find(user=> user.email === email && user.password === password);
    if(!validUser){
        return alert("Usuario o contraseña incorrectos");
    }

    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem(`login_success`, JSON.stringify(validUser));
    window.location.href = "index.html";


});


