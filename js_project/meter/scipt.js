let boxes = document.querySelectorAll(".box");
let percentage = 0;
let submit = document.getElementById("submit");
let container=document.querySelector(".container");
// Loop through each box
boxes.forEach((box) => {
  let yesButton = box.querySelector(".yes");
  let noButton = box.querySelector(".no");

  yesButton.addEventListener("click", (event) =>
    handleClick(event, yesButton, noButton, "yes")
  );
  noButton.addEventListener("click", (event) =>
    handleClick(event, noButton, yesButton, "no")
  );
});

// Function to handle button clicks
function handleClick(event, clickedButton, otherButton, type) {
  // Disable both buttons in this specific box
  clickedButton.disable = true;
  clickedButton.style.opacity = "0.5";
  otherButton.disabled = true;

  let text = type.toLowerCase();
  console.log(text);

  if (text === "yes") {
    percentage += 20;
  } else if (text === "no") {
    percentage -= 20;
  }

  percentage = Math.max(percentage, 0); // Prevent negative percentage
  console.log("Current Percentage:", percentage);
}

// Submit button event listener
submit.addEventListener("click", showResult);

function showResult() {
  if (percentage >= 0 && percentage < 20) {
    console.log("bhai to rhne de tere bs ki bat nhi hai placement");
  }
  if (percentage >= 20 && percentage < 40) {
    console.log("Kya kr rha hai bhai ase nhi milegi pacement");
  } else if (percentage >= 40 && percentage < 60) {
    console.log("Bhai thoda dhyan de skills improve kr");
  } else if (percentage >= 60 && percentage < 80) {
    console.log("bhai tuje palcement lene se koi nhi rok skta");
  } else if (percentage >= 80) {
    console.log("Bhai hacker hai tu to,tuje pacement ki kya jrurat");
  }
  submit.disabled = true;
  show();
}
 
function show(){
    if (percentage >= 0 && percentage < 20) {
       container.textContent= "bhai to rhne de tere bs ki bat nhi hai placement";
      }
      if (percentage >= 20 && percentage < 40) {
        container.textContent= "Kya kr rha hai bhai ase nhi milegi pacement";
      } else if (percentage >= 40 && percentage < 60) {
        container.textContent=  "Bhai thoda dhyan de skills improve kr";
      } else if (percentage >= 60 && percentage < 80) {
        container.textContent= "bhai tuje palcement lene se koi nhi rok skta";
      } else if (percentage >= 80) {
        container.textContent= "Bhai hacker hai tu to,tuje pacement ki kya jrurat";
      }
}