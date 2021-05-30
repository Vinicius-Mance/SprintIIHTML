
let inputName = document.getElementById("input-name");
let inputPassword = document.getElementById('input-password');

function validateLogin(namePar,passwordPar) {

  document.getElementById("login-form").addEventListener("submit", function(e) { e.preventDefault();});

  let users = [
                {"name":"Vinicius","password":"87985"},
                {"name":"José","password":"89295"}
              ];

  for (var i = 0; i < users.length; i++) {

    if (users[i].name == namePar && users[i].password == passwordPar) {
        return window.location.href="portal.html";
    }

  }
  alert("Nome ou senha incorretos");

}
