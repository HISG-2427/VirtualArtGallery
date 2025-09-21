const img1 = document.querySelectorAll(".images .img");
const img2 = document.querySelectorAll(".images2 .img");

img1.forEach(i => {
    i.addEventListener("mouseover", (e) => {
        img1.forEach(j => {
            j.style.animationPlayState = "paused";
        });
    })
    i.addEventListener("mouseout", () => {
        img1.forEach(j => {
            j.style.animationPlayState = "running";
        });
    });
})
img2.forEach(i => {
    i.addEventListener("mouseover", () => {
        img2.forEach(j => {
            j.style.animationPlayState = "paused";
        });
    })
    i.addEventListener("mouseout", () => {
        img2.forEach(j => {
            j.style.animationPlayState = "running";
        });
    })
});