import footer_p from './navbar/footer/footer.js'
import navbar from './navbar/lightNavBar/navbar1.js'
// import dropdown from './navbar/lightNavBar/navdropdown.js'
// dropdown()


document.getElementById('nav_top').innerHTML = navbar()
document.getElementById('footer1').innerHTML = footer_p()

function dropdown(){
    let user_hover_menu =  document.getElementById('user_hover_menu')
    let user_name_hover_menu =  document.getElementById('user_name_hover_menu')
    user_hover_menu.style.display="none"
    let count = 0
    user_name_hover_menu.addEventListener('click', ()=>{
        if(count===0){
            user_hover_menu.style.display="block"
            count =1
        }else if(count===1){
            user_hover_menu.style.display="none"
            count=0
        }
        
        
    })
    let holiday_nav_item =  document.getElementById('holiday_nav_item')
let holiday_hover =  document.getElementById('holiday_hover')
holiday_hover.style.display="none"
let count1 = 0
holiday_nav_item.addEventListener('click', ()=>{
    console.log("hello")
    if(count1===0){
        holiday_hover.style.display="block"
        count1 =1
    }else if(count1===1){
        holiday_hover.style.display="none"
        count1=0
    }
    
    
}) 
    }

  

dropdown()

let  backHome = document.getElementById('backHome')
backHome.addEventListener('click', ()=>{
    window.location.href="./index.html"
})
let  dwn_inbox = document.getElementById('dwn_inbox')
let  dwn_book1 = document.getElementById('dwn_book1')
let  dwn_setting = document.getElementById('dwn_setting')
let  dwn_logout = document.getElementById('backHome')

let arr = [dwn_book1, dwn_inbox, dwn_setting, dwn_logout]
for(let i=0;i<arr.length;i++){
    arr[i].addEventListener('click', ()=>{
        window.location.href="./profile/profile.html"
    })
}



//  let sing_up_u = document.getElementById('sing_up_u')
//  let check_login =JSON.parse(localStorage.getItem("login"))
//  let users =JSON.parse(localStorage.getItem("users")) || []
//  if(check_login.user_login===true){
//  let x =  users.filter(({email})=>{
//          return email==check_login.mail
        
//     })
//     console.log(x)
    // sing_up_u.innerText = x[0].name
// }
 
//  sing_up_u.addEventListener('click', ()=>{
       
//  })
    // window.location.href = "\index.html"

let url = "https://serene-river-66434.herokuapp.com/api/home_property";

let getData = async() => {
    try{
        let res = await fetch(url);
        res = await res.json();
        renderDom(res);
         console.log(res)
    }
    catch(err){
        console.log("something went wrong!");
    }
    
};

let renderDom = (res) => {
    let lower_part = document.getElementById("lower_part");
    let home_list = document.getElementById("home_list");

    res.forEach((el) => {

        let div1 = document.createElement("div");
        div1.setAttribute("class","list_content");

        div1.innerHTML = `
                <div style="background-image: url(${el.img});"></div>
                <div class="list_content2">
                    <div class="cont_details">
                        <div>
                            <h2>${el.title}</h2>
                            <p>${el.des1}</p>
                        </div>
                        <div>
                            <button>${el.button}</button>
                        </div> 
                    </div>
                    <div class="cont_des">
                        <div>
                            <div>
                                <h2>${el.price}</h2>
                                <p>${el.p1}</p>
                            </div>
                            <div>
                                <h2>${el.H_community}</h2>
                                <p>${el.p2}</p>
                            </div>
                            <div>
                                <h2>${el.T_yield}</h2>
                                <p>${el.p3}</p>
                            </div>
                            <div>
                                <h2>${el.year_IRR}</h2>
                                <p>${el.p4}</p>
                            </div>
                        </div>
                        <div>
                            <p>${el.des2}</p>
                        </div>
                    </div>
                </div>

            `

        home_list.append(div1);

    });

    lower_part.append(home_list); 
}

getData();