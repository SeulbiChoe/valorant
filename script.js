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
    bodyFixed.classList.add("fixed");
});
menuClose.addEventListener("click", function(){
    mobileMenu.classList.remove("active");
    bodyFixed.classList.remove("fixed");
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

//인트로 영상 3.5초 뒤 overflow remove
let bodyFixed = document.querySelector("body.fixed");
setTimeout(()=>{
    bodyFixed.classList.remove("fixed");
}, 3500);

// 스크롤 하면 애니메이션 시작
let windowHeight = window.innerHeight;
let introTxt2Div = document.querySelector(".contents .introduction .txt2");
let introTxt2 = document.querySelector(".contents .introduction .txt .mo_txt");
let introTxt2Height = introTxt2Div.offsetHeight;
// offsetHeight 에 자꾸 ()이거 함수 넣어서 오류 나왔음 ㅋㅋ...

window.addEventListener("scroll", function(){
    let scrollTop = window.scrollY;
    //맨 위부터 텍스트2 까지의 와이축 거리임 스크롤탑으로 찍어보면 알 수 있다.
    let distanceFromHtml = introTxt2Div.getBoundingClientRect().top + this.window.scrollY;
    console.log(scrollTop);
    console.log(distanceFromHtml);
    console.log(windowHeight);

    if (distanceFromHtml + introTxt2Height < scrollTop + windowHeight) {
        introTxt2.classList.add("active");
    }
    else if (distanceFromHtml + introTxt2Height > scrollTop + windowHeight) {
        introTxt2.classList.remove("active");
    }
})