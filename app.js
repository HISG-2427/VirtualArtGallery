const img1 = document.querySelectorAll(".images .img");
const img2 = document.querySelectorAll(".images2 .img");
const showSpan = false;

img1.forEach(i => {
    i.addEventListener("mouseover", () => {
        img1.forEach(j => {
            j.style.animationPlayState = "paused";
        })
        showSpan = true
        const span = document.querySelector(`${e.target} span`);
        span.style.visibility = "visible";
    })
    i.addEventListener("mouseout", (e) => {
        img1.forEach(j => {
            j.style.animationPlayState = "running";
        })
        const span = document.querySelector(`${e.target} span`);
        span.style.visibility = "hidden";
    })
    i.addEventListener("click", () => moreInfo(e));
});
img2.forEach(i => {
    i.addEventListener("mouseover", () => {
        const parent = i.parentElement;
        img2.forEach(j => {
            j.style.animationPlayState = "paused";
        })
    })
    i.addEventListener("mouseout", () => {
        img2.forEach(j => {
            j.style.animationPlayState = "running";
        })
    })
    i.addEventListener("click", () => moreInfo(e));
});

function moreInfo(event) {
    event.target.style.width = "500px";
    event.target.style.height = "500px";
    event.target.style.fontSize = "25px";
    event.target.style.textAlign = "center";
}