

let main = async () => {

    let query = document.querySelector("#search").value
    let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2022-08-09&sortBy=publishedAt&apiKey=43fb307af5f6410b9d9e9d2c0fa8cee1
    `)
    let data = await res.json()

    console.log(data)
}

main()

