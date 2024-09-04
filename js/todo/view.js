export default class view {
  constructor(tasks) {
    
    tasks.forEach((task) => {
      this.renderTasks(task);
    });
  }

  elements = {
    input: document.getElementById("newTask"),
    form: document.getElementById("form"),
    taskList: document.getElementById("taskList"),
  };

  renderTasks(taskObject) {
    

    
    const completeClass = taskObject.status === 'done' ? 'completed' : '';
    const checked = taskObject.status === "done"? 'checked' : '';


    
    const taskHtml = `
      <li class="todo-item" data-id="${taskObject.id}">
        <label class="todo-item-label">
          <input class="checkbox" type="checkbox" ${checked}/>
          <span class="${completeClass}">${taskObject.text}</span>
          <button class="btn btn-secondary btn-sm" data-delete>Удалить</button>
        </label>
      </li>`;

    this.elements.taskList.insertAdjacentHTML("beforeend", taskHtml);
  }

  clearInput() {
    this.elements.input.value = "";
  }

  changeStatus(taskObject) {
    const taskElement = this.elements.taskList.querySelector(`[data-id="${taskObject.id}"]`);
    console.log(taskElement);

    const taskTextEl = taskElement.querySelector('span');

    if (taskObject.status === 'done') {
      taskTextEl.classList.add('completed');
    } else {
      taskTextEl.classList.remove('completed');
    }
  }

  removeTask(taskObject) {
    const taskElement = this.elements.taskList.querySelector(`[data-id="${taskObject.id}"]`);
    taskElement.remove();
  }
}
