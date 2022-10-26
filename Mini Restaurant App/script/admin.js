let url = `https://user-managment-systemm.herokuapp.com/api/foodAppUsers`


let addFood = async () => {

    let title = document.querySelector("#title").value
    let image = document.querySelector("#image").value
    let description = document.querySelector("#description").value
    let price = document.querySelector('#price').value
    let rating = document.querySelector("#rating").value
    let vegNonveg = document.querySelector("#vegNonveg").value

    let adminInput = { title, image, description, price, rating, vegNonveg }

    let res = await fetch(`${url}`, {
        method: "POST",
        body: JSON.stringify(adminInput),
        headers: {
            "Content-Type": "application/json"
        }
    })
    getData()
}



let getData = async () => {
    try {
        let res = await fetch(url)
        res = await res.json()
        console.log(res)
        renderDom(res)

    } catch (err) {
        console.log(err);
    }
}

getData()





let renderDom = (data) => {
    let box = document.querySelector("#emptyBox")

    box.innerHTML = null
    data.forEach((el) => {
        let div = document.createElement("div")
        let image = document.createElement("img")
        image.src = el.image
        let h6 = document.createElement("h5")
        h6.innerText = el.vegNonveg
        let title = document.createElement("h3")
        title.innerText = el.title
        let price = document.createElement("h4")
        price.innerText = `$ ${el.price}`
        let rating = document.createElement("h4")
        rating.innerText = `Rating : ${el.rating}`
        let description = document.createElement("p")
        description.innerText = el.description

        let dltBtn = document.createElement("button")
        dltBtn.innerText = "Remove item"
        dltBtn.onclick = ()=>{
            remove(el.id)
        }

        div.append(image, h6, title, price, rating, description , dltBtn)
        box.append(div)
    })

}


