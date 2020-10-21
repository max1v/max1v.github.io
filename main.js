gsap.registerPlugin(ScrollTrigger);
let header_content = document.querySelector('.header-content')

gsap.from(header_content, {
    opacity: 0,
    duration: 0.8,
    scale: 3,
    ease:"power4",
});

gsap.from('.about', {
    scrollTrigger: ".about",
    x:1000,
    duration:1,
});