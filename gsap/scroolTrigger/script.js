// gsap.registerPlugin(ScrollTrigger);

gsap.from("#page1 .box", {
    opacity:0,
    y:-100,
    duration:1.5,
    delay:1,
    stagger:0.5,
    ease:"back.out(1.7)",
    repeat:-1,
    yoyo:true,
})
// gsap.from("#page2 .box", {
//     scale:0,
//     duration:2,
//     ease:"back.out(1.7)",
//     scrollTrigger:{
//         trigger:"#page2 .box",
//         start:"top 60%",
//         end:"top 30%",
//         scrub:2,
//         // pin:true,
//         markers:true
//     }
// })

gsap.to("#page3 h1", {
    transform:"translateX(-200%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
        // markers:true
    }
})