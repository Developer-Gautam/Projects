
let Array = JSON.parse(localStorage.getItem("users")) || [];

function login() {
  let Email = document.getElementById("kd_email").value;
  let Password = document.getElementById("kd_pass").value;
  console.log(Email, Password);
  if (checkUser(Email, Password) === true) {
    let x = {user_login:true, mail:Email}
    localStorage.setItem("login", JSON.stringify(x));
    alert("Login successful!");
    window.location.href = '../home.html'

    Email = document.getElementById("kd_email").value = "";
    Password = document.getElementById("kd_pass").value = "";
  } else if (Password === "" || Email === "") {
    alert("Fill the empty form");
  } else if (checkPass(Password) === true) {
    alert("Wrong Password");
  } else if (checkEmail(Email) === true) {
    alert("Wrong Email");
  }
}

function checkUser(Email, Password) {
  let filtered = Array.filter(({ email, password }) => {
    return email === Email && password === Password;
  });
  if (filtered.length > 0) {
    return true;
  } else {
    return false;
  }
}

function checkPass(Password) {
  let filtered = Array.filter(({ password }) => {
    return password === Password;
  });
  if (filtered.length > 0) {
    return false;
  } else {
    return true;
  }
}

function checkEmail(Email) {
  let filtered = Array.filter(({ email }) => {
    return email === Email;
  });
  if (filtered.length > 0) {
    return false;
  } else {
    return true;
  }
}