 




  let  data = [
        {
            heading : "Building Wealth",
            title : "By Moving Asian Savings to Highly secured income generating assets Tripvillas is building societal wealth.",
             image : "https://d2vcelvjdj7n25.cloudfront.net/static/homepageimages/family.jpg"
        },
        {
            heading : "Generating Employment",
            title : "We employ team members from the locality and provide them the necessary skills and a safe and non-hazardous work environment.",
             image : "https://d2vcelvjdj7n25.cloudfront.net/static/homepageimages/employment.jpg"
        },
        {
            heading : "Preserving the Past",
            title : "Our work makes it viable to invest in preserving and creating new content around the diverse Culture, Cuisine, Art and Communities in Asia.",
             image : "https://d2vcelvjdj7n25.cloudfront.net/static/homepageimages/past.jpg"
        },
        {
            heading : "Empowering the Future",
            title : "We support new entrepreneurial opportunities by creating an industry which can harness the demographic dividend of Asia.",
             image : "https://d2vcelvjdj7n25.cloudfront.net/static/homepageimages/future.jpg"
        }
    ]

    
    

    let renderSlider = (data) => {
        
        let box = document.querySelector("#backgroundImageDiv")
        
        data.forEach((el) => {
            let div = document.createElement("div")
            div.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${el.image})`
            div.style.cursor = "pointer"
            div.style.backgroundSize = "cover"
            
            let heading = document.createElement("h2")
            heading.innerText = el.heading
            heading.style.color ="white"
            let title = document.createElement("h5")
            title.innerText = el.title
            title.style.color = "rgba(255, 255, 255, 0.773)"

            div.append(heading, title)
            box.append(div)
        })
        
    }

    renderSlider(data)



  let  teamData = [
        {
            name : "Roshan Dsilva",
             image : "https://s3.amazonaws.com/tripvillas-team/roshan.jpeg",
             work : "Chief | Product |Business | Strategy"
        },
        {
            name : "Sunil Purushe",
             image : "https://s3.amazonaws.com/tripvillas-team/sunil.jpeg",
             work : "Management | All things fun"
        },
        {
            name : "Nikhil Khekade",
             image : "https://s3.amazonaws.com/tripvillas-team/nikhil.jpeg",
             work : "Product | Tech | Distuibustion | Strategy"
        },
        {
            name : "Vinayak Koli",
             image : "https://s3.amazonaws.com/tripvillas-team/vinayak1.jpg",
             work : "Product | Tech | Distuibustion | Strategy"
        },
        {
            name : "Roshan Dsilva",
             image : "https://s3.amazonaws.com/tripvillas-team/roshan.jpeg",
             work : "Chief | Product |Business | Strategy"
        },
        {
            name : "Sunil Purushe",
             image : "https://s3.amazonaws.com/tripvillas-team/sunil.jpeg",
             work : "Management | All things fun"
        },
        {
            name : "Nikhil Khekade",
             image : "https://s3.amazonaws.com/tripvillas-team/nikhil.jpeg",
             work : "Product | Tech | Distuibustion | Strategy"
        },
        {
            name : "Vinayak Koli",
             image : "https://s3.amazonaws.com/tripvillas-team/vinayak1.jpg",
             work : "Product | Tech | Distuibustion | Strategy"
        },
        {
            name : "Roshan Dsilva",
             image : "https://s3.amazonaws.com/tripvillas-team/roshan.jpeg",
             work : "Chief | Product |Business | Strategy"
        },
        {
            name : "Sunil Purushe",
             image : "https://s3.amazonaws.com/tripvillas-team/sunil.jpeg",
             work : "Management | All things fun"
        },
        {
            name : "Nikhil Khekade",
             image : "https://s3.amazonaws.com/tripvillas-team/nikhil.jpeg",
             work : "Product | Tech | Distuibustion | Strategy"
        },
        {
            name : "Vinayak Koli",
             image : "https://s3.amazonaws.com/tripvillas-team/vinayak1.jpg",
             work : "Product | Tech | Distuibustion | Strategy"
        },
        {
            name : "Roshan Dsilva",
             image : "https://s3.amazonaws.com/tripvillas-team/roshan.jpeg",
             work : "Chief | Product |Business | Strategy"
        },
        {
            name : "Sunil Purushe",
             image : "https://s3.amazonaws.com/tripvillas-team/sunil.jpeg",
             work : "Management | All things fun"
        },
        {
            name : "Nikhil Khekade",
             image : "https://s3.amazonaws.com/tripvillas-team/nikhil.jpeg",
             work : "Product | Tech | Distuibustion | Strategy"
        },
        {
            name : "Vinayak Koli",
             image : "https://s3.amazonaws.com/tripvillas-team/vinayak1.jpg",
             work : "Product | Tech | Distuibustion | Strategy"
        },
        {
            name : "Roshan Dsilva",
             image : "https://s3.amazonaws.com/tripvillas-team/roshan.jpeg",
             work : "Chief | Product |Business | Strategy"
        },
        {
            name : "Sunil Purushe",
             image : "https://s3.amazonaws.com/tripvillas-team/sunil.jpeg",
             work : "Management | All things fun"
        },
        {
            name : "Nikhil Khekade",
             image : "https://s3.amazonaws.com/tripvillas-team/nikhil.jpeg",
             work : "Product | Tech | Distuibustion | Strategy"
        },
        {
            name : "Vinayak Koli",
             image : "https://s3.amazonaws.com/tripvillas-team/vinayak1.jpg",
             work : "Product | Tech | Distuibustion | Strategy"
        },
        {
            name : "Roshan Dsilva",
             image : "https://s3.amazonaws.com/tripvillas-team/roshan.jpeg",
             work : "Chief | Product |Business | Strategy"
        },
        {
            name : "Sunil Purushe",
             image : "https://s3.amazonaws.com/tripvillas-team/sunil.jpeg",
             work : "Management | All things fun"
        },
        {
            name : "Nikhil Khekade",
             image : "https://s3.amazonaws.com/tripvillas-team/nikhil.jpeg",
             work : "Product | Tech | Distuibustion | Strategy"
        },
        {
            name : "Vinayak Koli",
             image : "https://s3.amazonaws.com/tripvillas-team/vinayak1.jpg",
             work : "Product | Tech | Distuibustion | Strategy"
        },
    ]
    
    
    let renderTeamData = (teamData)=>{
        let box = document.querySelector("#hoverBackgroundImageDiv")
        box.innerHTML = null
        teamData.forEach((el)=>{
            let mainDiv = document.createElement("div")

            let div = document.createElement("div")
            
            let img = document.createElement("img")
            img.src = el.image
            
            let name = document.createElement("h2")
            name.innerText = el.name
            let work = document.createElement("h4")
            work.innerText = el.work
            work.style.fontSize = "13px"
            div.append(img)
            mainDiv.append(div, name, work)
            box.append(mainDiv)
        })
    }

    renderTeamData(teamData)


    let textForRender = [
        {
            header : "NRF",
            para : "A part of the Singapore Prime Minister's office, The National Research Foundation (NRF) seeks to strengthen Singapore’s R&D capabilities, encourage greater innovation and nurture the growth of technology-based enterprises in Singapore. This will help Singapore to remain competitive and create high value jobs and prosperity for Singaporeans."
        },
        {
            header : "Neoteny Labs",
            para : "Neoteny Labs is an early stage fund led by Joi Ito and advised by Reid Hoffman. Joichi  Ito is an early pioneer on the Internet and is also presently the director of MIT's Media Lab. He was the founder of one of the first commercial ISPs in Japan (sold to Cable and Wireless), one of the founders of Infoseeek Japan (sold to Disney and then Rakuten) and founder of Digital Garage (now listed on the Tokyo Stock Exchange and one of the largest Internet companies in Japan). Joi is also an international advisor to Twitter and is on the board of the New York Times and a trustee of the Knight Foundation. James Chan - a key part of the Singapore technology ecosystem and presently founder of Silicon Straits is also associated with our company through Neoteny Labs - his earlier employer."
        },
        {
            header : "Blume Ventures",
            para : "Blume Ventures is one of the leading Early stage funds in India. Founded by Karthik Reddy and Sanjay Nath, Blume is one of the most influential investors in early stage consumer companies in India. The comprises of the founders of over 50 early stage companies in India, advisors and mentors across the globe and Limited Partners who are also engaged with individual portfolio companies."
        },
        {
            header : "MENA ventures",
            para : "MENA Ventures is the leading early stage fund in the Middle East and North Africa. Run by Fadi Ghandour and Walid Faza, MENA has been the investor in most important consumer internet businesses in the Middle East. Fadi Ghandour has notably been one of the founders and early backers of Maktoob - which then became Yahoo Arabia and also the founder of Aramex - a very innovative logistics company which does a lot of work to support e-commerce ventures globally."
        },
        {
            header : "Mr. Lim Kah hong",
            para : "Mr. Lim is the founder of SIS international Holdings - listed on the Hong Kong Stock Exchange and one of the early pioneers of the Technology and Technology Publishing Industries in Asia. His career over the past 30 years has seen him found, build and exit some of the largest IT distribution businesses in Asia and also build some of the largest IT Media groups. His expertise across Real Estate, Publishing and doing business across Asia is very valuable to our company."
        },
        {
            header : "Mr. Samer A. Mouasher",
            para : "Samer Mouasher was born on July 19, 1971 in Amman, Jordan, to Anis Mouasher and Louly Hanania. His passion for presenting the “real” Middle East together with its rich history, culture, and nature to the world, led him to establishing several companies and non profits in the fields of the sustainability and green energy, hospitality and tourism, real estate multiuse development, technology, Cosmetics and entertainment. Samer spends most of his time between LA, London, Shanghai and Amman. In 1992, Samer graduated from Northwestern University with Majors in Political Science, Photography and Economics. His Directorships include the Royal Film Commission of Jordan, Royal Jordanian Airlines, Royal Wings Airlines, Saraya Holdings (including many Saraya Ventures), Saraya Aqaba, Gulf Circle Tours, Bespoke Hideaways and Bedu Eco Lodges, Jordan Heritage Revival Company among others."
        },
        {
            header : "Other Angels",
            para : "Our other Angels include individuals, friends and family all of whom are closely associated with the company."
        }
    ]



    let textRenderFunction = (textForRender)=>{
        let box  = document.querySelector("#onlyText")
        box.innerHTML = null
        textForRender.forEach((el)=>{
            let div = document.createElement("div")
            let h3 = document.createElement("h3")
            h3.innerText = el.header
            let p = document.createElement("p")
            p.innerText = el.para
            let hr = document.createElement("hr")

            div.append(h3, p, hr)
            box.append(div)
        })
    }

    textRenderFunction(textForRender)





    let locationToHome = ()=>{
        window.location.href = "/index.html"
    }

    let moveToLoginPage = ()=>{
        window.location.href = "../sign-in-and-sign-up/index.html"
    }