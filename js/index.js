"use strict"
window.addEventListener('load', () => {
    const header__icon = document.querySelector(".header__icon-element");

    const menu = document.querySelector(".header__nav");
    const lista = document.querySelector(".header__nav-ul");
    const elementos_lista = document.querySelectorAll(".header__nav-link");
    elementos_lista.forEach(enlaces => {
        enlaces.addEventListener("mouseover", (e) => {
            enlaces.classList.add("jello-diagonal-1");
        })

        enlaces.addEventListener("mouseout", (e) => {
            enlaces.classList.remove("jello-diagonal-1");
        })
    });

    header__icon.addEventListener("click", (e) => {

        //Alternamos estilos para el menu y body.
        menu.classList.toggle("active");

        if( menu.classList.toggle("active") == true){
            menu.classList.toggle("active");
            lista.style.marginTop = "60px";
            
            menu.style.transition = "all 1.5s ease-in-out";
        }else{
            menu.classList.toggle("active");
            lista.style.marginTop = "0px";
        }
    })
});