window.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".contest", {
        scrollTrigger: {
            trigger: '.contest_font_box',
            markers: true,
            pin: true,
            start: '-100 top',
            end: 'bottom bottom',
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