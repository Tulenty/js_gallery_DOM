"use strict";
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", (e)=>{
    const target = e.target.closest("a");
    if (target) {
        e.preventDefault();
        const largeImg = document.getElementById("largeImg");
        largeImg.src = target.href;
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
