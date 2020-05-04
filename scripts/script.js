let dropdown = document.getElementsByClassName("dropdown");
let check_mark = document.getElementsByClassName("showcase__check-mark");
let truthful = true;

function showcase() {
    if (truthful) {
        dropdown[0].style.pointerEvents = "initial";
        check_mark[0].style.transform =  "rotate(180deg)";
        dropdown[0].style.opacity = "1";
        dropdown[0].style.top = "37px";
    }
    else {
        dropdown[0].style.pointerEvents = "none";
        check_mark[0].style.transform =  "rotate(0deg)";
        dropdown[0].style.opacity = "0";
        dropdown[0].style.top = "0";
    }
    truthful = !truthful;
}

let change_color = document.getElementsByClassName("change-color");
let content_text = document.getElementsByClassName("content-change__text");
let fond = document.getElementsByClassName("dropdown");
let colors = ["#F25322","#00CBCD","#1E5AFF","#F49511","#FFC83C","#D19834"];
let imag = ["url(./images/list-logo/MxM9gyR7SPyCJw5hcPdmrg.jpg) 51%",
    "url(./images/list-logo/3sSeliRgSOSf7ynGKfYlEA.jpg) 51%",
    "url(./images/list-logo/tg9IIg-LT3WXxVKvzfTvvA.jpg) 51%",
    "url(./images/list-logo/ThKjHBViQ1GK1csrofzWyg.jpg) 51%",
    "url(./images/list-logo/b7_kVQiDQv-VNUAuJjzYRA.jpg) 51%",
    "url(./images/list-logo/GQUX_rj-SDOHAPLgKP_xmw.jpg) 51%"
];

function content_change(index) {
    for (let i = 0; i < change_color.length; i++) {
        change_color[i].style.fill = "#A6A6A7";
        content_text[i].style.color = "#A6A6A7";
        if (index == i) {
            change_color[index].style.fill = colors[index];
            content_text[index].style.color = colors[index];
        }
    }
    dropdown[0].style.background = imag[index];
}