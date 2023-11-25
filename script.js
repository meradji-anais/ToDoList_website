
function createTaskElement(taskName, taskDate, taskColor) {
  var taskList = document.getElementById('task-list');
  var listItem = document.createElement('li');
  var taskText = document.createElement('span');
  var dateText = document.createElement('span');
  var removeCheckbox = document.createElement('input');

  taskText.innerHTML = '<strong>' + taskName + '</strong>';
  dateText.textContent = taskDate;

  removeCheckbox.type = 'checkbox';
  removeCheckbox.classList.add('remove-task');
  removeCheckbox.addEventListener('change', function() {
      if (removeCheckbox.checked) {
          listItem.remove();
      }
  });

  listItem.classList.add(taskColor);

  listItem.appendChild(removeCheckbox);
  listItem.appendChild(taskText);
  listItem.appendChild(dateText);
  taskList.appendChild(listItem);
}

function addTask() {
  const taskInput = document.getElementById('task');
  const dateInput = document.getElementById('date');
  const colorSelect = document.getElementById('color');
  const taskList = document.getElementById('task-list');

  if (taskInput.value.trim() !== '') {
      const listItem = document.createElement('li');
      const taskText = document.createElement('span');
      const dateText = document.createElement('span');
      const removeCheckbox = document.createElement('input');

      taskText.innerHTML = '<strong>' + taskInput.value + '</strong>';
      dateText.textContent = dateInput.value;

      removeCheckbox.type = 'checkbox';
      removeCheckbox.classList.add('remove-task');
      removeCheckbox.addEventListener('change', function() {
          if (removeCheckbox.checked) {
              listItem.remove();
          }
      });

      const color = colorSelect.value;
      listItem.classList.add(color);

      listItem.appendChild(removeCheckbox);
      listItem.appendChild(taskText);
      listItem.appendChild(dateText);
      taskList.appendChild(listItem);

      taskInput.value = '';
      dateInput.value = '';
  }
}

  