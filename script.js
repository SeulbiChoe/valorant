"use stirct";
// gnb 슬라이드 다운
let moGnb = document.querySelector(".mo_gnb");
setTimeout(()=>{
    moGnb.classList.add("active");
}, 3000)

// 모바일 메뉴 열기
let menuOpen = document.querySelector(".logo .open");
let mobileMenu = document.querySelector(".mo_list");
let menuClose = document.querySelector(".mo_list .close");

menuOpen.addEventListener("click", function(){
    mobileMenu.classList.add("active");
});
menuClose.addEventListener("click", function(){
    mobileMenu.classList.remove("active");
});

// 인트로 영상
let video = document.querySelector(".intro .video .wrapper");
setTimeout(()=>{
    video.classList.add("full");
}, 2000)

//인트로에서 고투링크 슬라이드업
let goLink = document.querySelector(".intro .go_link");
setTimeout(()=>{
    goLink.classList.add("active");
}, 3000)