
import navbar from "./navbar/lightNavBar/navbar.js";
document.getElementById("nav").innerHTML = navbar();

// import navbar from "./navbar/footer/footer.js";
import footer_p from "./navbar/footer/footer.js";
document.getElementById("foot").innerHTML = footer_p();
let logoDiv = document.getElementById('logoDiv')
logoDiv.addEventListener('click', ()=>{
    console.log("fadfk");
    window.location.href = "./index.html"
    
})
let sing_up_u = document.getElementById('sing_up_u')
sing_up_u.addEventListener('click', ()=>{
    // console.log("fadfk");
    window.location.href = "./sign-in-and-sign-up"
    
})
let h_day_homes = document.getElementById('h_day_homes')
h_day_homes.addEventListener('click', ()=>{
    // console.log("fadfk");
    window.location.href = "market_place.html"
    
})
let url = "https://serene-river-66434.herokuapp.com/api/market_place";

let getData = async() => {
    try{
        let res = await fetch(url);
        res = await res.json();
        if(res !== undefined){
            renderDom(res);
            
        }
    }
    catch(err){
        console.log("something went wrong!");
    }
}




let renderDom = (data) => {
let prop_container = document.getElementById("prop_container");
    // console.log(data);
    prop_container.innerHTML = null;

    data.forEach((el) => {
        let div = document.createElement("div");

        

        let img = document.createElement("img");
        img.src = el.src;
       

        let h2 = document.createElement("h2");
        h2.innerText = el.text;

        let des = document.createElement("p");
        des.innerText = el.mb0;

        let span = document.createElement("span");
        span.innerText = el.country;
       
        let p = document.createElement("p");
        p.innerText = el.caption;

       
        div.append(img,h2,des,span,p);
        prop_container.append(div);
        
    })
};



 function filterCountry(){
    
    let country = document.getElementById('country')
    country.addEventListener('change', async()=>{
        console.log(country.value)
        let country1 = country.value
        
        let res = await fetch(`${url}/?country=${country1}`)
        res = await res.json()
        let submit = document.getElementById('submit')
        submit.addEventListener('click', ()=>{
            renderDom(res)

            console.log(res)
        })
   
    
      })
}

filterCountry()

getData();
