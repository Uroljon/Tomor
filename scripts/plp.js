import { navbar } from "./navbar.js"
let products = [
    {
        img: "./assets/images/products/product_1.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: true,
        is_on_sale: false
    },
    {
        img: "./assets/images/products/product_2.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: true,
        is_on_sale: false
    },
    {
        img: "./assets/images/products/product_3.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: true,
        is_on_sale: false
    },
    {
        img: "./assets/images/products/product_1.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: false,
        is_on_sale: false
    },
    {
        img: "./assets/images/products/product_2.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: false,
        is_on_sale: false
    },
    {
        img: "./assets/images/products/product_3.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: false,
        is_on_sale: true,
        old_price: "$879.00"
    },
    {
        img: "./assets/images/products/Product image-1.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: true,
        is_on_sale: false
    },
    {
        img: "./assets/images/products/Product image-2.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: true,
        is_on_sale: false
    },
    {
        img: "./assets/images/products/Product image-1.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: true,
        is_on_sale: false
    },
    {
        img: "./assets/images/products/Product image-2.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: false,
        is_on_sale: false
    },
    {
        img: "./assets/images/products/product_2.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: false,
        is_on_sale: false
    },
    {
        img: "./assets/images/products/product_3.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: false,
        is_on_sale: true,
        old_price: "$879.00"
    },
    {
        img: "./assets/images/products/Product image-1.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: true,
        is_on_sale: false
    },
    {
        img: "./assets/images/products/Product image-2.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: true,
        is_on_sale: false
    },
    {
        img: "./assets/images/products/Product image-1.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: true,
        is_on_sale: false
    },
    {
        img: "./assets/images/products/Product image-2.png",
        title: "Brand Name",
        description: "Zipper Mini Dress",
        price: "$879.00",
        is_new: false,
        is_on_sale: false
    },
]
let current_page = 1;
let items_per_page = 6;

window.addEventListener("DOMContentLoaded", e => {
    navbar()

    //Accordeon component
    let accordionTogglers = document.querySelectorAll(".accordion-item-toggler");
    accordionTogglers.forEach(function (toggler) {
        toggler.addEventListener("click", function (e) {
            let accordionBody = e.target.nextElementSibling;
            if (accordionBody.style.maxHeight) {
                accordionBody.style.maxHeight = null;//yopdi
                e.target.classList.remove("active")
            } else {
                accordionTogglers.forEach(function (othertogglers) {
                    othertogglers.nextElementSibling.style.maxHeight = null;//qolganlarini yopdi va targetni ochdi
                    othertogglers.classList.remove("active")
                });
                e.target.classList.add("active")
                accordionBody.style.maxHeight = `${accordionBody.scrollHeight}px`; //height is set according to its content's height
            }
        });
    });

    document.querySelector(".pl__controls").addEventListener("click", e=>{
        if(e.target.classList.contains("pl__controls__filter")){
            document.querySelector(".filter").classList.toggle("active")
            document.querySelector(".sort").classList.remove("active")
        } else if(e.target.classList.contains("pl__controls__sort")){
            document.querySelector(".sort").classList.toggle("active")
            document.querySelector(".filter").classList.remove("active")
        }
    })

    render_items(current_page, items_per_page)

    document.querySelector(".pl__pagination").addEventListener("click", e=>{
        if(Number(e.target.getAttribute("data-target"))){
            if(Number(e.target.getAttribute("data-target"))*items_per_page - items_per_page+1 <= products.length){
                e.target.parentElement.querySelector(".active").classList.remove("active")
                e.target.classList.add("active");
                render_items(Number(e.target.getAttribute("data-target")), items_per_page);
            }
        }
    })
})

function render_items(c_page, p_page) {
    document.querySelector(".products").innerHTML = "";
    for (let i = c_page*p_page - p_page; i < c_page*p_page; i++) {
        if(!products[i]) return;
        document.querySelector(".products").innerHTML += `
        <div class="product">
            <img class="product__img" src="${products[i].img}" alt="1" />
            <div class="product__icons">
              <img src="./assets/images/plp/icon1.svg" alt="1">
              <img src="./assets/images/plp/icon2.svg" alt="1">
              <img src="./assets/images/plp/icon3.svg" alt="1">
            </div>
            <a href="pdp.html" class="product__title">${products[i].title}</a>
            <p class="text">${products[i].description}</p>
            <p class="text">${products[i].price}</p>
            <img class="product__like" src="./assets/images/icons/heart.svg" alt="fav" />
            ${products[i].is_new ? '<div class="product__badge">New</div>':''}
            ${products[i].is_on_sale ? '<div class="product__badge product__badge--sale">Sale</div>':''}
        </div>
        `;
    }
}