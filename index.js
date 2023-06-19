// javascript

const menuBtn = document.querySelector(".menu-btn");
menu = document.querySelector("nav ul");
exitBtn = document.querySelector(".exit-btn");
formEl = document.querySelector(".form-container");

menuBtn.addEventListener("click", () => {
    menu.style.transform = "translateX(0)";
});

// exitBtn.addEventListener("click", () => {
//     menu.style.transform = "translateX(100%)";
// });

formEl.addEventListener("submit", () => {
    alert("Registration completed");
});

document.addEventListener("click", (e) => {
    if (menu.contains(e.target) && e.target !== menuBtn) {
        menu.style.transform = "translateX(100%)";
    }
});
