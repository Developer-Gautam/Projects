const base_url = `https://masai-api-mocker.herokuapp.com`

const end_url = `/auth/login`

let login = async ()=>{


    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value

    let from_data = {username, password}

    let res = await fetch(`${base_url}${end_url}`,{
        method: "POST",
        body: JSON.stringify(from_data),
        headers:{
            "Content-Type": "application/json",
        }
    })

    res = await res.json()
    console.log(res)
    // getProfile(username, res.token)
    localStorage.setItem("checkLogin",JSON.stringify(res.error))

    if(res.error == false){
        alert("Login successful")
        window.location.href = "index.html"
    }
    if(res.error == true){
        alert("Signup before login")
    }
    
}





