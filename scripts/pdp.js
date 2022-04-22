import { navbar } from "./navbar.js"

navbar()
document.querySelector(".information__nav").addEventListener("click", e => {
    let target = e.target.getAttribute("data-target");
    document.querySelector(".information__content .active").classList.remove("active");
    document.querySelector(".information__nav .active").classList.remove("active");
    e.target.classList.add("active")
    document.querySelector(`.information__content .${target}`).classList.add("active")
})
$('.carousel__wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    appendDots: ".dots",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,
                autoplay: true,
                dots: true,
                arrows: true,
                prevArrow: ".carousel__btn--right",
                nextArrow: ".carousel__btn--left",
            }
        }
    ]
});
$('.carousel_2_wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: ".carousel__btn--ri",
    nextArrow: ".carousel_2_next",
    autoplay: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
$('.carousel_3_wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: ".carousel__btn--r",
    nextArrow: ".carousel_3_next",
    autoplay: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});