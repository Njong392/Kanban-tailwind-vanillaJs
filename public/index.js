/*
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
*/

//selectors
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const cancel = document.querySelector('#cancel');
const section1 = document.querySelector('#section1');
const selector = document.querySelector('#selector');

//event listeners
submit.addEventListener('click', addToDo);

//functions
function addToDo(event) {
    event.preventDefault();

    if(input.value != ''){
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('rounded-sm', 'shadow-lg', 'p-4', 'border-2', 'transform', 'hover:scale-105', 'mt-3');
    section1.appendChild(outerDiv);

    const flexDiv = document.createElement('div');
    flexDiv.classList.add('flex');
    outerDiv.appendChild(flexDiv);

    const checkButton = document.createElement('div');
    checkButton.classList.add('rounded-full', 'w-4', 'h-4', 'border-2', 'mr-4', 'mt-1', 'border-gray-500');
    flexDiv.appendChild(checkButton);

    const toDoDiv = document.createElement('div')
    toDoDiv.classList.add('w-full');
    flexDiv.appendChild(toDoDiv);

    const toDo = document.createElement('p');
    toDo.innerText = input.value;
    toDoDiv.appendChild(toDo);

    const choiceDiv = document.createElement('div');
    choiceDiv.classList.add('flex', 'justify-between', 'mt-2');
    toDoDiv.appendChild(choiceDiv);

    const priorityP = document.createElement('p');
    choiceDiv.appendChild(priorityP);

    const priority = document.createElement('p');
    if(selector.value = "High"){
        priorityP.classList.add('border-2', 'border-red-600', 'rounded-sm', 'px-2', 'bg-red-200');
        priority.classList.add('text-red-600');
        
    }
    else if(selector.value = "Medium"){
        priorityP.classList.add('border-2', 'border-green-600', 'rounded-sm', 'px-2', 'bg-green-200');
        priority.classList.add('text-green-600');
        
    }
    else{
        priorityP.classList.add('border-2', 'border-yellow-600', 'rounded-sm', 'px-2', 'bg-yellow-200');
        priority.classList.add('text-yellow-600');

    }
    priority.innerText = selector.value;
    priorityP.appendChild(priority);

   
    

    }
    else{
        console.log('enter a task');
    }




}