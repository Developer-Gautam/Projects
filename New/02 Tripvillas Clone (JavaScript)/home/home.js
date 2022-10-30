let url = "https://serene-river-66434.herokuapp.com/api/home_property";

let getData = async() => {
    try{
        let res = await fetch(url);
        res = await res.json();
        renderDom(res);

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



