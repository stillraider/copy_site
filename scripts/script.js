let dropdown = $(".dropdown");
let check_mark = $(".showcase__check-mark");
let truthful = true;
let colors = ["#F25322","#00CBCD","#1E5AFF","#F49511","#FFC83C","#D19834"];
let contantsChange = $(".content-change");
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
        selectButton = contantsChange.index(this);
        $(this).find(".change-color").css("fill", colors[selectButton]);
        $(this).find(".content-change__text").css("color", colors[selectButton]);
    }
);
function initButton() {
    contantsChange.first().find(".change-color").css("fill", colors[0]);
    contantsChange.first().find(".content-change__text").css("color", colors[0]);
}