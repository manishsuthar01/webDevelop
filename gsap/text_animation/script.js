let text = "Manish";
let splitedText = text.split("");
let halfTextlength = Math.floor(splitedText.length / 2);

let clutter = "";
splitedText.forEach((element, ind) => {
  if (ind < halfTextlength) {
    clutter += `<span class="a">${element}</span>`;
  } else {
    clutter += `<span class="b">${element}</span>`;
  }
});

document.querySelector(" h1").innerHTML = clutter;

gsap.from("h1 .a", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  delay: 0.5,  
  ease: "back.out(4)",    
  stagger: 0.15,
});

gsap.from("h1 .b", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  delay: 0.5,
  ease: "back.out(4)",   
  stagger:- 0.15,
});