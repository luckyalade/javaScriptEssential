const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllTasksBtn = document.getElementById("clearAllTasksBtn");

let tasks = [];

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false }); 
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for="task-${index}">${task.text}</label>`; 
        li.querySelector("input").addEventListener("change", () => toggleIndex(index));
        taskList.appendChild(li);
    });
}

function toggleIndex(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter((task) => !task.completed);
    displayTasks();
}

function clearAllTasks() {
    tasks = [];
    displayTasks();
}


addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllTasksBtn.addEventListener("click", clearAllTasks);

displayTasks();
