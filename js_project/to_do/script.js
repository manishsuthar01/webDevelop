let inputField = document.querySelector("#task-input");
let addbtn = document.querySelector("#add-btn");
let tasklist = document.querySelector("#task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Add task
addbtn.addEventListener("click", () => {
  let inputText = inputField.value.trim();
  if (inputText === "") {
    alert("Input area is empty");
  } else {
    let task = {
      input: inputText,
      completed: false,
    };
    tasks.push(task);
    saveTasks(); 
    renderTasks();
    inputField.value = "";
  }
});

// Render tasks to UI
function renderTasks() {
  tasklist.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.classList.add("task");
    if (task.completed) li.classList.add("completed");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    let span = document.createElement("span");
    span.textContent = task.input;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.className = "delete-btn";

    // Delete logic
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks(); 
      renderTasks();
    });

    // Checkbox logic
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    li.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(checkbox);
    tasklist.appendChild(li);
  });
}

// Save to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Filter Buttons
let all_button = document.querySelector(".all");
let active_button = document.querySelector(".active");
let complete_button = document.querySelector(".completed");

function clearCurrentClass() {
  all_button.classList.remove("current");
  active_button.classList.remove("current");
  complete_button.classList.remove("current");
}

all_button.addEventListener("click", () => {
  document.querySelectorAll("#task-list li").forEach((li) => {
    li.style.display = "flex";
  });
  clearCurrentClass();
  all_button.classList.add("current");
});

active_button.addEventListener("click", () => {
  document.querySelectorAll("#task-list li").forEach((li) => {
    const checked = li.querySelector('input[type="checkbox"]').checked;
    li.style.display = checked ? "none" : "flex";
  });
  clearCurrentClass();
  active_button.classList.add("current");
});

complete_button.addEventListener("click", () => {
  document.querySelectorAll("#task-list li").forEach((li) => {
    const checked = li.querySelector('input[type="checkbox"]').checked;
    li.style.display = checked ? "flex" : "none";
  });
  clearCurrentClass();
  complete_button.classList.add("current");
});
