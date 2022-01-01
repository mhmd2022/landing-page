


const nlink = [...document.querySelectorAll(".nav-link")];
for (const link of nlink) {
  link.addEventListener("click",()=>{
    document.getElementById("navbarNavDropdown").classList.remove("show");
  });
}
window.addEventListener("scroll",()=>{
    if( document.documentElement.scrollTop > 80){
        document.querySelector(".navbar").classList.add("shrink");
    }else{
        document.querySelector(".navbar").classList.remove("shrink");
    }
})
const videoSrc = document.getElementById("player1");
const bopen = document.querySelector(".homeBtn button.videoPlay");
const bclose = document.getElementById("bclose");
const videopup = document.querySelector(".video-pop");
bopen.addEventListener("click",openAndCloseVideo);
bclose.addEventListener("click",openAndCloseVideo);
function openAndCloseVideo(){
    if( videopup.classList.contains("open")){
        // videoSrc.getAttribute("src","");
        videopup.classList.remove("open");

    }else{
        videopup.classList.add("open");

    }
}



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      757: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    
  });
  var swiper = new Swiper(".myScreenshotSwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    
  });
  
  
var swiper = new Swiper(".testimonialswiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  centeredSlides: true,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  
});


var swiper = new Swiper(".teamSectionSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  centeredSlides: true,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },breakpoints: {
    575: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  
});

$.scrollIt({
  topOffset : -50
});
const body1 =document.querySelector("body");
const toggleicon = document.querySelector(".toggleDemo i ");
const toggleDem = document.querySelector(".toggleDemo");
function toggleTheme (){
toggleDem.addEventListener("click",()=>{
body1.classList.toggle("dark");
updateIcon();
});
updateIcon();

}
function updateIcon (){
  if(body1.classList.contains("dark")){
    toggleicon.classList.remove("fa-moon");
    toggleicon.classList.add("fa-sun");
  }
  else{
    toggleicon.classList.remove("fa-sun");
    toggleicon.classList.add("fa-moon");
  }
}
toggleTheme();