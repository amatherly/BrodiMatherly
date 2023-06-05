console.log('Hello, GitHub Pages!');


let clip = document.querySelector(".vid")


clip.addEventListener("mouseover", function (e) {
    clip.play();
})

/* Applying the mouse out event to pause the video */
clip.addEventListener("mouseout", function (e) {
    clip.pause();
})
