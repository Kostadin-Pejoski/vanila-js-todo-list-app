import { grid, updateLocalStorage } from '.'

export default function clearElement (element) {
  element.innerHTML = ''
}

export class toDo {
  constructor (title, dueDate, priorty, text) {
    this.title = title
    this.dueDate = dueDate
    this.priorty = priorty
    this.actualElement = ''
    this.text = text
    this.parentArr = []
    this.dateCreated = new Date().toLocaleDateString()
  }

  deleteYourself () {
    console.log(this.parentArr)
    for (let i = 0; i < this.parentArr.length; i++) {
      if (this.parentArr[i] === this) {
        this.parentArr.splice(i, 1)
      }
    }
  }

  changePriorty (newPriorty) {
    this.priorty = newPriorty
  }

  load () {
    const todo = document.createElement('div')
    todo.classList.add('todo')
    const placeholdeText = document.createElement('p')
    placeholdeText.classList.add('todoText')
    placeholdeText.textContent = 'Task: ' + this.text
    const placeholderTitle = document.createElement('p')
    placeholderTitle.classList.add('todoTitle')
    placeholderTitle.textContent = 'Title: ' + this.title
    const placeholderPriorty = document.createElement('div')
    placeholderPriorty.classList.add('todoPriorty')
    const dateEl = document.createElement('p')
    dateEl.classList.add('dateCreated')
    dateEl.textContent = 'Date created:' + this.dateCreated
    const priortyText = document.createElement('p')
    priortyText.textContent = 'Priority'
    const priorityWrapper = document.createElement('div')
    priorityWrapper.appendChild(priortyText)
    priorityWrapper.appendChild(placeholderPriorty)
    priorityWrapper.classList.add('priorirtyWrapper')
    for (let i = 0; i < 3; i++) {
      let text = ''
      let className = ''
      const el = document.createElement('p')
      if (i === 0) {
        el.id = '0'
        text = 'low'
        className = 'green'
      } else if (i === 1) {
        el.id = '1'
        text = 'medium'
        className = 'yellow'
      } else {
        el.id = '2'
        text = 'high'
        // eslint-disable-next-line no-unused-vars
        className = 'red'
      }

      if (this.priorty === text) {
        switch (this.priorty) {
          case 'low':{
            el.classList.add('green')
            break
          }
          case 'medium':{
            el.classList.add('yellow')
            break
          }
          case 'high':{
            el.classList.add('red')
            break
          }
        }
      }

      el.classList.add('priortyEl')
      el.textContent = text
      placeholderPriorty.append(el)
    }

    const editBtn = document.createElement('button')
    editBtn.classList.add('editBtn')
    editBtn.textContent = 'Edit'
    const closeBtn = document.createElement('p')
    closeBtn.textContent = 'X'
    closeBtn.classList.add('closeBtn')
    closeBtn.addEventListener('click', () => {
      this.deleteYourself()
      updateLocalStorage()
    })

    editBtn.addEventListener('click', () => {
      let newTitleInput = document.createElement('input')
      let newTextInput = document.createElement('input')
      if (editBtn.textContent === 'Edit') {
        editBtn.textContent = 'Save'
        newTitleInput.classList.add('titlePos')
        newTitleInput.placeholder = 'New title'
        newTextInput.classList.add('textPos')
        newTextInput.placeholder = 'New text'
        todo.removeChild(placeholderTitle)
        todo.removeChild(placeholdeText)
        todo.appendChild(newTitleInput)
        todo.appendChild(newTextInput)
      } else {
        const inputs = todo.querySelectorAll('input')
        if (inputs[0].value === '' || inputs[1].value === '') {
          alert('please insert new title or new text for this todo')
          return
        }
        newTitleInput = inputs[0]
        newTextInput = inputs[1]
        editBtn.textContent = 'Edit'
        this.text = newTextInput.value
        this.title = newTitleInput.value
        placeholdeText.textContent = 'Task: ' + this.text
        placeholderTitle.textContent = 'Ttile: ' + this.title
        newTextInput.remove()
        newTitleInput.remove()
        todo.appendChild(placeholdeText)
        todo.appendChild(placeholderTitle)
        updateLocalStorage()
      }
    })

    closeBtn.addEventListener('click', closeBtnFnc)

    todo.append(placeholderTitle, closeBtn, placeholdeText, priorityWrapper, editBtn, dateEl)

    grid.append(todo)

    const priortyEls = document.querySelectorAll('.priortyEl')
    for (let i = 0; i < priortyEls.length; i++) {
      priortyEls[i].addEventListener('click', swtichClasses)
      priortyEls[i].addEventListener('click', () => {
        if (priortyEls[i].id === '0') {
          this.changePriorty('low')
          updateLocalStorage()
        } else if (priortyEls[i].id === '1') {
          this.changePriorty('medium')
          updateLocalStorage()
        } else if (priortyEls[i].id === '2') {
          this.changePriorty('high')
          updateLocalStorage()
        }
      })
    }
  }
}

export class Project {
  constructor (title) {
    this.title = title
    this.todos = []
    this.isLoaded = false
  }

  loadTodos () {
    clearElement(grid)
    if (this.isLoaded) {
      this.todos.forEach(todo => {
        todo.load()
      })
    }
  }
}

export function closeBtnFnc () {
  this.parentElement.remove()
}

function swtichClasses () {
  if (this.classList.contains('red') || this.classList.contains('yellow') || this.classList.contains('green')) {
    // eslint-disable-next-line no-useless-return
    return
  } else if (this.id === '0') {
    this.classList.add('green')
    const second = this.nextElementSibling
    second.classList.remove('yellow')

    const third = second.nextElementSibling
    third.classList.remove('red')
  } else if (this.id === '1') {
    this.classList.add('yellow')
    const first = this.previousElementSibling
    first.classList.remove('green')
    const third = this.nextElementSibling
    third.classList.remove('red')
  } else {
    this.classList.add('red')
    const second = this.previousElementSibling
    second.classList.remove('yellow')
    const first = second.previousElementSibling
    first.classList.remove('green')
  }
}
