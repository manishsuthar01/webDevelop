let currentDirection = null;

window.addEventListener("wheel", (dets) => {
  if (dets.deltaY > 0 && currentDirection !== "right") {
    currentDirection = "right";
    
    gsap.killTweensOf(".marque"); // Stop any existing animation
    
    gsap.to(".marque", {
      x: "-200%",
      duration: 6,
      ease: "none",
      repeat: -1,
    });
    gsap.to(".marque img", {
      rotate: 180,
    });
  }

  if (dets.deltaY < 0 && currentDirection !== "left") {
    currentDirection = "left";

    gsap.killTweensOf(".marque"); // Stop any existing animation

    gsap.to(".marque", {
      x: "0%",
      duration: 6,
      ease: "none",
      repeat: -1,
    });
    gsap.to(".marque img", {
      rotate: 360,
    });
  }
});


// let scrollDir = null;

// const marqueeAnim = gsap.to(".marque", {
//   xPercent: -100,
//   duration: 10,
//   ease: "none",
//   repeat: -1,
//   modifiers: {
//     xPercent: gsap.utils.wrap(-100, 0), // this ensures smooth loop
//   },
//   paused: true // pause initially
// });

// window.addEventListener("wheel", (dets) => {
//   if (dets.deltaY > 0 && scrollDir !== "right") {
//     scrollDir = "right";
//     marqueeAnim.play();
//   }

//   if (dets.deltaY < 0 && scrollDir !== "left") {
//     scrollDir = "left";
//     marqueeAnim.reverse(); // play in opposite direction
//   }
// });
