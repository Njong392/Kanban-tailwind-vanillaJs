//selectors
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const cancel = document.querySelector('#cancel');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');

const selector = document.querySelector('#selector');
const date = document.querySelector('#date');
const selector2 =  document.querySelector('#selector2');


//event listeners
submit.addEventListener('click', addToDo);

//functions
function addToDo(event) {
    event.preventDefault();

    if(input.value != ''){
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('rounded-sm', 'shadow-lg', 'p-4', 'border-2', 'transform', 'hover:scale-105', 'mt-3');
   

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
    const dateP = document.createElement('p');
    dateP.classList.add('mr-2');
    dateP.innerText = date.value;
    dateDiv.appendChild(dateP);
    choiceDiv.appendChild(dateDiv);

    const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svg1.setAttribute("fill","none");
    svg1.setAttribute('viewbox', '0 0 24 24');
    svg1.setAttribute('class','h-6 w-6 mr-2 text-gray-500');
    svg1.setAttribute('stroke','currentColor');
    svg1.setAttribute('stroke-width','2');

    path1.setAttribute('d', 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16');
    path1.setAttribute('stroke-linecap', 'round');
    path1.setAttribute('stroke-linejoin', 'round');

    svg2.setAttribute("fill","none");
    svg2.setAttribute('viewbox', '0 0 24 24');
    svg2.setAttribute('class','h-6 w-6 mr-2 text-gray-500');
    svg2.setAttribute('stroke','currentColor');
    svg2.setAttribute('stroke-width','2');

    path2.setAttribute('d', 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z');
    path2.setAttribute('stroke-linecap', 'round');
    path2.setAttribute('stroke-linejoin', 'round');

    svg1.appendChild(path1);
    svg2.appendChild(path2);
    dateDiv.appendChild(svg1);
    dateDiv.appendChild(svg2);

    if(selector2.selectedIndex === 0){
        section1.appendChild(outerDiv);
    }
    else if(selector2.selectedIndex === 1){
        section2.appendChild(outerDiv);
    }
    else{
        section3.appendChild(outerDiv);
    }



    

    }
    else{
        console.log('enter a task');
    }




}