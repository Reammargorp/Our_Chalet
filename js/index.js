

let photoSlider = document.querySelector(".photo-section .container");
let photoTitleOne = document.querySelector(".photo-title-one")
let photoTitleTwo = document.querySelector(".photo-title-two")

console.log(photoSlider);

setInterval(() => {
    photoSlider.classList.toggle("first-slider")
    photoSlider.classList.toggle("second-slider")
    if(photoSlider.classList.contains("second-slider")) {
        photoSlider.style.backgroundImage = "url(./imgs/sliderTwo.png)";
    } else {
        photoSlider.style.backgroundImage = "url(./imgs/sliderOne.png)";
    }
    if(photoSlider.classList.contains("first-slider")) {
        photoTitleOne.classList.add("active")
        photoTitleTwo.classList.remove("active")
    }else {
        photoTitleOne.classList.remove("active")
        photoTitleTwo.classList.add("active")
    }
}, 3000);
let en = document.querySelectorAll(".en")
let ar = document.querySelectorAll(".ar")
var lang = document.getElementById("langList")
let secondBar = document.querySelector(".second-bar")
let topBar = document.querySelector(".header")
let topBarLink = document.querySelector(".navbar-nav")
let where = document.querySelector(".where")
let contact = document.querySelector(".contact")


lang.onchange = function() {
    var selectedValue = document.getElementById("langList").value
            if(selectedValue == "en") {
                document.body.style.direction ="ltr"

                topBarLink.classList.remove("me-auto")
                topBarLink.classList.add("ms-auto")
                for(let e = 0 ; e < en.length ;e++) {
                en[e].classList.add("show")
                ar[e].classList.remove("show")
                }
            }
            if(selectedValue == "ar") {
                document.body.style.direction ="rtl"
                where.style.direction = "ltr"
                contact.style.direction = "ltr"
                topBarLink.classList.remove("ms-auto")
                topBarLink.classList.add("me-auto")
                for(let a = 0 ; a < ar.length ;a++) {
                ar[a].classList.add("show")
                en[a].classList.remove("show")
                }
            }
}


let booking = document.querySelector(".booking")
let olx = document.querySelector(".olx")
let google = document.querySelector(".google")

let gps = document.querySelector(".gps")
let phone = document.querySelector(".phone")
let mail = document.querySelector(".mail")

booking.onclick = () => {
    open("http://www.booking.com/Share-SnH0UIZ");
}
olx.onclick = () => {
    open("https://olx.com.eg/ad/-ID9q5eE.html");
}
google.onclick = () => {
    open("https://www.google.com/maps?q=%D8%B4%D8%A7%D9%84%D9%8A%D9%87+%D8%A8%D8%B4%D8%A7%D8%B7%D8%A6+%D8%B9%D8%AC%D9%8A%D8%A8%D9%87+%D8%A8%D9%85%D8%B1%D8%B3%D9%89+%D9%85%D8%B7%D8%B1%D9%88%D8%AD+-+%D9%85%D8%B5%D8%B1%D8%8C+%D8%B4%D8%A7%D8%B7%D8%A6+%D8%B9%D8%AC%D9%8A%D8%A8%D9%87%D8%8C+%D8%A7%D9%85+%D8%A7%D9%84%D8%B1%D8%AE%D9%85%D8%8C+Matrouh+Governorate,+Egypt&ftid=0x1462073d43881647:0x5fa9872a6ffbbfb6&hl=en-US&gl=us&entry=gps&g_ep=CAIYAA%3D%3D&shorturl=1");
}

gps.onclick = () => {
    open("https://www.google.com/maps?ll=31.406139,27.041417&z=16&t=m&hl=ar&gl=EG&mapclient=embed");
}
mail.onclick = () => {
    open("mailto:Admin@waleedhaikal.com");
}

let btnTop = document.querySelector(".btn-up")

window.onscroll = function(){
if(window.scrollY >= 300) {
btnTop.style.opacity = "1"
}
if(window.scrollY < 300) {
btnTop.style.opacity = "0"
}   
}
