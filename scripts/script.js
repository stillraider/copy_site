let dropdown = $(".dropdown");
let showcase = $(".showcase");
let showblock = $(".showblock");
let rotate = $(".rotate");
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
let tenYears = $(".ten-years");
let cross = $(".cross");
let promoTitle = $(".promo-title");
let limitedHeight = $(".limited-height");
let logoWot = $(".logo-wot");
let sliderCarousel = $(".slider-carousel");
let left = 0;
let indexLeft = 0;
let sliderArrowsTwo = $(".slider-block__arrows-two");
let sliderArrowsOne = $(".slider-block__arrows-one");
let indexNavList = 0;
let hoverSvg = 0;
let clickButton = 0;
firstColorSvg();
showcase.click(
    function () {
        dropdown.toggleClass("showblock");
        checkMark.toggleClass("rotate");
    }
);
contantsChange.click(
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
navArrow.click(
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
cross.click(
    function () {
        promoTitle.toggleClass("under-wot");
        logoWot.toggleClass("over-wot");
        limitedHeight.toggleClass("low-block");
        cross.toggleClass("jackdaw");
    }
)
sliderArrowsTwo.on("click",
    function () {
        indexLeft++;
        sliderCarousel.eq(indexLeft).css("left", left);
    }
)