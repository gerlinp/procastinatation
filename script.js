const form = document.querySelector('#form')
const input = document.querySelector('#input')
const todosUL = document.querySelector('#todos')
const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()

})

function addTodo(todo) {
    let todoText = input.value

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoEl = document.createElement('li')

        // if(todo && todo.completed) {
        //     todoEl.completed.add('completed')
        // }
        
        todosUL.innerHTML += `
        <li>
            <div class="todo-text">${todoText}</div>
            <div class="crud">
                <i class="fa-solid fa-check" onclick="completeTask(event)"></i>
                <i class="fa-solid fa-xmark" onclick="deleteTask()"></i>
            </div>
        </li>`;
    }
    input.value = ''
    updateLS()
}

    
function completeTask(event) {
    event.target.closest('li').classList.toggle('completed')
    updateLS()
}

function deleteTask() {
    event.target.closest('li').remove()
    updateLS()
}

function updateLS() {
    todosEl = document.querySelectorAll('li') 
    
    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        });        
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}
