const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const slides = $$(".hw__item");
const listSlides = $$(".hw__list");
const list1 = $(".hw__list-1");
const list2 = $(".hw__list-2");
const listDots = $$(".dot__child");
const dot1 = $(".dot-1");
const dot2 = $(".dot-2");

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides() {
    showSlides((slideIndex += n));
}

function currentSlide() {
    showSlides((slideIndex = n));
}

function dotHandler(dot) {
    if (dot === 0) {
        dot1.classList.add("active");
        dot2.classList.remove("active");
        listSlides[0].style.display = "flex";
        listSlides[1].style.display = "none";
    } else {
        dot2.classList.add("active");
        dot1.classList.remove("active");
        listSlides[1].style.display = "flex";
        listSlides[0].style.display = "none";
    }
}

function sideHandler(bt) {
    console.log(bt);
    if (bt == "prev") {
        console.log(dot1.classList.contains("active"));

        if (dot1.classList.contains("active")) {
            dotHandler(1);
        } else {
            dotHandler(0);
        }
    } else if (bt == "next") {
        console.log(dot1.classList.contains("active"));

        if (dot2.classList.contains("active")) {
            dotHandler(0);
        } else {
            dotHandler(1);
        }
    }
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 0;
    }
    if (n < 1) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < listSlides.length; i++) {
        listSlides[i].style.display = "none";
    }
    if (n < 4) {
        dotHandler(0);
    } else if (n > 3) {
        dotHandler(1);
    }
}