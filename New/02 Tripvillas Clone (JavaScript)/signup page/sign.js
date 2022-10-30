let Array = JSON.parse(localStorage.getItem("users")) || [];

let form = document.getElementById("kd_signup");
form.addEventListener("submit", myfunc);

function myfunc(event) {
  event.preventDefault();
  let mobile = form.kd_mobile.value;
  let email = form.kd_email.value;
  let password = form.kd_pass.value;
  let name = form.kd_name.value;
  let last = form.kd_last.value;

  let s1 = new sign(mobile, email, password, name, last);
  console.log("s1:", s1);

  if(checkEmail(email)=== true){
    Array.push(s1);
    localStorage.setItem('users',JSON.stringify(Array));
    alert('Sign Up Sucessfully ')
  }
  else{
    alert('Email Already Exists');
  }

   mobile = form.kd_mobile.value='';
   email = form.kd_email.value='';
   password = form.kd_pass.value='';
   name = form.kd_name.value='';
   last = form.kd_last.value='';
}
myfunc();

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
