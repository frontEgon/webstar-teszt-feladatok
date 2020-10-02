let app = ()=>{
    const slideImages = document.querySelectorAll("#hero .right-side div");
    const slideLines = document.querySelectorAll(".sliderLines .container div");
    let isItSmallerDevice = false;
    let style = getComputedStyle(document.querySelector("#hero .container"));
    if(style.flexDirection == "column"){
        isItSmallerDevice = true;
    }    


    let counter = 0;
    let slide = ()=>{
        
        counter++;
        
        if(counter < 3){
            slideImages[counter-1].style.animation = "SlideOut" + (isItSmallerDevice == true ? "Small" : "") +".5s ease forwards";
            slideImages[counter].style.animation = "SlideIn" + (isItSmallerDevice == true ? "Small" : "") +".5s ease forwards";
            slideLines[counter-1].style.backgroundColor = "rgba(255,255,255,.3)";
            slideLines[counter].style.backgroundColor = "white";
        }
        else{
            counter = 0;
            slideImages[counter + slideImages.length-1].style.animation = "SlideOut" + (isItSmallerDevice == true ? "Small" : "") + ".5s ease forwards";
            slideImages[counter].style.animation = "SlideIn" + (isItSmallerDevice == true ? "Small" : "") +".5s ease forwards";
            slideLines[counter+ slideImages.length-1].style.backgroundColor = "rgba(255,255,255,.3)";
            slideLines[counter].style.backgroundColor = "white";
        }
        
    };
    setInterval(slide, 3000);

    //slidedown
    const navLinks = document.querySelectorAll(".nav-links li a");
    navLinks.forEach(item =>{
        item.addEventListener('click', (e)=>{
            //menu bezárása
            nav.classList.toggle('nav-active');
            burger.classList.toggle('x');
            e.preventDefault();
            const itemID = e.currentTarget.getAttribute("href");
            window.scrollTo({
                top: document.querySelector(itemID).offsetTop,
                behavior: "smooth"
            });
        });
    });

    //responsive nav open/close
    let burger = document.querySelector(".burger");
    let nav = document.querySelector(".nav-links");
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('x');
    });

};


app();