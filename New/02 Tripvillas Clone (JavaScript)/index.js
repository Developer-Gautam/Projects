

let url = `https://masai-api.herokuapp.com/hotels/search?city`

let id;
let getData = async ()=>{
    let search = document.querySelector("#location").value
    let res = await fetch(`${url}=${search}`)
    res = await res.json()
    console.log(res.hotels)
    renderInputsearchDiv(res.hotels)
    // console.log(res)
}

// getData()
let debouncing = (func, delay)=>{
    if(id){
        clearInterval(id)
    }
    id = setTimeout(()=>{
        func()
    },delay)
}




let slider = async ()=>{

    try{
        let res = await fetch(`${url}=mumbai`)
        res = await res.json()
    
        renderSlider(res.hotels)
        renderSlider3(res.hotels)

        // console.log(res.hotels)
    }catch(err){
        console.log(err)
    }

}

slider()


let renderSlider = (data)=>{

    let box = document.querySelector("#sliderDiv")

    data.forEach((el)=>{
        let div = document.createElement("div")
        div.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${el.Images.two})`
        div.style.cursor = "pointer"
        div.style.backgroundSize = "cover"
        div.onclick = ()=>{
            requestToBook(el)
            window.location.href = "./request-to-book/index.html"
        }

        let title = document.createElement("h5")
        title.innerText = el.Title
        title.style.color = "rgba(255, 255, 255, 0.773)"

        div.append(title)
        box.append(div)
    })

}


let fullyManagedfunction = async ()=>{
    try{
        let res = await fetch(`${url}=goa`)
        res = await res.json()
    
        renderSlider2(res.hotels)
        // console.log(res.hotels)
    }catch(err){
        console.log(err)
    }
}
fullyManagedfunction()

let renderSlider2 = (data)=>{
    
    let box = document.querySelector("#emptyBox1")
    data.forEach((el)=>{
        let div = document.createElement("div")
        div.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${el.Images.one})`
        div.style.cursor = "pointer"
        div.style.backgroundSize = "cover"

        let title = document.createElement("h5")
        title.innerText = el.Title
        title.style.color = "white"
        
        div.append(title)
        box.append(div)
    })
    
}


let renderSlider3 = (data)=>{
    
    let box1  = document.querySelector('#bottomsliderDiv')

    data.forEach((el)=>{
        let div = document.createElement("div")
        div.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${el.Images.one})`
        div.style.cursor = "pointer"
        div.style.backgroundSize = "cover"

        let title = document.createElement("h5")
        title.innerText = el.Title
        title.style.color = "white"
        
        div.append(title)
        box1.append(div)
    })
    
}

let requestToBook = (data)=>{
    console.log(data)

    localStorage.setItem("selectedData",JSON.stringify(data))
}








let renderInputsearchDiv = (data)=>{
    let resultBox = document.querySelector("#searchResults")
    resultBox.innerHTML = null
    data.forEach((el)=>{
        let div = document.createElement("div")
        div.className = "results"


        let img = document.createElement("img")
        img.src = "https://www.pngfind.com/pngs/m/73-732203_location-marker-location-icon-png-grey-transparent-png.png"
        let title = document.createElement("p")
        title.innerText = el.Title

        div.append(img, title)
        resultBox.append(div)

        div.onclick = ()=>{
            requestToBook(el)
            window.location.href = "./request-to-book/index.html"

        }

    })
}








let shiftToNextPageforResults = ()=>{

    let location = document.querySelector("#location").value
    let checkIn = document.querySelector('#checkIn').value
    let checkOut = document.querySelector("#checkOut").value
    let guests = document.querySelector("#guests").value

    let input = {location, checkIn, checkOut, guests}
    
    localStorage.setItem("locationEnterByUser", JSON.stringify(input))
    window.location.href = "./holiday-homes/index.html"

}





window.onclick = ()=>{
    document.querySelector("#searchResults").innerHTML = null

}








