let expression = "";
let result = document.getElementById("result");
let buttons = Array.from(document.querySelectorAll("button"));

buttons.map((buttons) => {
  buttons.addEventListener("click", (e) => {
    let value=e.target.innerText.trim();
    if (value === "c") {
      expression = "";
      result.innerText = "ans";
    } else if (value === "=") {
      try {
        let big_answer = eval(expression);
        let answer = big_answer.toFixed(5); // Limit to 2 decimal places
        console.log(typeof answer)
        if (answer === undefined || answer === null) {
          result.innerText = "Error";
          return;
        } 
        result.innerText = answer.toString();
        expression = answer.toString();
      } catch {
        result.innerText = "Error";
      }
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
      result.innerText = expression;
    } else {
      expression += value;
      result.innerText = expression;
    } 
  });
});
console.log(typeof expression)
