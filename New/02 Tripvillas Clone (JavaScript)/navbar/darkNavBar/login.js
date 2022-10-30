let loginformPopup = ()=>{
    document.querySelector("#userLogoDiv").innerHTML = null
  
    let box = document.querySelector("#loginFormPopUpDiv")
    box.innerHTML = null
  
    let div1 = document.createElement("div")
    div1.id = "div1"
  
    let h1 = document.createElement('h1')
    h1.innerText = "Sign In"
  
    let instead = document.createElement("p")
    instead.innerText = "Sign Up Instead"
    instead.onclick = ()=>{
      signupformPopup()
      box.innerHTML = null
      // document.querySelector("#signupFormPopUpDiv").style.boxShadow = "none"
    }
  
    instead.style.color = "rgb(45, 94, 255);"
    
    
    let hr1 = document.createElement("hr")
  
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
    cancle.style.border = "1px solid rgba(0, 0, 0, 0.171)"
    cancle.onclick = ()=>{
       box.innerHTML = null
      document.querySelector("#signupFormPopUpDiv").style.boxShadow = "none"
    }
    
    let signIn = document.createElement("button")
    signIn.innerText = "SIGN IN"
    signIn.onclick = ()=>{
      login()
    }
    signIn.style.border = "none"
    signIn.id = "signInButton"
    
    let epDiv = document.createElement("div")
    epDiv.append(email, password)
    epDiv.id = "epDiv"
    
    div1.append(h1, instead)
    div2.append(cancle, signIn)
  
    box.append(div1, hr1, epDiv, hr2, div2)
    
  }
  


















  ///////////////////////








  
let Array = JSON.parse(localStorage.getItem("users")) || [];

function login(){
  let Email = document.getElementById('email').value ;
  let Password = document.getElementById('password').value
  console.log(Email, Password)
  if(checkUser(Email, Password)=== true){
      localStorage.setItem("login", JSON.stringify(true));
      alert('Login successful!')
      
      }else if(Password=== ""||Email=== ""){
        alert("Fill the empty form")
      }
      else if(checkPass(Password)=== true){
        alert('Wrong Password')
      }
      else if(checkEmail(Email)=== true){
        alert("Wrong Email")
      }

      
} 














function checkUser(Email, Password) {
  let filtered = Array.filter(({email,password}) => {
    return email === Email && password === Password;
  });
  if (filtered.length > 0) {
    return true;
  } else {
    return false;
  }
}

function checkPass(Password) {
  let filtered = Array.filter(({password}) => {
    return password === Password;
  });
  if (filtered.length > 0) {
    return false;
  } else {
    return true;
  }
}

function checkEmail(Email, ) {
  let filtered = Array.filter(({email}) => {
    return email === Email;
  });
  if (filtered.length > 0) {
    return false;
  } else {
    return true;
  }
}

//////////////////////////////////////////////////
