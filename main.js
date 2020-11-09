gsap.registerPlugin(ScrollTrigger);
let header_content = document.querySelector('.header-content')

let header = document.querySelector('header');
header.style.height = window.innerHeight+'px';

gsap.from(header_content, {
    opacity: 0,
    duration: 1,
    x: -400,
    ease:"power4",
});

gsap.from('.about', {
    scrollTrigger: ".about",
    x:400,
    duration:0.6,
    opacity: 0,
});