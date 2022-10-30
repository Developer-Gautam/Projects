

const url = `https://masai-api.herokuapp.com/hotels/search?city`

let previousInput = JSON.parse(localStorage.getItem("locationEnterByUser"))



let getData = async ()=>{
    search = previousInput.location

    let res = await fetch(`${url}=${search}`)
    res = await res.json()
    console.log(res)
    renderDom(res.hotels)
}


getData()




renderDom = (data)=>{
    let box = document.querySelector("#searchResultHouses")
    box.innerHTML = null
    data.forEach((el)=>{
        let div2 = document.createElement("div")
        div2.onclick = ()=>{
            requestToBook(el)
            window.location.href = "/request-to-book/index.html"
        }




        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.Images.one
        let title = document.createElement("h4")
        title.innerText = el.Title
        let rating = document.createElement("h5")
        rating.innerText = `Rating : ${el.Rating}`
        let rooms = document.createElement("h5")
        rooms.innerText = `No. of Rooms : ${el.Rooms}`
        let ac = document.createElement("p")
        if(el.Ac == true){
            ac.innerText = `AC : Yes`
        }else{
            ac.innerText = `AC : No`
        }
        let price = document.createElement("h3")
        price.innerText = `₹${el.Price} / Per night`

        div.append(title, rating, rooms, ac, price)
        div2.append(img, div)
        box.append(div2)
    })
}



let changeWindow = ()=>{
    window.location.href = "/index.html"
}


let requestToBook = (data)=>{
    console.log(data)

    localStorage.setItem("selectedData",JSON.stringify(data))
}
