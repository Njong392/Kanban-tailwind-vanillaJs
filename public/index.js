

//selectors
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const cancel = document.querySelector('#cancel');
const section1 = document.querySelector('#section1');
const selector = document.querySelector('#selector');
const date = document.querySelector('#date');
const dateP = document.querySelector('#dateP');

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
    if(selector.selectedIndex === 0){
        priorityP.classList.add('border-2', 'border-red-600', 'rounded-sm', 'px-2', 'bg-red-200');
        priority.classList.add('text-red-600');
    }
    else if(selector.selectedIndex === 1){
        priorityP.classList.add('border-2', 'border-green-600', 'rounded-sm', 'px-2', 'bg-green-200');
        priority.classList.add('text-green-600');
        
    }
    else{
        priorityP.classList.add('border-2', 'border-yellow-600', 'rounded-sm', 'px-2', 'bg-yellow-200');
        priority.classList.add('text-yellow-600');

    }
    priority.innerText = selector.value;
    priorityP.appendChild(priority);

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('flex');
    dateP.classList.add('mr-2');
    dateP.innerText = date.value;
    

   
   
    

    }
    else{
        console.log('enter a task');
    }




}