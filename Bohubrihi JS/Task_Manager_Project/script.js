// Define UI elements
let form = document.querySelector('#task-form')
let list = document.querySelector('#task-list')
let clearBtn = document.querySelector('#clear-btn')
let taskInput = document.querySelector('#new-task')

// Define event listeners 
form.addEventListener('submit', addTask);
list.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTasks);

// Define functions 
function addTask(e){
    if(taskInput.value === ''){
        console.log("give an input");
    }
    else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = "X";
        link.setAttribute('class', 'btn btn-danger')
        li.appendChild(link);
        li.setAttribute('class', 'mb-1')
        list.appendChild(li);
        taskInput.value = "";
    }
    e.preventDefault();
}

function removeTask(e){
    if(e.target.hasAttribute('href')){
        if(confirm("Are you sure?")){
            let el = e.target.parentElement;
            el.remove();
        }
    }
}

function clearTasks(e){
    list.innerHTML = "";
}