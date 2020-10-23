gsap.registerPlugin(ScrollTrigger);
let header_content = document.querySelector('.header-content')

let header = document.querySelector('header');
header.style.height = window.innerHeight+'px';

gsap.from(header_content, {
    opacity: 0,
    duration: 0.8,
    scale: 3,
    ease:"power4",
});

gsap.from('.about', {
    scrollTrigger: ".about",
    x:1000,
    duration:0.6,
    opacity: 0,
});