window.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".contest_font", {
        scrollTrigger: {
            trigger: '.contest_font',
            // markers: true,
            pin: true,
            start: '40% center',
            endTrigger: ".contest",
            end: 'bottom bottom',
            scrub: 1,
        }
    })
    gsap.to(".work_font", {
        scrollTrigger: {
            trigger: '.work_font',
            markers: true,
            pin: true,
            start: '40% center',
            endTrigger: ".work",
            end: '90% bottom',
            scrub: 1,
        }
    })
})

const app = Vue.createApp({
    data() {
        return {
            mybtn: [
                {
                    name: "關於我",
                    href: "#about",
                    class: "my_btn1",
                },
                {
                    name: "作品集",
                    href: "#work",
                    class: "my_btn2",
                },
                {
                    name: "比賽or證照",
                    href: "#contest",
                    class: "my_btn3",
                },
            ],
            workdata: WORKDATA
        }
    },
}).mount('#app')