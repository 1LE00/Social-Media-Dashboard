

const body = document.getElementsByTagName("body")[0];

const checkbox = document.getElementById("check");

const headContainer = document.getElementById("head-container");

const headTop = document.getElementById("head-top");

const headTopTitle = document.getElementById("head-top-title");

const anotherText = document.getElementsByClassName("color-1");

const text = document.getElementsByClassName("title");

const card = document.getElementsByClassName("cards");

const numbers = document.getElementsByClassName("number");

const texts = document.getElementsByClassName("text");

const count = document.getElementsByClassName("count");

const heading = document.getElementsByClassName("footer-heading")[0];

const mode = document.getElementById("mode");

checkbox.addEventListener("click", function(){
    checkbox.classList.toggle("checked");
    body.classList.toggle("active");
    headContainer.classList.toggle("top-bg");
    headTop.classList.toggle("head-top-white");
    headTopTitle.classList.toggle("head-top-title-color");

    heading.classList.toggle("head-top-subtitle-white");

    if(checkbox.classList.contains("checked")){
        mode.innerHTML="Light Mode";
    }
    else{
        mode.innerHTML="Dark Mode";
    }
    
    if(checkbox.classList.contains("checked")){
        for (let cards = 0; cards < card.length; cards++) {
            card[cards].addEventListener("mouseenter", function(){
                card[cards].style.filter = "contrast(90%)";
            });

            card[cards].addEventListener("mouseleave", function(){
                card[cards].style.filter = "contrast(100%)";
            });
            
        }
    }
    
    for (let index = 0; index < card.length; index++) {
        card[index].classList.toggle("card");
        
    }

    for (let i = 0; i < text.length; i++) {
        text[i].classList.toggle("head-top-subtitle-white");
        
    }

    for (let j = 0; j < anotherText.length; j++) {
        anotherText[j].classList.toggle("head-top-subtitle-white");
        
    }

    for (let k = 0; k < numbers.length; k++) {
        numbers[k].classList.toggle("head-top-title-color");
        
    }

    for (let l = 0; l < texts.length; l++) {
        texts[l].classList.toggle("text-color");
        
    }

    for (let m = 0; m < count.length; m++) {
        count[m].classList.toggle("head-top-title-color");
        
    }
});