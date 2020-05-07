let dropdown = $(".dropdown");
let check_mark = $(".showcase__check-mark");
let truthful = true;
let colors = ["#F25322","#00CBCD","#1E5AFF","#F49511","#FFC83C","#D19834"];
let contantsChange = $(".content-change");
let groupBlocks = $(".group-blocks");
let menuItems = $(".main-menu__items");
let indexNavList = 0;
let selectButton = 0;
initButton();

function showcase() {
    if (truthful) {
        dropdown[0].classList.add("showblock");
        check_mark[0].classList.add("rotate");
    }
    else {
        dropdown[0].classList.remove("showblock");
        check_mark[0].classList.remove("rotate");
    }
    truthful = !truthful;
}

contantsChange.hover(
    function () {
        let index = contantsChange.index(this);
        $(this).find(".change-color").css("fill", colors[index]);
        $(this).find(".content-change__text").css("color", colors[index]);
    }, 
    function () {
        if (selectButton != contantsChange.index(this)) {
            $(this).find(".change-color").css("fill", "#A6A6A7");
            $(this).find(".content-change__text").css("color", "#A6A6A7");
        }
    }
);
contantsChange.click(
    function () {
        contantsChange.find(".change-color").css("fill", "#A6A6A7");
        contantsChange.find(".content-change__text").css("color", "#A6A6A7");
        groupBlocks.hide();
        selectButton = contantsChange.index(this);
        $(this).find(".change-color").css("fill", colors[selectButton]);
        $(this).find(".content-change__text").css("color", colors[selectButton]);
        groupBlocks.eq(selectButton).show();
    }
);
function initButton() {
    contantsChange.first().find(".change-color").css("fill", colors[0]);
    contantsChange.first().find(".content-change__text").css("color", colors[0]);
}

menuItems.children(".nav-arrow").click(
    function () {
        indexNavList = menuItems.index($(this).parent());
        let selectMenuItem = menuItems.eq(indexNavList);
        let isShow = selectMenuItem.children(".nav-list").is(":visible");
        menuItems.children(".nav-list").hide();
        menuItems.children(".nav-links").css("color", "#aaaaab");
        if (isShow) {
            selectMenuItem.children(".nav-list").hide();
            selectMenuItem.children(".nav-links").css("color", "#aaaaab");
        }
        else {
            selectMenuItem.children(".nav-list").show();
            selectMenuItem.children(".nav-links").css("color", "#fab81b");
        }
    }
);