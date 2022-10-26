
import {foodData} from '../components/foodData.js'
let data = foodData



let checkLogin = JSON.parse(localStorage.getItem("checkLogin"))

if(checkLogin == true){
    document.querySelector("#items").innerHTML = null
    alert("Login first")
}else{


let box = document.querySelector("#items")
data.forEach((elem, index)=>{
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = elem.image
    let h3 = document.createElement("h3")
    h3.innerText = elem.name
    let h4 = document.createElement("h4")
    h4.innerText = `$ ${elem.price}`
    let button = document.createElement("button")
    button.innerText = "Add to cart"
    button.onclick = ()=>{
        addToCart(elem)
    }

    div.append(img, h3, h4, button)
    box.append(div)
})
// console.log(data)
}



let cartData = JSON.parse(localStorage.getItem("cartData")) || []



// let counter = cartData.length
// console.log(counter)


let addToCart = (el)=>{

    cartData.push(el)

    alert("Item added to cart")

    localStorage.setItem("cartData",JSON.stringify(cartData))
    // console.log(cartData)

}



