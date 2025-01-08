const input = document.querySelector('.inputText')
const ul = document.querySelector('ul')
let liElements = document.querySelectorAll('li')


const searchTask = function(e){
    const searchText = e.target.value.toLowerCase()
    let tasks = [...liElements]
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
    ul.textContent = ''
    tasks.forEach(li => ul.appendChild(li))
}

input.addEventListener('input', searchTask)