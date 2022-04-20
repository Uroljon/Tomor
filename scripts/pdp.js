import { navbar } from "./navbar.js"

navbar()

$('.carousel__wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,
                dots: true,
                arrows: true,
                prevArrow: ".carousel__btn--right",
                nextArrow: ".carousel__btn--left",
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});