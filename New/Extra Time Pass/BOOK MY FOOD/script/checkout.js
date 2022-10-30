
let checkLogin = JSON.parse(localStorage.getItem("checkLogin"))


let totalPrice = JSON.parse(localStorage.getItem("totalPrice"))

document.querySelector("#total").innerText = Math.round(totalPrice)




if(checkLogin == true){
    alert("Login first")
    document.querySelector("#checkoutDiv").innerHTML = null
}




if(checkLogin == false){

    document.querySelector("#button").innerText = `Procure to pay ${Math.round(totalPrice)} $`

    document.querySelector("#button").addEventListener("click",()=>{
        
        let name = document.querySelector("#name").value
        alert(`${name}, Your order has been booked`)
    })

}



