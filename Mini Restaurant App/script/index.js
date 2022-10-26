let url = `https://user-managment-systemm.herokuapp.com/api/foodAppUsers`


let getData = async () => {
    try {
        let res = await fetch(url)
        res = await res.json()
        console.log(res)
        renderDom(res) 
        slideShow(res)
        sortLTH(res)

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
    slideShow(data)
}





//slideShow

let id 
let i = 0


let slideShow = (data)=>{
    let box = document.querySelector("#box")
    let info = document.querySelector("#contentForSlideShow")

    id = setInterval(()=>{
        let img = document.createElement("img")
        img.src = data[i].image

        let h2 = document.createElement("h2")
        h2.innerText = `Get your "${data[i].title}" at your door!`
        
        let h3 = document.createElement('h3')
        h3.innerText = `Only on $ ${data[i].price}`
        let dltBtn = document.createElement("button")
        dltBtn.innerText = "Order now"
        dltBtn.onclick = ()=>{
            orderNow()
        }

        box.innerHTML = null
        box.append(img)

        info.innerHTML = null
        info.append(h2, h3, dltBtn)


        i++

        if(i == data.length){
            i = 0
        }
    }, 3000)
    
}
// slideShow()

//contentForSlideShow

