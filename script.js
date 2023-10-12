const myVideo = document.querySelector(".myVideo");
console.dir(myVideo)

window.addEventListener('load', () => {
    console.log(myVideo.play)
})

const playVideo = () => {
    myVideo.play();
}

const pauseVideo = () => {
    myVideo.pause();
}

/*
juguemos

let drop = document.getElementsByClassName(soltarCaja);
console.dir(drop);
*/

