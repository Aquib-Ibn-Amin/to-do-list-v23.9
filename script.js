// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('task');
  const taskText = taskInput.value.trim(); // Remove leading/trailing spaces

  if (taskText !== '') {
    // Create a new list item (task)
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Create a button to remove the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
      taskItem.remove();
    };

    // Add the remove button to the task item
    taskItem.appendChild(removeButton);

    // Add the task item to the task list
    const taskList = document.getElementById('task-list');
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
  }
}

// Add tasks when Enter key is pressed
document.getElementById('task').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
