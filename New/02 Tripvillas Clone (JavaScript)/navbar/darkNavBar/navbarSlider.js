

let renderMenuTab = () => {
  let box = document.querySelector("#menuDiv");
  box.innerHTML = null;

  let div = document.createElement("div");
  div.id = "innerDiv";

  let x = document.createElement("button");
  x.innerText = "✖";
  x.onclick = () => {
    box.innerHTML = null;
  };

  let h4 = document.createElement("h4");
  h4.innerText = "ARE YOU A PROPERTY OWNER/MANAGER?";
  let p1 = document.createElement("p");
  p1.innerText = "List New propierty";
  let p2 = document.createElement("p");
  p2.innerText = "Sign In To Your Dashboard";
  p2.onclick = () => {
    loginformPopup();
    // document.querySelector("#loginFormPopUpDiv").style.boxShadow =
    //   "0px 0px 600px 600px rgba(0, 0, 0, 0.411)";
    box.innerHTML = null;
  };

  let hr1 = document.createElement("hr");

  let h41 = document.createElement("h4");
  h41.innerText = "HOLIDAY HOMES FOR SALE";
  h41.setAttribute('class', "h41")
  h41.addEventListener('click',()=>{
      window.location.href = "./market_place.html"

  })

  let p3 = document.createElement("p");
  p3.innerText = "Tripvillas Managed Homes from A grade developers. Rentals guaranteed";
  p3.addEventListener('click',()=>{
    window.location.href = "./home.html"
  })
  let p4 = document.createElement("p");
  p4.innerText = "Marketplace See what homes are up for sale from different property owners.";
  p4.setAttribute('class', "h41")
  p4.addEventListener('click',()=>{
      window.location.href = "./market_place.html"

  })

  let hr2 = document.createElement("hr");
  
  let h31 = document.createElement("h3");
  h31.innerText = "About Us";
  h31.onclick = () => {
    window.location.href = "./about-us/index.html";
  };
  let h32 = document.createElement("h3");
  h32.innerText = "Privacy Policy";
  h32.onclick = () => {
    window.location.href = "./privacy-policy/Privacy.html";
  };
  let h33 = document.createElement("h3");
  h33.innerText = "Terms of Use";
  h33.onclick = () => {
    window.location.href = "./terms-of-use/terms.html";
  };
  let h34 = document.createElement("h3");
  h34.innerText = "FAQs";
  h34.onclick = () => {
    window.location.href = "\FAQs/faq.html";
  };
  let h35 = document.createElement("h3");
  h35.innerText = "Contact US";
  let hr3 = document.createElement("hr");

  let tpl = document.createElement("b");
  tpl.innerText = "© Tripvillas Pte Ltd";

  div.append(
    x,
    h4,
    p1,
    p2,
    hr1,
    h41,
    p3,
    p4,
    hr2,
    h31,
    h32,
    h33,
    h34,
    h35,
    hr3,
    tpl
  );
  box.append(div);
};

document.querySelector("#searchDiv").onclick = () => {
  document.querySelector("#menuDiv").innerHTML = null;
  document.querySelector("#userLogoDiv").innerHTML = null;
  document.querySelector("#inrPopupDiv").innerHTML = null;
};

// let div = document.querySelector("#menuDiv")

// div.onclick = ()=>{
//   let appendingDiv = document.querySelector("#innerDiv")

//   if()
// }

let userLogoPopUp = () => {
  let box1 = document.querySelector("#userLogoDiv");

  let signIn = document.createElement("p");
  signIn.innerText = "SIGN IN";
  signIn.onclick = () => {
    loginformPopup();
    // document.querySelector("#loginFormPopUpDiv").style.boxShadow =
    //   "0px 0px 600px 600px rgba(0, 0, 0, 0.411)";
  };

  let signUp = document.createElement("p");
  signUp.innerText = "SIGN UP";
  signUp.onclick = () => {
    signupformPopup();
    // document.querySelector("#signupFormPopUpDiv").style.boxShadow =
    //   "0px 0px 600px 600px rgba(0, 0, 0, 0.411)";
  };

  box1.innerHTML = null;
  box1.append(signIn, signUp);
};

let inrPopUp = () => {
  let box = document.querySelector("#inrPopupDiv");
  box.innerHTML = null;

  let usd = document.createElement("p");
  usd.innerText = "USD";

  box.append(usd);
};

// LOGIN FORM START HERE              LOGIN FORM START HERE                          LOGIN FORM START HERE

let loginformPopup = () => {
  document.querySelector("#userLogoDiv").innerHTML = null;

  let box = document.querySelector("#loginFormPopUpDiv");
  box.innerHTML = null;

  let div1 = document.createElement("div");
  div1.id = "div1";

  let h1 = document.createElement("h1");
  h1.innerText = "Sign In";

  let instead = document.createElement("p");
  instead.innerText = "Sign Up Instead";
  instead.onclick = () => {
    signupformPopup();
    box.innerHTML = null;
    // document.querySelector("#signupFormPopUpDiv").style.boxShadow = "none"
  };

  instead.style.color = "rgb(45, 94, 255);";

  let hr1 = document.createElement("hr");

  let email = document.createElement("input");
  email.placeholder = "Email Address";
  email.id = "email";
  email.type = "email";

  let password = document.createElement("input");
  password.placeholder = "Password";
  password.id = "password";
  password.type = "password";

  let hr2 = document.createElement("hr");

  let div2 = document.createElement("div");
  div2.style.width = "78%";
  div2.style.margin = "auto";
  div2.style.marginBottom = "30px";

  let cancle = document.createElement("button");
  cancle.innerText = "CANCLE";
  cancle.style.backgroundColor = "white";
  cancle.style.border = " 1px solid rgba(0, 0, 0, 0.171)";
  cancle.onclick = () => {
    box.innerHTML = null;
    document.querySelector("#loginFormPopUpDiv").style.boxShadow = "none";
  };

  let signIn = document.createElement("button");
  signIn.innerText = "SIGN IN";
  signIn.onclick = () => {
    login();
    box.innerHTML = null;
  };
  signIn.style.border = "none";
  signIn.id = "signInButton";

  let epDiv = document.createElement("div");
  epDiv.append(email, password);
  epDiv.id = "epDiv";

  div1.append(h1, instead);
  div2.append(cancle, signIn);

  box.append(div1, hr1, epDiv, hr2, div2);
};

// SIGNUP FORM START HERE         SIGNUP FORM START HERE                SIGNUP FORM START HERE

let signupformPopup = () => {
  document.querySelector("#userLogoDiv").innerHTML = null;

  let box = document.querySelector("#signupFormPopUpDiv");
  box.innerHTML = null;

  let div1 = document.createElement("div");
  div1.id = "div1";

  let h1 = document.createElement("h1");
  h1.innerText = "Sign Up";

  let instead = document.createElement("p");
  instead.innerText = "Sign In Instead";
  instead.style.color = "rgb(45, 94, 255);";
  instead.onclick = () => {
    loginformPopup();
    box.innerHTML = null;
    // document.querySelector("#loginFormPopUpDiv").style.boxShadow = "none"
  };

  let hr1 = document.createElement("hr");

  let mobile = document.createElement("input");
  mobile.placeholder = "Mobile Number";
  mobile.id = "mobile";
  mobile.type = "number";

  let email = document.createElement("input");
  email.placeholder = "Email Address";
  email.id = "email";
  email.type = "email";

  let password = document.createElement("input");
  password.placeholder = "Password";
  password.id = "password";
  password.type = "password";

  let hr2 = document.createElement("hr");

  let div2 = document.createElement("div");
  div2.style.width = "78%";
  div2.style.margin = "auto";
  div2.style.marginBottom = "30px";

  let cancle = document.createElement("button");
  cancle.innerText = "CANCLE";
  cancle.style.backgroundColor = "white";
  cancle.style.border = " 1px solid rgba(0, 0, 0, 0.171)";
  cancle.onclick = () => {
    box.innerHTML = null;
    document.querySelector("#signupFormPopUpDiv").style.boxShadow = "none";
  };

  let signIn = document.createElement("button");
  signIn.innerText = "SIGN UP";
  signIn.onclick = () => {
    signUp();
    loginformPopup();
    box.innerHTML = null;
  };
  signIn.style.border = "none";
  signIn.id = "signInButton";

  let epDiv = document.createElement("div");
  epDiv.id = "epDiv";

  epDiv.append(mobile, email, password);

  let flName = document.createElement("div");

  let firstName = document.createElement("input");
  firstName.placeholder = "First Name";
  firstName.id = "firstName";
  firstName.type = "text";

  let lastName = document.createElement("input");
  lastName.placeholder = "Last Name";
  lastName.id = "lastName";
  lastName.type = "text";

  flName.append(firstName, lastName);
  flName.id = "flName";

  div1.append(h1, instead);

  div2.append(cancle, signIn);

  box.append(div1, hr1, epDiv, flName, hr2, div2);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// LOGIN FORM FUNCTIONILITY           LOGIN FORM FUNCTIONILITY            LOGIN FORM FUNCTIONILITY

let Array = JSON.parse(localStorage.getItem("users")) || [];

function login() {
  let Email = document.getElementById("email").value;
  let Password = document.getElementById("password").value;
  console.log(Email, Password);
  if (checkUser(Email, Password) === true) {
    let x = {user_login:true, mail:Email}
    localStorage.setItem("login", JSON.stringify(x));
    alert("Login successful!");

    Email = document.getElementById("email").value = "";
    Password = document.getElementById("password").value = "";
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

//////////////////////////////////////////////////

// SIGNIN FORM FUNCTIONILITY            SIGNIN FORM FUNCTIONILITY         SIGNIN FORM FUNCTIONILITY

function signUp() {
  let mobile = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let name = document.getElementById("firstName").value;
  let last = document.getElementById("lastName").value;

  let s1 = new sign(mobile, email, password, name, last);
  console.log("s1:", s1);

  if (checkEmail(email) === true) {
    Array.push(s1);
    localStorage.setItem("users", JSON.stringify(Array));
    alert("Sign Up Sucessfully ");
  } else {
    alert("Email Already Exists");
  }

  mobile = document.getElementById("mobile").value = "";
  email = document.getElementById("email").value = "";
  password = document.getElementById("password").value = "";
  name = document.getElementById("firstName").value = "";
  last = document.getElementById("lastName").value = "";
}
// signUp();

function sign(m, e, p, n, l) {
  this.mobile = m;
  this.email = e;
  this.password = p;
  this.name = n;
  this.last = l;
}

function checkEmail(email) {
  let filtered = Array.filter(({ email }) => {
    return email === email;
  });

  if (filtered.length > 0) {
    return false;
  } else {
    return true;
  }
}























////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


