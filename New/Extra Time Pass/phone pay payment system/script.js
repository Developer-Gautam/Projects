





let sendMoney = ()=>{
    let amountInput = document.querySelector("#amount").value

    if(amountInput == ''){
        alert("Enter Amount")
    }else{
        
    localStorage.setItem("amount",JSON.stringify(amountInput))

    window.location.href = "animation.html"
    }


}

