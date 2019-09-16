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

    const setCookie = (name, value, hours) => {
        let date = new Date();
        date.setTime(date.getTime() + (hours*60*60*1000));
        let expires = date.toUTCString();
        document.cookie = name + "="+ value + "; expires=" + expires;
    };

    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            let value = e.target.className;
            setCookie("GDPR", value, 24);
            let parent = this.parentElement.parentElement;
            let previous = parent.previousElementSibling;
            parent.style.display = "none";
            previous.style.display = "none";
            body.style.overflow = "visible"
        });
    });
});



