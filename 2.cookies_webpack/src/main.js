import setCookie from "./setCookies";
require("core-js/fn/array/index-of.js"); //polyfill
require("./style.css");

document.addEventListener('DOMContentLoaded', (e) => {
    const box = document.querySelector("#box");
    const background_box = document.querySelector("#background_box");
    const buttons = document.querySelectorAll("#box button");
    const body = document.querySelector("body");

    if(document.cookie.indexOf("GDPR") < 0) {
        box.style.display = "block";
        background_box.style.display = "block";
        body.style.overflow = "hidden";
    }

    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            let value = e.target.className;
            setCookie("GDPR", value, 24);
            let parent = this.parentElement.parentElement;
            let previous = parent.previousElementSibling;
            parent.style.display = "none";
            previous.style.display = "none";
            body.style.overflow = "visible";
        });
    });
});



