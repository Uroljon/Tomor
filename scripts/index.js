import { navbar } from "./navbar.js"

navbar()

document.querySelectorAll(".product__like").forEach(elem => {
    elem.addEventListener("click", e => {
        if (e.target.classList.contains("liked")) {
            e.target.src = "./assets/images/icons/heart.svg";
            e.target.classList.remove("liked")
        } else {
            e.target.src = "./assets/images/icons/heart_full.svg";
            e.target.classList.add("liked")
        }
    })
});

let carousel_speed = 1500;
$('.carousel_1__wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    nextArrow: ".carousel_1--next",
    autoplay: true,
    autoplaySpeed: carousel_speed,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
$('.carousel_2').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    slidesPerRow: 1,
    rows: 2,
    arrows: true,
    dots: false,
    nextArrow: ".carousel_2--next",
    prevArrow: ".carousel_2--prev",
    autoplay: true,
    autoplaySpeed: carousel_speed,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesPerRow: 1,
                rows: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesPerRow: 1,
                rows: 1,
            }
        },
        {
            breakpoint: 300,
            settings: {
                rows: 1,
                slidesToShow: 1,
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.carousel_3__wrapper').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    nextArrow: ".carousel_3--next",
    prevArrow: ".carousel_3--prev",
    autoplay: false,
    autoplaySpeed: carousel_speed,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                adaptiveHeight: true,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
            }
        }
    ]
});
