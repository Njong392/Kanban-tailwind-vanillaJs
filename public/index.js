//selectors
const todoInput = document.querySelector('#todo-input');
const todoButton = document.querySelector('#todo-button');
const todoList =  document.querySelector('#todo-list');

//event listeners
todoButton.addEventListener('click', addToDo);

//functions
function addToDo(event) {
    //prevents form from submtting
    event.preventDefault();

    //creating todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('bg-white','text-black', 'flex', 'items-center','space-x-36','m-3','text-l');

    //create li tag in div tag
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);

    //creating inner div
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('flex','flex-end');


    //checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML ='<i class="fa-solid fa-check"></i>';
    completedButton.classList.add('bg-green-500','text-white','border-none','p-2');
    innerDiv.appendChild(completedButton);

    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add('bg-red-400','text-white','border-none','p-2');
    innerDiv.appendChild(trashButton);

    //append innerDiv to todoDiv
    todoDiv.appendChild(innerDiv);

    //append to list
    todoList.appendChild(todoDiv);

    //clearing the todo input value
    todoInput.value = '';
}