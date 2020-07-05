let sliderCarousel = $(".slider-block__carousel");
let countAnchor = 0;
let widthElement = 0;

var imgs = ['img/slider/1-9-update.jpg', 'img/slider/playhome3.jpg', 'img/slider/Q2nHXES.jpg', 'img/slider/ref-2-0-615.jpg', 'img/slider/specialoffers.jpg', 'img/slider/wot_twitchprime.jpg'];
var labels = ['Обновление 1.9. Актуальная версия игры', 'Участвуй в онлайн-турнирах', 'Боевой пропуск: уникальные награды в случайных боях', 'Реферальная программа 2.0: третий сезона', 'Специальные предложения', 'Акция «Прямой эфир». Набор «Звёздная ночь»'];

function AddBlockSlider(index, isLast) {
    let slider = $(".slider-block__width");
    let SliderHTML = '<div class="slider-block__carousel"><div style="background: url('+
    imgs[index]
+') no-repeat right;" class="slider-block__img"></div><p class="slider-block__text">'+
    labels[index]
+'</p></div>';

if(isLast)
    return addLast().children(".slider-block__carousel").last();
else
    return addFirst().children(".slider-block__carousel").first();

    function addLast() {
        return slider.append(SliderHTML);
    }
    function addFirst() {
        return slider.prepend(SliderHTML);
    }
}

widthElement = AddBlockSlider(0, true).width();

$( window ).resize(function() {
    widthElement = $(".slider-block__carousel").first().width();
});

$(".slider-block__arrows-one").on("click",
function () {
    countAnchor--;
    if(countAnchor < 0) countAnchor = labels.length-1;
    var firstBlock = $(".slider-block__carousel").first();
    firstBlock.animate({
        left: widthElement + "px",
    }, 600, function() {
        firstBlock.remove();
    });
    AddBlockSlider(countAnchor, false);
}
);
$(".slider-block__arrows-two").on("click",
    function () {
        let created;
        countAnchor++;
        if(countAnchor == labels.length) countAnchor = 0;
        created = AddBlockSlider(countAnchor, true);
        created.css("left", widthElement + "px");
        created.animate({
            left: "0px",
          }, 600, function() {
            $(".slider-block__carousel").first().remove();
        });
    }
);