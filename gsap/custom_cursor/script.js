let cursor = document.querySelector(".cursor");
let main = document.querySelector("#main");

main.addEventListener("mousemove", (dets) => {
  gsap.to(".cursor", {
    display:"block",
    opacity: 1,
    duration:0.7,
    ease:"back.out(1.7)",
    x: dets.clientX,
    y: dets.clientY,
  });
});

main.addEventListener("mouseleave",(dets)=>{
    gsap.to(".cursor",{
        opacity:0,
        display:"none",
    })
}) 