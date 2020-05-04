let dropdown = document.getElementsByClassName("dropdown");
let truthful = true;

function showcase() {
    if (truthful) {
        dropdown[0].style.display = "block";
        dropdown[0].style.top = "37px";
    }
    else {
        dropdown[0].style.display = "none";
        dropdown[0].style.top = "0";
    }
    truthful = !truthful;
}

let change_color = document.getElementsByClassName("change-color");
let content_text = document.getElementsByClassName("content-change__text");
let colors = ["#F25322","#00CBCD","#1E5AFF","#F49511","#FFC83C","#D19834"];

function content_change(index) {
    for (let i = 0; i < change_color.length; i++) {
        change_color[i].style.fill = "#A6A6A7";
        content_text[i].style.color = "#A6A6A7";
        if (index == i) {
            change_color[index].style.fill = colors[index];
            content_text[index].style.color = colors[index];
        }
    }
}