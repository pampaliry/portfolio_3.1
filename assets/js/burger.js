'use strict'

function burgerControl() {
    var burger = document.getElementById("burger");
    var mobileNav = document.getElementById("mobile_nav");
    var burgerImg = document.getElementById("burgerImg");


    function otvorZavriBurger() {
        if (mobileNav.style.display == 0) {
            mobileNav.style.display = "none";
        }
        if (
            mobileNav.style.display === "none") {
            mobileNav.style.display = "block";
            burgerImg.style.fill = "#000";

        } else {
            mobileNav.style.display = "none";
            burgerImg.style.fill = "#f3f6fa";
        }
    }

    burger.addEventListener("click", otvorZavriBurger);

}
burgerControl();