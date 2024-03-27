document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('.main button');
    const inputField = document.querySelector('.main input');
    const todoList = document.querySelector('.list ul');

    function addTodo() {
        const title = inputField.value.trim();
        if (title !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = title;

            const closeBtn = document.createElement('span');
            closeBtn.textContent = 'x';
            closeBtn.classList.add('close');

            listItem.appendChild(closeBtn);
            todoList.appendChild(listItem);
            inputField.value = ''; 
        }
    }

    function removeTodo(event) {
        if (event.target.classList.contains('close')) {
            const listItem = event.target.parentElement;
            todoList.removeChild(listItem);
        }
    }

    addButton.addEventListener('click', addTodo);
    todoList.addEventListener('click', removeTodo);
});
