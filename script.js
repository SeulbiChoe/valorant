"use stirct";
// gnb 슬라이드 다운
let moGnb = document.querySelector(".mo_gnb");
setTimeout(()=>{
    moGnb.classList.add("active");
}, 3000)
let dtGnb = document.querySelector(".dt_gnb");
setTimeout(()=>{
    dtGnb.classList.add("active");
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


// 스크롤 하면 애니메이션 시작 => introduction txt2 mobile
window.addEventListener("scroll", function(){
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let introTxtDiv = document.querySelector(".contents .introduction .txt1");
    let introTxt = document.querySelector(".contents .introduction .txt1 .mo_txt");
    let introTxtHeight = introTxtDiv.offsetHeight;
    // offsetHeight 에 자꾸 ()이거 함수 넣어서 오류 나왔음 ㅋㅋ...
    //맨 위부터 텍스트2 까지의 와이축 거리임 스크롤탑으로 찍어보면 알 수 있다.
    let distanceFromHtml = introTxtDiv.getBoundingClientRect().top + this.window.scrollY;
    // console.log(scrollTop);
    // console.log(distanceFromHtml);
    // console.log(windowHeight);
    // console.log(introTxt2Height);

    //문제점: 반응형으로 크기를 늘리면 처음 헤이트를 가져와서 div가 바텀까지 나왔을 때 액티브가 안 되는 현상이 있음,

    if (distanceFromHtml + introTxtHeight < scrollTop + windowHeight) {
        introTxt.classList.add("active");
    }
    else if (distanceFromHtml + introTxtHeight > scrollTop + windowHeight) {
        introTxt.classList.remove("active");
    }
});

//introduction txt desktop
window.addEventListener("scroll", function(){
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let introTxtDiv = document.querySelector(".contents .introduction .txt1");
    let introTxt = document.querySelector(".contents .introduction .txt1 .dt_txt");
    let introTxtHeight = introTxtDiv.offsetHeight;
    let distanceFromHtml = introTxtDiv.getBoundingClientRect().top + this.window.scrollY;

    if (distanceFromHtml + introTxtHeight < scrollTop + windowHeight) {
        introTxt.classList.add("active");
    }
    else if (distanceFromHtml + introTxtHeight > scrollTop + windowHeight) {
        introTxt.classList.remove("active");
    }
});


//뉴스 부분 스크롤 애니메이션
window.addEventListener("scroll", function(){
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    
    let newsImg = document.querySelector(".contents .introduction .news .news_img");
    let newImgHeight = newsImg.offsetHeight;
    let imgFromHtml = newsImg.getBoundingClientRect().top + this.window.scrollY;
    if (imgFromHtml + newImgHeight < scrollTop + windowHeight) {
        newsImg.classList.add("active");
    }
    else if (imgFromHtml + newImgHeight > scrollTop + windowHeight) {
        newsImg.classList.remove("active")
    }

    let newsDate = document.querySelector(".contents .introduction .news .news_date");
    let newsDateHeight = newsDate.offsetHeight;
    let dateFromHtml = newsDate.getBoundingClientRect().top + this.window.scrollY;

    let newsTitle = document.querySelector(".contents .introduction .news .news_title");
    let newsTitleHeight = newsTitle.offsetHeight;
    let tileFromHtml = newsTitle.getBoundingClientRect().top + this.window.scrollY;

    let newsDecs = document.querySelector(".contents .introduction .news .news_decs");
    let newsDecsHeight = newsDecs.offsetHeight;
    let decsFromHtml = newsDecs.getBoundingClientRect().top + this.window.scrollY;

    let newsPagenation = document.querySelector(".contents .introduction .news .pagenation");
    let newsPagenationHeight = newsPagenation.offsetHeight;
    let pagenationFromHtml = newsPagenation.getBoundingClientRect().top + this.window.scrollY;

})