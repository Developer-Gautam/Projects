

let data = JSON.parse(localStorage.getItem("selectedData")) 
// console.log(data)


let imageOne = document.createElement('img')
imageOne.src = data.Images.one

let imageTwo = document.createElement("img")
imageTwo.src = data.Images.two

let imgBox = document.querySelector("#imageDiv")
imgBox.innerHTML = null
imgBox.append(imageOne, imageTwo)


let h1 = document.createElement("h1")
h1.innerText = data.Title
document.querySelector("#title").append(h1)

let h2 = document.createElement("p")
h2.innerText = data.Title
document.querySelector("#title").append(h2)










let changeWindow = ()=>{
    window.location.href = "../index.html"
}




let details = JSON.parse(localStorage.getItem("hotelsforcheckout"))||[];


let sendData = () => {
  let checkIn = document.querySelector("#checkIn").value;
  let checkOut = document.querySelector("#checkOut").value;
  let guests = document.querySelector("#guests").value;

  let obj = { checkIn, checkOut, guests };
  details.push(obj);

  localStorage.setItem("hotelsforcheckout", JSON.stringify(details));

  window.location.href = "../checkout page/check.html";
};










let map = document.querySelector("#gmap_canvas")
let key = "106756f048e4411aeb7a1db7e3738b44" ;



let getWeather = async ()=>{
    
    let cityName = JSON.parse(localStorage.getItem("locationEnterByUser"))
    let city = cityName.location ;

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)

    let data = await res.json()
        console.log(data)
        
        appendData(data)

}

getWeather()



function appendData(data){

    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}









