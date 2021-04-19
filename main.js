const feather = require('feather-icons')
const bodymovin = require('./lottie.js')

window.onload = function() {
    feather.replace()
    const preloaderContainer = document.querySelector('.preloader')
    let loader = bodymovin.loadAnimation({
        container: preloaderContainer, // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'data.json' // the path to the animation json
    })

    loader.addEventListener("complete", function() {
        preloaderContainer.classList.add('hide')
        setTimeout(() => {
            preloaderContainer.classList.add('is-hidden')
        }, 800);
    })
}