


let sendMoney = ()=>{
    
    let wallet = 1000
    let amount = JSON.parse(localStorage.getItem("amount"))
    
    // function getData(){
    //     if(wallet >= amountInput){
    //         return true
    //     }else{
        //         return false
        //     }
        // }
    
        
        
    let newPromise = new Promise(function(resolve, reject){
        
        // let data = false
        
        setTimeout(function(){
            
            // data = getData()
            
            if(wallet >= amount){ 
                resolve("successful") //success value
            }else{
                reject("failed") //reject value
            }
    
        }, 2000)
    
    })
    
    let img = document.querySelector("#img")
    let mainDiv = document.querySelector("#mainDiv")
    
    
    newPromise.then(function(resolve){
        console.log(resolve)
        mainDiv = ""
        img.src = "https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif"
        document.querySelector("#mainDiv").append(img)

        wallet = wallet - amount 
        alert("Transaction Successful")
    })
    newPromise.catch(function(reject){
        console.log(reject)
        mainDiv = ""
        img.src = "https://www.deannaskitchensg.com/img/icons/Cant_Deliver.gif"
        document.querySelector("#mainDiv").append(img)
        alert("Insufficient Balance")
    })
    
    // console.log(newPromise)
    
    // window.location.href = "animation.html"

}

sendMoney()