/* eslint-disable new-cap */
// imports
import './file.css'
import clearElement, { Project, toDo, closeBtnFnc } from './Logic'

console.clear()

// main setup
// creating all the elements
// creating the header

export let projects = JSON.parse(localStorage.getItem('storageProjects')) || []

projects = projects.map(project => {
  const propperProject = new Project(project.title)
  for (let i = 0; i < project.todos.length; i++) {
    const propperToDo = new toDo(project.todos[i].title, '09/09/2003', project.todos[i].priorty, project.todos[i].text)
    propperProject.todos.push(propperToDo)
    propperToDo.parentArr = propperProject.todos
  }
  propperProject.isLoaded = project.isLoaded
  console.log(propperProject.todos[0] instanceof toDo)
  return propperProject
})

console.log(projects)

const header = document.createElement('div')
const sidebar = document.createElement('div')
export const main = document.createElement('div')
const headerh1 = document.createElement('h1')
const wrapper = document.createElement('div')
wrapper.id = 'wraper'
const madeBy = document.createElement('p')
madeBy.textContent = 'Made by Kosta'
headerh1.textContent = 'Todo List App'
wrapper.append(headerh1)
wrapper.append(madeBy)

header.append(wrapper)
header.classList.add('header')
// creating the sidebar
const creationEl = document.createElement('div')
creationEl.classList.add('creationEl')
export const grid = document.createElement('div')
grid.classList.add('grid')
const projectsList = document.createElement('div')
projectsList.classList.add('projects')
const currentProjectTitle = document.createElement('h1')
currentProjectTitle.classList.add('currentProjectTitle')
main.append(currentProjectTitle, grid)
sidebar.append(creationEl, projectsList)

sidebar.classList.add('sidebar')
main.classList.add('main')

document.body.append(header, sidebar, main)

const closeBtns = document.querySelectorAll('.closeBtn')
closeBtns.forEach(closeBtn => closeBtn.addEventListener('click', closeBtnFnc))
closeBtns.forEach(closeBtn => closeBtn.addEventListener('click', updateLocalStorage))

function generateTodoForm () {
  if (projects.length === 0) {
    alert("you can't make todos without parent projects")
    generateOptions()
    return
  }
  clearElement(creationEl)
  const form = document.createElement('div')
  form.classList.add('form')
  const todoTitleInput = document.createElement('input')
  todoTitleInput.name = 'todoTitle'
  todoTitleInput.placeholder = 'The title of your todo'
  const todoTextInput = document.createElement('input')
  todoTextInput.placeholder = 'Insert what you have to do'
  todoTextInput.name = 'todoText'
  const select = document.createElement('select')
  select.id = 'select'
  select.textContent = 'Select the priorty of the todo'
  select.name = 'todoPriorty'
  const labelForSelect = document.createElement('label')
  labelForSelect.for = 'select'
  labelForSelect.textContent = 'Priority:'
  const low = document.createElement('option')
  low.textContent = 'low'
  low.value = 'low'
  const medium = document.createElement('option')
  medium.value = 'medium'
  medium.textContent = 'medium'
  const high = document.createElement('option')
  high.value = 'high'
  high.textContent = 'high'
  const createBtn = document.createElement('button')
  createBtn.textContent = 'create new Todo'
  createBtn.addEventListener('click', () => {
    if (todoTitleInput.value === '' || todoTextInput.value === '') {
      alert('make sure to fill all the fields')
      generateOptions()
      return
    }
    const todo = new toDo(todoTitleInput.value, '09/09/2003', select.value, todoTextInput.value)
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].isLoaded) {
        todo.parentArr = projects[i].todos
        projects[i].todos.push(todo)
      }
    }

    todo.load()
    generateOptions()
    updateLocalStorage()
  })

  select.append(low, medium, high)

  form.append(todoTitleInput, todoTextInput, labelForSelect, select, createBtn)

  creationEl.append(form)
}

function loadProjectForm () {
  clearElement(creationEl)
  const form = document.createElement('div')
  form.classList.add('form')
  const projectTitleInput = document.createElement('input')
  projectTitleInput.placeholder = "Enter the project's name"
  const projectBtn = document.createElement('button')
  projectBtn.textContent = 'Create new Project'

  form.append(projectTitleInput, projectBtn)
  creationEl.append(form)
  projectBtn.addEventListener('click', () => {
    if (projectTitleInput.value === '') {
      alert("you can't have empty title")
      generateOptions()
      return
    }
    currentProjectTitle.textContent = projectTitleInput.value
    const newProject = new Project(projectTitleInput.value)
    projects.forEach(project => {
      if (project.isLoaded) {
        project.isLoaded = false
      }
    })
    newProject.isLoaded = true
    const project = document.createElement('div')
    const p = document.createElement('p')
    const deleteProject = document.createElement('p')
    deleteProject.textContent = 'X'
    // deleting from Dom
    deleteProject.addEventListener('click', deleteThisProject)
    console.log(newProject instanceof Project)
    projects.push(newProject)
    // deleting from array
    deleteProject.addEventListener('click', () => {
      for (let i = 0; i < projects.length; i++) {
        if (currentProjectTitle.textContent === newProject.title) {
          currentProjectTitle.textContent = ''
          clearElement(grid)
        }
        if (projects[i] === newProject) {
          projects.splice(i, 1)
        }
      }
    })
    project.classList.add('project')
    project.append(p, deleteProject)
    p.textContent = newProject.title
    p.addEventListener('click', () => {
      const currentTitle = p.textContent
      currentProjectTitle.textContent = currentTitle
      for (let i = 0; i < projects.length; i++) {
        console.log(projects)
        if (projects[i].title !== currentTitle && projects[i].isLoaded) {
          projects[i].isLoaded = false
        } else if (projects[i].title === currentTitle) {
          projects[i].isLoaded = true
          projects[i].loadTodos()
        }
      }
    })
    projectsList.append(project)
    console.log(deleteProject, p)
    newProject.deleteButton = deleteProject.innerHTML
    newProject.domParagraph = p.innerHTML
    console.log(newProject.deleteButton)
    console.log(newProject.domParagraph)
    newProject.loadTodos()
    generateOptions()
    updateLocalStorage()
  })
}

function generateOptions () {
  clearElement(creationEl)
  const makeTodo = document.createElement('p')
  makeTodo.textContent = 'New Todo'
  makeTodo.addEventListener('click', generateTodoForm)
  const makeProject = document.createElement('p')
  makeProject.textContent = 'Make New Project'
  makeProject.addEventListener('click', loadProjectForm)
  creationEl.append(makeTodo, makeProject)
}

generateOptions()

function deleteThisProject () {
  this.parentElement.remove()
}

// eslint-disable-next-line no-unused-vars
const getCircularReplacer = () => {
  const seen = new WeakSet()
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return
      }
      seen.add(value)
    }
    return value
  }
}

function loadSideBar () {
  if (projects.length === 0) {
    return
  }
  for (let i = 0; i < projects.length; i++) {
    console.log(projects[0] instanceof Project)
    const projectDiv = document.createElement('div')
    projectDiv.classList.add('project')
    const projectTitle = document.createElement('p')
    projectTitle.textContent = projects[i].title
    const closeBtn = document.createElement('p')
    closeBtn.textContent = 'X'
    projectTitle.addEventListener('click', () => {
      for (let j = 0; j < projects.length; j++) {
        if (projects[j].title !== projectTitle.textContent && projects[i].isLoaded) {
          projects[j].isLoaded = false
          continue
        } else if (projects[i].title === projectTitle.textContent) {
          projects[j].isLoaded = true
          currentProjectTitle.textContent = projectTitle.textContent
          clearElement(grid)
          projects[j].loadTodos()
        }
      }
    })
    closeBtn.addEventListener('click', deleteThisProject)
    closeBtn.addEventListener('click', () => {
      currentProjectTitle.textContent = ''
      clearElement(grid)
      for (let j = 0; j < projects.length; j++) {
        if (projects[j].title === projectTitle.textContent) {
          projects.splice(j, 1)
          updateLocalStorage()
        }
      }
    })

    projectDiv.append(projectTitle, closeBtn)
    projectsList.append(projectDiv)
  }
}

loadSideBar()

export function updateLocalStorage () {
  localStorage.setItem('storageProjects', JSON.stringify(projects, getCircularReplacer()))
}
