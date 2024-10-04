gsap.registerPlugin(ScrollTrigger);
gsap.to(".contest",{
    scrollTrigger: {
        trigger: '.contest_font',
        markers:true,
        pin: true, 
        start: '-100 top',
        end: 'bottom center', 
        scrub: 1, 
    }
})