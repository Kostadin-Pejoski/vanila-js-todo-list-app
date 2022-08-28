
// imports
import "./file.css";
import clearElement, { Project } from "./Logic";
import { toDo } from "./Logic";
import { closeBtnFnc } from "./Logic";

// main setup
// creating all the elements
// creating the header

export let projects=[];

const header=document.createElement("div");
const sidebar=document.createElement("div");
export const main=document.createElement("div");
const headerh1=document.createElement("h1");
const wrapper=document.createElement("div");
wrapper.id="wraper";
const madeBy=document.createElement("p");
madeBy.textContent="Made by Kosta Bratce";
headerh1.textContent="Todo List App";
wrapper.append(headerh1);
wrapper.append(madeBy);

header.append(wrapper);
header.classList.add("header");
// creating the sidebar
const creationEl=document.createElement("div");
creationEl.classList.add("creationEl");
export const grid=document.createElement("div");
grid.classList.add("grid");
const projectsList=document.createElement("div");
projectsList.classList.add("projects");
const currentProjectTitle=document.createElement("h1");
currentProjectTitle.classList.add("currentProjectTitle");
main.append(currentProjectTitle,grid);
sidebar.append(creationEl,projectsList);


// placeholder Todos
// for(let i=0;i<5;i++){
//     let todo=document.createElement("div");
//     todo.classList.add("todo");
//     let placeholdeText=document.createElement("p");
//     placeholdeText.classList.add("todoText");
//     placeholdeText.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, beatae adipisci! Fuga magnam accusantium optio recusandae illo asperiores, fugiat eum!";
//     let placeholderTitle=document.createElement("p");
//     placeholderTitle.classList.add("todoTitle");
//     placeholderTitle.textContent="PlaceHolderTitle";
//     let placeholderPriorty=document.createElement("div");
//     placeholderPriorty.classList.add("todoPriorty");
//     for(let i=0;i<3;i++){
//         let text="";
//         let className="";
//         let el=document.createElement("p");
//         if(i==0){
//             text="low";
//             className="green";
//         }
//         else if(i==1){
//             text="Medium";
//             className="yellow";

//         }
//         else{
//             text="High";
//             className="red";
//         }
//         el.classList.add(className);
//         el.classList.add("priortyEl");
//         el.textContent=text;
//         placeholderPriorty.append(el);
//     }
//     const closeBtn=document.createElement("p");
//     closeBtn.textContent="X";
//     closeBtn.classList.add("closeBtn");
//     todo.append(placeholderTitle,closeBtn,placeholdeText,placeholderPriorty);
//     grid.append(todo);
// }


sidebar.classList.add("sidebar");
main.classList.add("main");

document.body.append(header,sidebar,main);

const closeBtns=document.querySelectorAll(".closeBtn");
closeBtns.forEach(closeBtn=>closeBtn.addEventListener("click",closeBtnFnc));

console.clear();

function generateTodoForm(){
    clearElement(creationEl);
    const form=document.createElement("div");
    form.classList.add("form");
    const todoTitleInput=document.createElement("input");
    todoTitleInput.name="todoTitle";
    todoTitleInput.placeholder="The title of your todo";
    const todoTextInput=document.createElement("input");
    todoTextInput.placeholder="Insert what you have to do";
    todoTextInput.name="todoText";
    const select=document.createElement("select");
    select.id="select";
    select.textContent="Select the priorty of the todo";
    select.name="todoPriorty";
    const labelForSelect=document.createElement("label");
    labelForSelect.for="select";
    labelForSelect.textContent="Priority:"
    const low=document.createElement("option");
    low.textContent="low";
    low.value="low";
    const medium=document.createElement("option");
    medium.value="medium";
    medium.textContent="medium";
    const high=document.createElement("option");
    high.value="high";
    high.textContent="high";
    const createBtn=document.createElement("button");
    createBtn.textContent="create new Todo";
    createBtn.addEventListener("click",()=>{
        if(todoTitleInput.value=="" || todoTextInput.value==""){
            alert("make sure to fill all the fields");
            generateOptions();
            return;
        }
        let todo = new toDo(todoTitleInput.value,"09/09/2003",select.value,todoTextInput.value);
        for(let i=0;i<projects.length;i++){
            if(projects[i].isLoaded){
                todo.parentArr=projects[i].todos;
                projects[i].todos.push(todo);
            }
        }
        
        todo.load();
        generateOptions();
    });

    select.append(low,medium,high);

    form.append(todoTitleInput,todoTextInput,labelForSelect,select,createBtn);

    creationEl.append(form);


}

function loadProjectForm(){
    clearElement(creationEl);
    const form=document.createElement("div");
    form.classList.add("form");
    const projectTitleInput=document.createElement("input");
    projectTitleInput.placeholder="Enter the project's name";
    const projectBtn=document.createElement("button");
    projectBtn.textContent="Create new Project";

    form.append(projectTitleInput,projectBtn);
    creationEl.append(form);
    projectBtn.addEventListener("click",()=>{
        if(projectTitleInput.value==""){
            alert("you can't have empty title");
            generateOptions();
            return;
        }
        currentProjectTitle.textContent=projectTitleInput.value;
        let newProject =new Project(projectTitleInput.value);
        projects.forEach(project=>{
            if(project.isLoaded){
                project.isLoaded=false;
            }
        })
        newProject.isLoaded=true;
        let project=document.createElement("div");
        let p=document.createElement("p");
        let deleteProject=document.createElement("p");
        deleteProject.textContent="X";
        // deleting from Dom
        deleteProject.addEventListener("click",deleteThisProject);
        projects.push(newProject);
        // deleting from array
        deleteProject.addEventListener("click",()=>{
            for(let i=0;i<projects.length;i++){
                if(currentProjectTitle.textContent==newProject.title){
                    currentProjectTitle.textContent="";
                    clearElement(grid);
                }
                if(projects[i]==newProject){
                    projects.splice(i,1);
                }
            }
        });
        project.classList.add("project");
        project.append(p,deleteProject);
        p.textContent=newProject.title;
        p.addEventListener("click",()=>{
            let currentTitle=p.textContent;
            currentProjectTitle.textContent=currentTitle;
            for(let i=0;i<projects.length;i++){
                console.log(projects)
                if(projects[i].title!=currentTitle && projects[i].isLoaded){
                    projects[i].isLoaded=false;

                }
                else if(projects[i].title==currentTitle){
                    projects[i].isLoaded=true;
                    projects[i].loadTodos();

                }
            }
        })
        projectsList.append(project);
        newProject.loadTodos();
        generateOptions();
    });
}

function generateOptions(){
    clearElement(creationEl);
    const makeTodo=document.createElement("p");
    makeTodo.textContent="New Todo";
    makeTodo.addEventListener("click",generateTodoForm);
    const makeProject=document.createElement("p");
    makeProject.textContent="Make New Project";
    makeProject.addEventListener("click",loadProjectForm);
    creationEl.append(makeTodo,makeProject);
}

generateOptions();

function deleteThisProject(){
    this.parentElement.remove();

}


