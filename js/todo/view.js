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
    console.log(taskObject.status);

    let completeClass = '';

    if (taskObject.status === "done") {
      completeClass = 'completed';
    }
    const taskHtml = `
      <li class="todo-item">
        <label class="todo-item-label">
          <input class="checkbox" type="checkbox" />
          <span class="${completeClass}">${taskObject.text}</span>
          <button class="btn btn-secondary btn-sm">Удалить</button>
        </label>
      </li>`;

    this.elements.taskList.insertAdjacentHTML("beforeend", taskHtml);
  }
}
