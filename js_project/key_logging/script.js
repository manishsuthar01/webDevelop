const logdiv = document.getElementById("log");
const statediv = document.getElementById("state");
let  start = document.getElementById("start-btn");
const stop = document.getElementById("stop-btn");

// handldeDown function
function handleDown(event) {
  logdiv.textContent = `key ${event.key} is pressed down`;
  statediv.textContent = "key is down";
}

// handle Up function
function handleUp(event) {
  logdiv.textContent = `key ${event.key} is pressed up`;
  statediv.textContent = "key is up";
}

//start button-->show key which is pressed
start.addEventListener("click", () => {
  start.disabled = true;
  document.addEventListener("keydown", handleDown); // jese hi koi key press hue ,ye handleDwon ko call kr dega
  document.addEventListener("keyup", handleUp); //jese hi key up hue,ye handleUp ko call ke dega
  stop.disabled = false;
});

//stope button--->stop the logging keyprese system
stop.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyup", handleUp);
  logdiv.innerText = "";
  statediv.textContent = "";
  stop.disabled = true;
  
  start.disabled = false;
 

});
