import { navbar } from "./navbar.js"

window.addEventListener("DOMContentLoaded", e=>{
    navbar()
   
    let razor = `
    <div class="razor">
        <img loading="lazy" src="./assets/images/home/razor.png" alt="razor">
        <div class="razor__options">
            <input class="razor__option razor__option--brown" type="radio" name="color">
            <input class="razor__option razor__option--white" type="radio" name="color">
            <input class="razor__option razor__option--black" type="radio" name="color">
        </div>
        <h3 class="razor__title">Product title</h3>
        <p class="razor__txt">From $99.00 <span>$150.00</span></p>
    </div>
        `;
    
    for (let i = 0; i < 6; i++) {
        if (i < 3) {
            document.querySelector(".razors-js .products__row").innerHTML += razor
            document.querySelector(".skincare-js .products__row").innerHTML += razor
        }
        document.querySelector(".accessories-js .products__row").innerHTML += razor
    }
})