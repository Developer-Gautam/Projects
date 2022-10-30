let data = JSON.parse(localStorage.getItem("cartData"))

console.log(data)




let checkLogin = JSON.parse(localStorage.getItem("checkLogin"))


if(checkLogin == true){
    alert("Login first")
    document.querySelector("#checkoutDiv").innerHTML = null
}







let box = document.querySelector("#items")


let appendFunction = ()=>{
        box.innerHTML = null
        data.forEach((elem, index)=>{
            let div = document.createElement("div")
            
            let img = document.createElement("img")
            img.src = elem.image
            let h3 = document.createElement("h3")
            h3.innerText = elem.name
            let h4 = document.createElement("h4")
            h4.innerText = `$ ${elem.price}`
            let button = document.createElement("button")
            button.innerText = "Remove"
            button.onclick = ()=>{
                remove(index)
            }
            
            div.append(img, h3, h4, button)
            box.append(div)
        })
}
appendFunction()

let remove = (index)=>{

    data.splice(index,1)
    localStorage.setItem("cartData",JSON.stringify(data))
    // console.log(data)
    appendFunction()
}

let totalPrice = 0
let priceFunction = ()=>{
    for(let key in data){
        // console.log(data[key].price)
        totalPrice += data[key].price
    }
    
    document.querySelector("#total").innerText = Math.round(totalPrice)

    localStorage.setItem("totalPrice",JSON.stringify(totalPrice))
}
priceFunction()
