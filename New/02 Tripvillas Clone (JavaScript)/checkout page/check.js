
let final = JSON.parse(localStorage.getItem('guests'))||[];

let button = document.querySelector(".btn");
button.onclick = () => {
  let pre = document.getElementById('kd_select').value ;
  let mobile = document.getElementById('mobile').value ;
  let name = document.getElementById('first').value ;
  let surname = document.getElementById('last').value ;
  let email = document.getElementById('email').value ;
  let massage = document.getElementById('massage').value ;

  let obj = {
    pre,
    mobile,
    name,
    surname,
    email,
    massage
  }
console.log(obj)
  final.push(obj) ;
  localStorage.setItem('guests',JSON.stringify(final))

  window.location.href = "../payment/paymentGateway.html";
};

let button1 = document.querySelector("#choose");
button1.onclick = () => {
  let col = document.querySelector(".kd_pencile");
  col.style.border = "3px solid #1e87f0";
  let col2 = document.querySelector(".kd_pen");
  col2.style.border = "none";
  button1.innerHTML = null;
  button1.style.backgroundColor = "white";
};

// IMAGE AND HOTEL NAME          IMAGE AND HOTEL NAME            IMAGE AND HOTEL NAME

// let data = JSON.parse(localStorage.getItem("selectedData"))||[]


// function getData(data){
// console.log('data:', data)
// data.forEach(({Title})=>{
//   console.log(Title)

// })



// }
// getData(data)











// CHECKIN CHECKOUT GUEST        CHECKIN CHECKOUT GUEST       CHECKIN CHECKOUT GUEST


let details = JSON.parse(localStorage.getItem("hotelsforcheckout"))||[];

function renderDom (details) {
  let box = document.getElementById('kd_six')
  box.innerHTML = null;
  details.forEach(element => {
    // console.log('element:', element)
    let div = document.createElement("div");
    div.setAttribute("class", 'kd_div')
    let p1 = document.createElement("p");
    p1.innerText = `Check-in 
     ${element.checkIn}`

    let div1 = document.createElement("div");
    div1.setAttribute("class", 'kd_div')
    let p2 = document.createElement("p");
    p2.innerText = `Check-out 
     ${element.checkOut}`


    let div3 = document.createElement("div");
    div3.setAttribute("class", 'kd_div')
    let p3 = document.createElement("p");
    p3.innerText = `Guests 
     ${element.guests}`

    div.append(p1)
    div1.append(p2)
    div3.append(p3)
    box.append(div,div1,div3)
  });
 
};
renderDom (details)






