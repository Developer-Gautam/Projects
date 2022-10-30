let url = "https://newsapi.org/v2/everything?q=india&from=2022-09-07&to=2022-09-07&sortBy=popularity&apiKey=43fb307af5f6410b9d9e9d2c0fa8cee1"

let getData = async () => {

    try {

        let res = await fetch(url)
        let data = await res.json()

        appendFunction(data.articles)
        // console.log(data)


    } catch (err) {
        console.log(err)
    }

}

getData()




let box = document.querySelector("#newsDiv")

let appendFunction = (data) => {

    data = data.slice(0, 5)
    // console.log(data.length)

    data.map((elem) => {
        let div = document.createElement("div")
        div.id = "news"
        let div1 = document.createElement("div")
        div1.id = "News_content"

        let img = document.createElement("img")
        img.src = elem.urlToImage

        let h4 = document.createElement("h4")
        h4.innerText = elem.title
        let h5 = document.createElement("h5")
        h5.innerText = elem.author
        h5.style.color = "gray"
        let p = document.createElement("p")
        p.innerText = elem.content

        div1.append(h4, h5, p)
        div.append(img, div1)

        box.append(div)
    })
}




