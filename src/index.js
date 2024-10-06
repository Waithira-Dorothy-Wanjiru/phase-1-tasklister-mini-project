document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  

  let tasks = [];

  
  form.addEventListener("submit", function (event) {
    event.preventDefault();

   
    const taskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;
    const duration = document.getElementById("duration").value;
    const dueDate = document.getElementById("due-date").value;

    if (taskDescription.trim() === "") {
      alert("Please enter a task description.");
      return;
    }

    
    const task = {
      description: taskDescription,
      priority: priority,
      duration: duration,
      dueDate: dueDate,
    };

  
    tasks.push(task);

    displayTasks(tasks);

    form.reset();
  });

  
  function displayTasks(tasks) {
    taskList.innerHTML = ""; 

    tasks.forEach((task, index) => {
      const taskItem = document.createElement("li");

      
      taskItem.innerHTML = `${task.description} - Priority: ${task.priority} - ${task.duration} hours - Due: ${task.dueDate}`;

    
      if (task.priority === "high") {
        taskItem.style.color = "red";
      } else if (task.priority === "medium") {
        taskItem.style.color = "orange";
      } else {
        taskItem.style.color = "green";
      }

     
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", () => {
        tasks.splice(index, 1); 
        displayTasks(tasks); 
      });

      
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.style.marginLeft = "10px";
      editButton.addEventListener("click", () => {

        document.getElementById("new-task-description").value = task.description;
        document.getElementById("priority").value = task.priority;
        document.getElementById("duration").value = task.duration;
        document.getElementById("due-date").value = task.dueDate;

        tasks.splice(index, 1);
        displayTasks(tasks);
      });

      
      taskItem.appendChild(deleteButton);
      taskItem.appendChild(editButton);
      taskList.appendChild(taskItem);
    });
  }

  function priorityValue(priority) {
    if (priority === "high") return 1;
    if (priority === "medium") return 2;
    if (priority === "low") return 3;
  }
});
