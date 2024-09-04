import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View(model.tasks);

// Добавление задачи
view.elements.form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newTask = model.addTask(view.elements.input.value);

    view.renderTasks(newTask);
    view.clearInput();
    
});

// Нажали на чек
view.elements.taskList.addEventListener('click', function(e) {
    console.log(e.target);
    // Проверяем клик по чекбоксу
    if (e.target.getAttribute('type') === 'checkbox') {
        
    }
});


