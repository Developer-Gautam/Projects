function navbar(){
    return `<div id="navbar">
    <div class="logo">
        <div id="backHome"><img src="./navbar/footer/photo/logo_profile_page.png" alt="logo"></div>
    </div>
    <div class="login_status">
        <div id="user_img">
         <img src="./navbar/footer/photo/profile_dummy_img.png" alt="dummy_profile">
        </div>
        <p id="user_name_hover_menu">Sing in <i class="fa fa-angle-down"></i></p>
        <div id="user_hover_menu">
            
            <i class="fa fa-caret-up fa-2x" aria-hidden="true"></i>
            <ul>
                <li id="dwn_inbox"><i class="fa fa-inbox"></i>Inbox</li>
                <li id="dwn_book1"><i class="fa fa-check-square-o"></i>Bookings</li>
                <li id="dwn_setting"><i class="fa fa-gear fa-spin" ></i>Settings</li>
                <li id="dwn_logout"><i class="fa fa-sign-out"></i>Logout</li>
               
            </ul>
        </div>
    </div>
    <div>
        <p id="holiday_nav_item">Holiday Homes For Sale <i class="fa fa-angle-down"></i></p>
        <div id="holiday_hover">
            
            <i class="fa fa-caret-up fa-2x" aria-hidden="true"></i>
            <ul>
                <li>
                    <div>
                        <p class="holiday_head" >Tripvillas Managed</p>
                        <p class="holiday_text" id="rentals">Homes From A Grade Developers, Rentals Guranteed</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p class="holiday_head">Market Place</p>
                        <p class="holiday_text" id="sale">See what homes are up for sale from different property owners.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div>
               
               
        <button>Dashboard</button>
    </div>
</div>`
}

export default navbar