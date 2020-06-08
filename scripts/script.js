let dropdown = $(".dropdown");
let commonMenu = $(".common-menu__case");
let checkMark = $(".common-menu__check-mark");
let changeColor = $(".showcase-list__change-color");
let colors = ["#F25322","#00CBCD","#1E5AFF","#F49511","#FFC83C","#D19834"];
let contantsChange = $(".showcase-list__change");
let changeText = $(".showcase-list__text");
let groupBlocks = $(".group-blocks");
let navArrow = $(".main-menu__nav-arrow");
let menuItems = $(".main-menu__items").has(".main-menu__nav-arrow");
let navLinks = $(".main-menu__nav-links");
let navList = $(".nav-list");
let cross = $(".main-headlines__cross");
let linkImg = $(".three-columns__img");
let textNews = $(".three-columns__block-news");
let textLink = $(".three-columns__news-link");
let linkShadow = $(".three-columns__link-shadow");
let subMenuCross = $(".sub-menu__cross");
let navDetail = $(".nav-detail");
let subMenuLinks = $(".sub-menu__links");
let navWrap = $(".nav-wrap");
let navBlocks = $(".nav__blocks");
let navJackdaw = $(".nav-wrap__jackdaw");
let html = $("html");
let indexHover = 0;
let indexNavList = 0;
let hoverSvg = 0;
let clickButton = 0;
firstColorSvg();
commonMenu.on("click",
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
        contantsChange.eq(clickButton).find(".showcase-list__change-color").css("fill", colors[clickButton]);
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
        contantsChange.eq(hoverSvg).find(".showcase-list__change-color").css("fill", colors[hoverSvg]);
        changeText.eq(hoverSvg).css("color", colors[hoverSvg]);
    },
    function () {
        if (clickButton != hoverSvg) {
            contantsChange.eq(hoverSvg).find(".showcase-list__change-color").css("fill", "#9B9B9B");
            changeText.eq(hoverSvg).css("color", "#9B9B9B");
        }
    }
);
navArrow.on("click",
    function () {
        indexNavList = navArrow.index(this);
        let hideList = navList.eq(indexNavList).is(":visible");
        navLinks.css("color", "#aaaaab");
        menuItems.eq(indexNavList).children(".main-menu__nav-links").css("color", "#fab81b");
        navList.hide();
        navList.eq(indexNavList).show();
        if (hideList) {
            menuItems.eq(indexNavList).children(".main-menu__nav-links").css("color", "#aaaaab");
            navList.eq(indexNavList).hide();
        }
    }
);
cross.on("click",
    function () {
        $(".main-headlines__promo-title").toggleClass("under-wot");
        $(".main-headlines__logo-wot").toggleClass("over-wot");
        $(".main-headlines__limited-height").toggleClass("low-block");
        cross.toggleClass("jackdaw");
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
        cross.hide();
        html.css("overflow", "hidden");
    }
)
navJackdaw.eq(0).on("click", 
    function () {
        navWrap.hide();
        cross.show();
        html.css("overflow", "inherit");
    }
)

// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());