//navbar dropdown........................
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
        count1=1
    }
    
    
})
}
export default dropdown