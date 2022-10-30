

function nextpay()
{

    let gif = document.createElement('img')
    gif.src = "https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
    gif.setAttribute("class","nikhil_add_loading_logo")
    let body = document.querySelector("body")
    body.append(gif)
    body.style.background = "rgba(0, 0, 0, 0.5)"

    document.querySelector(".nikhil_gateway_container").style.background = "rgba(204, 207, 197, 0.5)"

    
    setTimeout(()=>
    {
        count = 1
        window.location.href = "paymentSuccessful.htm"
       
    },5000)
    
  
    
        
        
  
    function waiting(){
       window.location.href = "../profile/profile.html"
    }
         

     
  
}
nextpay()