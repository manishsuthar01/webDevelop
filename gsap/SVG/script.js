let initialpath = `M 10 100 Q 500 100 990 100`;

let finalpath = `M 10 100 Q 500 100 990 100`;
let path = document.querySelector("path");
let string = document.querySelector("#string");

string.addEventListener("mousemove", (dets) => {
  finalpath = `M 10 100 Q ${dets.offsetX} ${dets.offsetY} 990 100`;
  gsap.to("svg path", {
    attr: {
      d: finalpath,
    },
    duration: 0.3,
    ease: "elastic.out(1, 0.3)",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: {
      d: initialpath,
    },
    duration: 0.5,
    ease: "elastic.out(1, 0.3)",
  });
});

