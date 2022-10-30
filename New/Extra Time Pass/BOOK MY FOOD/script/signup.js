
const base_url = `https://masai-api-mocker.herokuapp.com`

let signup = async () => {

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let username = document.getElementById("username").value
    let mobile = document.getElementById("mobile").value
    let description = document.getElementById("description").value

    let form_data = {name, email, password, username, mobile, description}

    let res = await fetch(`${base_url}/auth/register`,{
        method: "POST",
        body: JSON.stringify(form_data),
        headers: {
            "Content-Type" : "application/json",
        }
    })

    res = await res.json()
    console.log(res)

    if(res.error == true){
        alert("Signup failed, user already exists")
    }
    if(res.error == false){
        alert("Signup successful")
    }

};
