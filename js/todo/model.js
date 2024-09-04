export default class module {
    constructor () {
        this.tasks = [];
        this.loadFromLocalStorage();
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('tasks');
        if (data) {
            this.tasks = JSON.parse(data);
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    addTask (text) {
        const newTask = {
            status: 'active',
            text: text,
        };

        this.tasks.push(newTask);
        this.saveToLocalStorage();
    }

    doneTask(task) {
        task.status = 'done';
        this.saveToLocalStorage();
    }

    revoveTask(task) {
        const index = this.tasks.indexOf(task);
        
        this.tasks.splice(index, 1);
        this.saveToLocalStorage();
    }
}