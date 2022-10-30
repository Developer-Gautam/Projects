const baseUrl = `https://masai-api-mocker.herokuapp.com`

let signUp = async () => {

    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let username = document.querySelector("#username").value
    let mobile = document.querySelector("#mobile").value
    let description = document.querySelector("#description").value

    let userInput = {name, email, password, username, mobile, description}


    try{
        let res = await fetch(`${baseUrl}/auth/register`, {
            method: "POST",
            body: JSON.stringify(userInput),
            headers: {
                "Content-Type": "application/json"
            }
        })
    
        res = await res.json()
        console.log(res)
    }catch(err){
        console.log(err)
    }
}

