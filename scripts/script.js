let dropdown = $(".dropdown");
let showcase = $(".showcase");
let checkMark = $(".showcase__check-mark");
let changeColor = $(".change-color");
let colors = ["#F25322","#00CBCD","#1E5AFF","#F49511","#FFC83C","#D19834"];
let contantsChange = $(".content-change");
let changeText = $(".content-change__text");
let groupBlocks = $(".group-blocks");
let navArrow = $(".nav-arrow");
let menuItems = $(".main-menu__items").has(".nav-arrow");
let navLinks = $(".nav-links");
let navList = $(".nav-list");
let cross = $(".cross");
let sliderCarousel = $(".slider-carousel");
let left = 0;
let indexLeft = 0;
let sliderArrowsTwo = $(".slider-block__arrows-two");
let linkImg = $(".news-link__img");
let textNews = $(".text-news");
let textLink = $(".news-link");
let linkShadow = $(".news-link-shadow");
let subMenuCross = $(".sub-menu__cross");
let navDetail = $(".nav-detail");
let subMenuLinks = $(".sub-menu__links");
let navWrap = $(".nav-wrap");
let navBlocks = $(".nav-blocks");
let navJackdaw = $(".nav-wrap__jackdaw");
let html = $("html");
let indexHover = 0;
let indexNavList = 0;
let hoverSvg = 0;
let clickButton = 0;
firstColorSvg();
showcase.on("click",
    function () {
        dropdown.toggleClass("showblock");
        checkMark.toggleClass("rotate");
    }
);
contantsChange.on("click",
    function () {
        clickButton = contantsChange.index(this);
        groupBlocks.hide();
        changeColor.css("fill", "#9B9B9B");
        changeText.css("color", "#9B9B9B");
        contantsChange.eq(clickButton).find(".change-color").css("fill", colors[clickButton]);
        changeText.eq(clickButton).css("color", colors[clickButton]);
        groupBlocks.eq(clickButton).show();
    }
);
function firstColorSvg() {
    changeColor.eq(0).css("fill", "#F25322");
    changeText.eq(0).css("color", "#F25322");
}
contantsChange.hover(
    function () {
        hoverSvg = contantsChange.index(this);
        contantsChange.eq(hoverSvg).find(".change-color").css("fill", colors[hoverSvg]);
        changeText.eq(hoverSvg).css("color", colors[hoverSvg]);
    },
    function () {
        if (clickButton != hoverSvg) {
            contantsChange.eq(hoverSvg).find(".change-color").css("fill", "#9B9B9B");
            changeText.eq(hoverSvg).css("color", "#9B9B9B");
        }
    }
);
navArrow.on("click",
    function () {
        indexNavList = navArrow.index(this);
        let hideList = navList.eq(indexNavList).is(":visible");
        navLinks.css("color", "#aaaaab");
        menuItems.eq(indexNavList).children(".nav-links").css("color", "#fab81b");
        navList.hide();
        navList.eq(indexNavList).show();
        if (hideList) {
            menuItems.eq(indexNavList).children(".nav-links").css("color", "#aaaaab");
            navList.eq(indexNavList).hide();
        }
    }
);
cross.on("click",
    function () {
        $(".promo-title").toggleClass("under-wot");
        $(".logo-wot").toggleClass("over-wot");
        $(".limited-height").toggleClass("low-block");
        cross.toggleClass("jackdaw");
    }
);
sliderArrowsTwo.on("click",
    function () {
        indexLeft++;
        sliderCarousel.eq(indexLeft).css("left", left);
    }
);
let hoverOn = function () {
    indexHover = textNews.index(this) + textLink.index(this)+1;
    linkImg.eq(indexHover).css("transform", "scale(1.1)");
    linkShadow.eq(indexHover).css("opacity", "1");
}
let hoverOff = function () {
    linkImg.eq(indexHover).css("transform", "scale(1)");
    linkShadow.eq(indexHover).css("opacity", "0");
}
textNews.hover(hoverOn, hoverOff);
textLink.hover(hoverOn, hoverOff);

function moving() {
    let width = 0;
    if (window.innerHeight) {
        width = window.innerWidth;
    }
    if (width < 1190) {
        $('.three-columns:nth-child(2)').append( $('.three-columns:nth-child(1)>.small-news'));
    }
    else {
        $('.three-columns:nth-child(1)').append( $('.three-columns:nth-child(2)>.small-news:nth-child(4)') );
    }
}
let fun = function () {
    moving();
}
window.onresize = fun;
fun();

subMenuCross.on("click",
    function () {
        let subIndex = subMenuCross.index(this);
        let show = navDetail.eq(subIndex).is(":visible");
        navDetail.hide();
        navDetail.eq(subIndex).show();
        subMenuLinks.css("color", "#aaaaab");
        subMenuCross.css("background", "url(./images/nav-wrap/cross-button.svg) center/contain no-repeat");
        subMenuCross.eq(subIndex).css("background","url(./images/nav-wrap/cross-top.svg) center/contain no-repeat");
        if (show) {
            navDetail.eq(subIndex).hide();
            subMenuCross.eq(subIndex).css("background", "url(./images/nav-wrap/cross-button.svg) center/contain no-repeat");
        }
        else $(this).parent().children(".sub-menu__links").css("color", "#EAAD1C");
    }
)
navBlocks.eq(0).on("click", 
    function () {
        navWrap.show();
        html.css("overflow", "hidden");
    }
)
navJackdaw.eq(0).on("click", 
    function () {
        navWrap.hide();
        html.css("overflow", "inherit");
    }
)