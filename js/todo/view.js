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
      <li class="todo-item">
        <label class="todo-item-label">
          <input class="checkbox" type="checkbox" ${checked}/>
          <span class="${completeClass}">${taskObject.text}</span>
          <button class="btn btn-secondary btn-sm">Удалить</button>
        </label>
      </li>`;

    this.elements.taskList.insertAdjacentHTML("beforeend", taskHtml);
  }

  clearInput() {
    this.elements.input.value = "";
  }
}
