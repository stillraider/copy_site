let dropdown = document.getElementsByClassName("dropdown");
let check_mark = document.getElementsByClassName("showcase__check-mark");
let truthful = true;
let change_color = document.getElementsByClassName("change-color");
let content_text = document.getElementsByClassName("content-change__text");
let fond = document.getElementsByClassName("dropdown");
let colors = ["#F25322","#00CBCD","#1E5AFF","#F49511","#FFC83C","#D19834"];
let img_ico = ["0","1","2","3","4","5"];

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

function content_change(index) {
    for (let i = 0; i < change_color.length; i++) {
        change_color[i].style.fill = "#A6A6A7";
        content_text[i].style.color = "#A6A6A7";
    }
    change_color[index].style.fill = colors[index];
    content_text[index].style.color = colors[index];
    dropdown[0].style.background = "url(./images/list-logo/" + img_ico[index] + ".jpg) 51%";
}