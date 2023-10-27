// Define UI elements
let form = document.querySelector('#task-form')
let list = document.querySelector('#task-list')
let clearBtn = document.querySelector('#clear-btn')
let taskInput = document.querySelector('#new-task')

// Define event listeners 
form.addEventListener('submit', addTask);
list.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTasks);
document.addEventListener('DOMContentLoaded', getTasks);

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
        storeInLocalStorage(taskInput.value); //for storing the new task in local storage
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


function storeInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = []
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

//load tasks from localStorage in page load 
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = []
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(task => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = "X";
        link.setAttribute('class', 'btn btn-danger')
        li.appendChild(link);
        li.setAttribute('class', 'mb-1')
        list.appendChild(li);
    })
}