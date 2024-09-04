import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View(model.tasks);


view.elements.form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newTask = model.addTask(view.elements.input.value);

    view.renderTasks(newTask);
    view.clearInput();
    
});


