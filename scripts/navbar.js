export function navbar(){
    document.querySelector(".nav__burger").addEventListener("click", e=>{
        document.querySelector(".nav__links").classList.toggle("nav__links--visible")
        e.target.classList.toggle("nav__burger--is-open")
        if(document.querySelector(".nav__links").classList.contains("nav__links--visible")){
            document.querySelector(".nav__burger img").src = "./assets/images/icons/x.svg"
        }else{
            document.querySelector(".nav__burger img").src = "./assets/images/icons/burger.svg"
        }
    })
}