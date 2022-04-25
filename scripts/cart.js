import { navbar } from "./navbar.js"
navbar()

document.querySelector(".cart__items").addEventListener("click", e => {
    if (e.target.classList.contains("item__qty--minus")) {
        let val = Number(e.target.nextElementSibling.textContent)
        if (val > 0) {
            e.target.nextElementSibling.textContent = val - 1;
            let price = e.target.parentElement.previousElementSibling.textContent
            console.log(price)
            let total = Number(price.split("$")[1]) * (val - 1)
            e.target.parentElement.nextElementSibling.textContent = `$${total}.00`
        }
    }
    else if (e.target.classList.contains("item__qty--plus")) {
        let val = Number(e.target.previousElementSibling.textContent)
        e.target.previousElementSibling.textContent = val + 1;
        let price = e.target.parentElement.previousElementSibling.textContent
        let total = Number(price.split("$")[1]) * (val + 1)
        e.target.parentElement.nextElementSibling.textContent = `$${total}.00`
    } else if (e.target.classList.contains("item__remove")) {
        e.target.parentElement.parentElement.remove()
    }
})
