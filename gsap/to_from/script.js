const timeline = gsap.timeline();

timeline.from("#page1 .box",{
    opacity: 0,
    duration: 1.5,
    y: -100,
    ease: "power1.inOut",
    delay:1,
    ease: "power1.inOut",
    trig
})
timeline.to("#page2 .box",{
    x: 100,
    duration: 1,
    ease: "power1.inOut"
})
timeline.to("#page3 .box",{
    x: 100,
    duration: 1,
    ease: "power1.inOut"
})