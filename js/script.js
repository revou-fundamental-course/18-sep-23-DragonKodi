document.getElementById("button").addEventListener("click", function (){
    let name = document.forms['contact-form']['your-name'].value;
    let email = document.forms['contact-form']['email'].value;
    let interest = document.forms['contact-form']['interest'].value;
   
   if (!name) {
    document.getElementById("name-error").innerText = "Name Cannot be Blank!"; 
   } else{
    document.getElementById("name-error").innerText = "";  
   }
   

   if (!email) {
    document.getElementById("email-error").innerText = "email Cannot be Blank!"; 
   } else{
    document.getElementById("email-error").innerText = ""; 
    }

   
   if (!interest) {
    document.getElementById("interest-error").innerText = "interest Cannot be Blank!"; 
   } else{
    document.getElementById("interest-error").innerText = "";  
   }
 
});

const carouselSlides = document.querySelectorAll(".image");
console.log(carouselSlides);
let currentIndex = 0;
let interval = 4000;

document.getElementById("next-btn").addEventListener("click",function(){
  nextSlide();   
})

function nextSlide(){
    carouselSlides[currentIndex].classList.remove("active");
    currentIndex= (currentIndex +1) % carouselSlides.length;
    carouselSlides[currentIndex].classList.add('active');
}


function startSlide(){
    setInterval(nextSlide,interval);
}


(function(){
startSlide();
})

()