let cart = [
    {
        item__title: "Core Razor",
        item__img: "./assets/images/cart/cart_item.png",
        item__detail: "Black",
        item__count: 1,
        item__price: "$24.99"
    },
    {
        item__title: "Restore Serum",
        item__img: "./assets/images/cart/cart_item.png",
        item__detail: "1 Oz.",
        item__count: 1,
        item__price: "$24.99 ",
        old__price: "$39.95"
    }
];

export function cart_init() {
    document.querySelector(".nav__cart").addEventListener("click", e => {
        document.querySelector(".cart__items").innerHTML = "";
        cart.forEach(item => {
            document.querySelector(".cart__items").innerHTML += `
                <div class="item">
                    <img class="item__img" src="${item.item__img}" alt="1">
                    <div class="item__info">
                        <h3 class="item__title">${item.item__title}</h3>
                        <p class="item__detail">${item.item__detail}</p>
                        <div class="item__qty">
                            <button type="button" class="item__count--remove">-</button>
                            <span class="item__count">${item.item__count}</span>
                            <button type="button" class="item__count--add">+</button>
                        </div>
                    </div>
                    <p class="item__price">${item.item__price} ${item.old__price ? '<span class="item__price--old">$39.95</span>' : ''}</p>
                </div>
            `
        })
        document.querySelector(".cart-modal").classList.add("active")
    })
}

document.querySelector("#close__modal").addEventListener("click", e => {
    document.querySelector(".cart-modal").classList.remove("active")
})
document.querySelector(".cart__items").addEventListener("click", e => {
    if(e.target.classList.contains("item__count--remove") && Number(e.target.nextElementSibling.textContent)){
        e.target.nextElementSibling.textContent = Number(e.target.nextElementSibling.textContent) -1;
    } else if(e.target.classList.contains("item__count--add")){
        e.target.previousElementSibling.textContent = Number(e.target.previousElementSibling.textContent) + 1
    }

})
