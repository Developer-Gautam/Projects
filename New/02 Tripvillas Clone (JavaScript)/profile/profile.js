
let createForm =()=>{
    let div_main = document.createElement('div')
}
  

let updated_image;
//navbar dropdown........................
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

//update information open.......................
let dwn_inbox = document.getElementById('dwn_inbox')
let dwn_book1 = document.getElementById('dwn_book1')
let dwn_setting = document.getElementById('dwn_setting')
let dwn_logout = document.getElementById('dwn_logout')


let bookings = document.getElementById('bookings')
let profile_info = document.getElementById('profile_info')
let profile_pic = document.getElementById('profile_pic')
let profile_changepwd = document.getElementById('profile_changepwd')
let booking_message = document.getElementById('booking_message')
let update_profile_pic = document.getElementById('update_profile_pic')
let change_pwd_div = document.getElementById('change_pwd_div')
let all_booked = document.getElementById('all_booked')
let check_open = 4
let b = [dwn_inbox, bookings, dwn_book1]
let u_pr_update = [profile_info, dwn_setting]


b.forEach((el)=>{
   el.addEventListener('click', ()=>{
    if(check_open===2){
        update_profile_pic.style.display="none"
        check_open=0
    }else if(check_open===3){
        change_pwd_div.style.display="none"
        check_open =0
    }else if(check_open===1){
        booking_message.style.display="none"
        check_open =0 
    }
    if(check_open===0){
        all_booked.style.display="block"
        
        }
        
    check_open = 4
})  
})



u_pr_update.forEach((el)=>{
el.addEventListener('click', ()=>{
    if(check_open===2){
        update_profile_pic.style.display="none"
        check_open=0
    }else if(check_open===3){
        change_pwd_div.style.display="none"
        check_open =0
    }else if(check_open===4){
        all_booked.style.display="none"
        check_open =0
    }
    if(check_open===0){
        booking_message.style.display="block"
        }
        
    check_open = 1
})  
})
profile_pic.addEventListener('click', ()=>{
    if(check_open===1){
        check_open=0
        booking_message.style.display="none"
    }else if(check_open===3){
        check_open=0
        change_pwd_div.style.display="none"
    }else if(check_open===4){
        check_open =0
        all_booked.style.display="none"
    }
    if(check_open===0){
        check_open=0
        update_profile_pic.style.display="block"
    }
    check_open=2
})  

profile_changepwd.addEventListener('click', ()=>{
    if(check_open===2){
        update_profile_pic.style.display="none"
        check_open = 0
    }else if(check_open===1){
        booking_message.style.display="none"
        check_open = 0
    }else if(check_open===4){
        all_booked.style.display="none"
        check_open =0
    }
    if(check_open===0){
        change_pwd_div.style.display="block"
    }
    check_open = 3
})  


//getting all personal information of user

//get food habit

let foodHabit = document.querySelectorAll('input[name="habit_food"]')
let smoking = document.querySelectorAll('input[name="smoking"]')
let drinking = document.querySelectorAll('input[name="drinking"]')
let user_habit;
let user_smoking;
let user_drinking;
foodHabit.forEach((el)=>{
    el.addEventListener('change', ()=>{
        let foodHabit1 = document.querySelector('input[name="habit_food"]:checked').value
        user_habit = foodHabit1
       
        
    })
})
smoking.forEach((el)=>{
  el.addEventListener('change', ()=>{
    let smoking1 = document.querySelector('input[name="smoking"]:checked').value
    user_smoking = smoking1
    
  })
})
drinking.forEach((el)=>{
    el.addEventListener('change', ()=>{
        let drinking1 = document.querySelector('input[name="drinking"]:checked').value
        user_drinking = drinking1
        
    })
  })
 
//   collect_user_info()
let interest_data = [] 
let art = document.getElementById('art')
let history = document.getElementById('history')
let nightlife = document.getElementById('nightlife')
let adventure = document.getElementById('adventure')
let scuba_diving = document.getElementById('scuba_diving')
let hiking = document.getElementById('hiking')
let bird = document.getElementById('bird')
let gardening = document.getElementById('gardening')

let temp = [art, history, nightlife, adventure, scuba_diving, hiking, bird, gardening]            
let temp1 = []
for(let i=0;i<temp.length;i++){
    temp[i].addEventListener('change', ()=>{
        console.log(temp[i].value)
        
        if(temp[i].checked){
            temp1.push(temp[i].value)
        }else if(temp[i].checked==false){
               temp1.pop()
        }
        // justcheck()
        console.log(temp1)
    })
}
let languages = document.getElementById('languages')
let lang;
languages.addEventListener('change', ()=>{
   lang = languages.value
   console.log(lang)
})
function justcheck(){
    console.log(temp1)
}
// let name1 = document.getElementById('name').value
//  let name1 = document.getElementById('name')
//  name1.placeholder = "ehfkfdk"


// let last_name = document.getElementById('last_name').value
// let mobile = document.getElementById('mobile').value
let country_code = document.getElementById('country_code')
let c_code;
country_code.addEventListener('change', ()=>{
c_code = country_code.value

})
let current_user;
let check_login =JSON.parse(localStorage.getItem("login"))
let users =JSON.parse(localStorage.getItem("users")) || []
if(check_login.user_login===true){
 let x =  users.filter(({email}, index)=>{
         return email==check_login.mail
        
    })
    console.log(x)
    let user_name = document.getElementById('user_name')
    user_name.innerHTML = x[0].name
    function setImage(){
        let id_avatar = document.getElementById('id_avatar').value
        let ad_img  = users.forEach(({email}, index)=>{
            if(email==check_login.mail){
                users[index]["image"]=id_avatar
                localStorage.setItem('users', JSON.stringify(users))
            }

    })
    }
 
    const url1 = "https://floating-fortress-99506.herokuapp.com/api/tripvilla_othere"
    let getData = async(url)=>{
        
        let res = await fetch(url)
        res  = await res.json()
        console.log(res)
        let check_login =JSON.parse(localStorage.getItem("login"))
       
      let bool =  res.filter(({email}) => {
          return email==check_login.mail
        });
          
   if(bool.length>0){
    //   alert('user already exist')
   }else{
      let user_basic_detail = async()=>{
            let res = await fetch(url1, {
             method:"POST", 
             body:JSON.stringify(x[0]),
             headers:{"Content-Type":"application/json"}
            })
        }
            
         user_basic_detail()
   }

        
   
// async function ch(){
   
//     const url1 = "https://floating-fortress-99506.herokuapp.com/api/tripvilla_othere"
//     let res = await fetch(`${url1}/${}`, {
//         method:"DELETE", 
        
//     })
   
// }
// ch()  
}
           


        
       

    getData(url1)
   
    current_user = x
   
    document.getElementById('name').placeholder=x[0].name
    document.getElementById('last_name').placeholder=x[0].last
    document.getElementById('mobile').placeholder=x[0].mobile
}

  


    

// console.log(id_avatar)
function collect_user_info(){
    let about_self = document.getElementById('about_self').value
   
    
    
    // console.log(current_user.name)
    obj  = {}

    if(user_drinking!==undefined && user_smoking!==undefined && user_habit!==undefined && lang!==undefined && temp1.length!==0){
        obj["user_habit"] = user_habit 
        obj["user_smoking"] = user_smoking 
        obj["user_drinking"] = user_drinking 
        obj["interest"] = temp1
        obj["language"] = lang
        obj["country_code"] = c_code
        obj["name"] = current_user[0].name
        obj["last_name"] = current_user[0].last
        obj["mobile"] = current_user[0].mobile
        obj["description"] = about_self || "N/A"
        obj["image"] = "https://d2v8elt324ukrb.cloudfront.net/static/dashboard/img/avatars/male.cc4fc62d561f.png"
        
        console.log(obj)  
        const url = "https://floating-fortress-99506.herokuapp.com/api/tripvilla_check"
        let postData = async()=>{
            let res1 = await fetch(url)
            res1 = await res1.json()
            // res1.filter()
            let res = await fetch(url, {
             method:"POST", 
             body:JSON.stringify(obj),
             headers:{"Content-Type":"application/json"}
            })
            
         }
         postData()
        }else{
        alert('please choose all category')
        }
        }

        let update_info_btn = document.getElementById('update_info_btn')
        update_info_btn.addEventListener('click', ()=>{
            
            collect_user_info() 
        })

        let displayfromLst = ()=>{
            let user_email  = document.getElementById('user_email')
            let check_login =JSON.parse(localStorage.getItem("login"))
            if(check_login.user_login===true){
                console.log("yes")
                user_email.innerText = check_login.mail
            }
            

            // let document.getElementById('')
        }       

        displayfromLst()
      
//    change profile pic=======================================================================  
   let update_pic_btn = document.getElementById('update_pic_btn')
   update_pic_btn.addEventListener('click', ()=>{   
    setImage()
    changeProfilePic()
   })
     let changeProfilePic = async()=>{
        
    let id_avatar = document.getElementById('id_avatar').value
     updated_image = id_avatar
     
        let u_id;
         const url2 = "https://floating-fortress-99506.herokuapp.com/api/tripvilla_othere"
         let check_login =JSON.parse(localStorage.getItem("login"))
         let data = await fetch(url2) 
         data = await data.json()
         data.forEach(({email, id})=>{
             if(email==check_login.mail){
                 console.log("match")
                  u_id = id
                }
            })
            let g;
            if(updated_image!==undefined){
                g = updated_image
                // console.log(g);
            }
            console.log(id_avatar);
           let u_data = {image:g}
            const url1 = "https://floating-fortress-99506.herokuapp.com/api/tripvilla_othere"
            let res = await fetch(`${url1}/${u_id}`, {
                    method:"PATCH", 
                    body:JSON.stringify(u_data),
                    headers:{"Content-Type":"application/json"}
                   })
                //    document.getElementById('update_pic_btn').innerText=""
                appendProfileImg()   
                document.getElementById('id_avatar').value=""   
            }   
             
 let appendProfileImg = async()=>{
    const url1 = "https://floating-fortress-99506.herokuapp.com/api/tripvilla_othere"
    // let profile_img  = document.getElementById('profile_img')
    let res = await fetch(url1)
        res = await res.json()   
        let check_login =JSON.parse(localStorage.getItem("login"))
       
        if(check_login.user_login===true){
         let x =  res.filter(({email}, index)=>{
                 return email==check_login.mail
                
            })
            // console.log(x);
            if(x.length==1){
                document.getElementById('profile_img').innerHTML = null    
                document.getElementById('user_img').innerHTML = null    
            let chid = document.getElementById('profile_img')
            let append_pic = document.createElement('img')
            append_pic.src = x[0].image
            chid.append(append_pic)
            let div2 = document.createElement('img')
            let user_img = document.getElementById('user_img')
            div2.src= x[0].image
            user_img.append(div2)
        
            let msg_booking = document.getElementById('msg_booking')
            msg_booking.style.display = "none"
            let user_hover_menu =  document.getElementById('user_hover_menu')
            user_name_hover_menu.innerText = x[0].name
            appendBookings() 
            }
      
        }else{
            let user_name = document.getElementById('user_name')
        }   
            
           
        
 }
 appendProfileImg()
            // changeProfilePic()   
let appendMeeting =()=>{
    const url1 = "https://floating-fortress-99506.herokuapp.com/api/tripvilla_othere"
    }       

let update_pwd = document.getElementById('update_pwd')
let changePassword = async()=>{
    let getId;
    
    const url1 = "https://floating-fortress-99506.herokuapp.com/api/tripvilla_othere"
    let cur_pwd = document.getElementById('cur_pwd') 
    let new_pwd = document.getElementById('new_pwd') 
    let cfirm_pwd = document.getElementById('cfirm_pwd') 
    let check_login =JSON.parse(localStorage.getItem("login"))
    let users =JSON.parse(localStorage.getItem("users")) || []
    
    let res = await fetch(url1)
    res = await res.json()   
    if(check_login.user_login===true){
     let x =  res.filter(({email})=>{
             return email==check_login.mail
            })
            
        console.log(x);
        let x1 =  x
        getId  = x[0].id
      if(x.length==1){
       res.forEach(({password})=>{
            if(password==x1[0].password){
                
                console.log("password match")
                if(cur_pwd.value==x1[0].password){
                     if(new_pwd.value.length<50 && cfirm_pwd.value.length<50){
                         if(new_pwd.value==cfirm_pwd.value){
                              console.log("conditon satisfy")
                              chan_pwd(getId)
                              alert('password change succesfully')
                        }else{
                            alert('Not Match')
                        }
                     }else{
                        alert('length of password max 50')
                     }

                }
            }else{
                console.log("not clearing upper if loop ");
            }
        })
      }
    }

async function chan_pwd(getId){
    const url1 = "https://floating-fortress-99506.herokuapp.com/api/tripvilla_othere"
    let cfirm_pwd1 = document.getElementById('cfirm_pwd').value 
    let x = {password:cfirm_pwd1}
    let res = await fetch(`${url1}/${getId}`, {
        method:"PATCH", 
        body:JSON.stringify(x),
        headers:{"Content-Type":"application/json"}
       })
       if(check_login.user_login===true){
        let z =  users.filter(({email}, index)=>{
                return email==check_login.mail
               
           })
           if(z.length==1){
               z[0].password = document.getElementById('cfirm_pwd').value 
               localStorage.setItem("users", JSON.stringify(users))
            }

    }
}

}  
update_pwd.addEventListener('click', ()=>{
    changePassword()      

})   


let appendBookings = ()=>{
    let el = JSON.parse(localStorage.getItem("selectedData"))
   

        let div = document.createElement('div')
        let p1 = document.createElement('img')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        let p4 = document.createElement('p')
       
        
        p1.src = `${el.Images.one}`
        p2.innerText = `Price: ${el.Price}`
        p3.innerText = `${el.Title}`
        p4.innerText = `${el.Rating} Star`
        
        div.append(p1, p2, p3, p4)
        document.getElementById('booked_data').append(div)
    
}



//logout from page
let dwn_logout1 = document.getElementById('dwn_logout')
dwn_logout1.addEventListener('click', ()=>{
    let check_login =JSON.parse(localStorage.getItem("login"))
    if(check_login.user_login==true){
        check_login.user_login = false
        localStorage.setItem('login', JSON.stringify(check_login))
        window.location.href = "../index.html"
    }
})
let rentals = document.getElementById('rentals')
rentals.addEventListener('click', ()=>{
    window.location.href="../home.html"
})
let sale = document.getElementById('sale')
sale.addEventListener('click', ()=>{
    window.location.href="../market_place.html"
})
    // const url1 = "https://floating-fortress-99506.herokuapp.com/api/tripvilla_user"
    // let user_basic_detail_del = async()=>{
    //     let res = await fetch(url1, {
    //      method:"DELETE", 
    //      headers:{"Content-Type":"application/json"}
         
    //     })
        
    //  }
    //  user_basic_detail_del()
// "tripvilla_user":[],
// "tripvilla_login":[],
// "tripvilla_check":[],
// "tripvilla_othere":[]





// interest1.forEach((el)=>{
//    el.addEventListener('change', ()=>{
//    let x = document.querySelector('input[name="interest"]:checked')
//     console.log(x.value)
//    })
// })
