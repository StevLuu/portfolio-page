console.log("js linked!")

document.addEventListener("DOMContentLoaded", () =>{
    const nav = document.querySelector(".navs");
    document.querySelector("#buttonNav").addEventListener("click", () =>{
        nav.classList.add("nav--open");
    });

    document.querySelector(".nav-overlay").addEventListener("click", () =>{
        nav.classList.remove("nav--open");
    });
});