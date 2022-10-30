let baseUrl = ``


let logIn = async ()=>{

    let username = document.querySelector('#username').value
    let password = document.querySelector("#password").value

    let userInput = {password, username }

    try{
        let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
            method : "POST",
            body : JSON.stringify(userInput),
            headers : {
                "Content-Type" : "application/json"
            }
        })
    
        res = await res.json()
        console.log(res)
    }catch(err){
        console.log(err)
    }
}