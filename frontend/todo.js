document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('txt1');
    const submitButton = document.getElementById('btn1');
    const todoList = document.getElementById('todo-list');

    submitButton.addEventListener('click', () => {
        const inputValue = inputField.value.trim(); 
        if (inputValue !== '') {
            addItemToList(inputValue); // Corrected function name
            inputField.value = ''; // Clear the input field after adding
        }
    });

    function addItemToList(item) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = item;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    }
});
