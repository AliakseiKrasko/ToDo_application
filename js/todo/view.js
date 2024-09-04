export default class view {
  constructor() {}

  elements = {
    input: document.getElementById("newTask"),
    form: document.getElementById("form"),
    taskList: document.getElementById("taskList"),
  };

  renderTasks(taskObject) {
    const taskHtml = `
      <li class="todo-item">
        <label class="todo-item-label">
          <input class="checkbox" type="checkbox" />
          <span>${taskObject.text}</span>
          <button class="btn btn-secondary btn-sm">Удалить</button>
        </label>
      </li>`;

    this.elements.taskList.insertAdjacentHTML("beforeend", taskHtml);
  }
}
