
let signupformPopup = ()=>{
    document.querySelector("#userLogoDiv").innerHTML = null
  
    let box = document.querySelector("#signupFormPopUpDiv")
    box.innerHTML = null
  
    let div1 = document.createElement("div")
    div1.id = "div1"
  
    let h1 = document.createElement('h1')
    h1.innerText = "Sign Up"
  
    let instead = document.createElement("p")
    instead.innerText = "Sign In Instead"
    instead.style.color = "rgb(45, 94, 255);"
    instead.onclick = ()=>{
      loginformPopup()
      box.innerHTML = null
      // document.querySelector("#loginFormPopUpDiv").style.boxShadow = "none"
  
    }
    
    
    let hr1 = document.createElement("hr")
  
    let mobile = document.createElement('input')
    mobile.placeholder = "Mobile Number"
    mobile.id = "mobile"
    mobile.type = "number"
  
    let email = document.createElement("input")
    email.placeholder = "Email Address"
    email.id = "email"
    email.type = "email"
  
    let password = document.createElement("input")
    password.placeholder = "Password"
    password.id = "password"
    password.type = "password"
    
    let hr2 = document.createElement("hr")
  
  
  
  
    let div2 = document.createElement("div")
    div2.style.width = "78%"
    div2.style.margin = "auto"
    div2.style.marginBottom = "30px"
    
    let cancle = document.createElement("button")
    cancle.innerText = "CANCLE"
    cancle.style.backgroundColor = "white"
    cancle.style.border = " 1px solid rgba(0, 0, 0, 0.171)"
    cancle.onclick = ()=>{
       box.innerHTML = null
      document.querySelector("#loginFormPopUpDiv").style.boxShadow = "none"
    }
    
    let signIn = document.createElement("button")
    signIn.innerText = "SIGN UP"
    signIn.onclick = ()=>{
      login()
    }
    signIn.style.border = "none"
    signIn.id = "signInButton"
    
    let epDiv = document.createElement("div")
    epDiv.id = "epDiv"
    
    epDiv.append(mobile, email, password)
    
    let flName = document.createElement("div")
  
    let firstName = document.createElement("input")
    firstName.placeholder = "First Name"
    firstName.id = "firstName"
    firstName.type = "text"
  
    let lastName = document.createElement("input")
    lastName.placeholder = "Last Name"
    lastName.id = "lastName"
    lastName.type = "text"
  
    flName.append(firstName, lastName)
    flName.id = "flName"
  
    div1.append(h1, instead)
  
    div2.append(cancle, signIn)
  
    box.append(div1, hr1, epDiv,flName,  hr2, div2)
    
  }
  
  
  
  
  
  
  




//   let Array = JSON.parse(localStorage.getItem("users")) || [];


// form.addEventListener("submit", myfunc);

// function myfunc(event) {
// //   event.preventDefault();
//   let mobile = form.mobile.value;
//   let email = form.email.value;
//   let password = form.password.value;
//   let name = form.firstName.value;
//   let last = form.lastName.value;

//   let s1 = new sign(mobile, email, password, name, last);
//   console.log("s1:", s1);

//   if(checkEmail(email)=== true){
//     Array.push(s1);
//     localStorage.setItem('users',JSON.stringify(Array));
//     alert('Sign Up Sucessfully ')
//   }
//   else{
//     alert('Email Already Exists');
//   }

//    mobile = form.kd_mobile.value='';
//    email = form.kd_email.value='';
//    password = form.kd_pass.value='';
//    name = form.kd_name.value='';
//    last = form.kd_last.value='';
// }
// myfunc();

// function sign(m, e, p, n, l) {
//   this.mobile = m;
//   this.email = e;
//   this.password = p;
//   this.name = n;
//   this.last = l;
// }

// function checkEmail(email) {
//   let filtered = Array.filter(({ email }) => {
//     return email === email;
//   });

//   if (filtered.length > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }