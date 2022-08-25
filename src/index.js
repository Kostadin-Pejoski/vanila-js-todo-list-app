
// imports
import "./file.css";
import clearElement from "./Logic";
import { toDo } from "./Logic";
import { closeBtnFnc } from "./Logic";

// main setup
// creating all the elements
// creating the header

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
const makeTodo=document.createElement("p");
makeTodo.textContent="New Todo";
const makeProject=document.createElement("p");
makeProject.textContent="Make New Project";
creationEl.append(makeTodo,makeProject);
const projectsList=document.createElement("div");
projectsList.classList.add("projects");

sidebar.append(creationEl);
sidebar.append(projectsList);

// placeholder Todos
for(let i=0;i<20;i++){
    let todo=document.createElement("div");
    todo.classList.add("todo");
    let placeholdeText=document.createElement("p");
    placeholdeText.classList.add("todoText");
    placeholdeText.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, beatae adipisci! Fuga magnam accusantium optio recusandae illo asperiores, fugiat eum!";
    let placeholderTitle=document.createElement("p");
    placeholderTitle.classList.add("todoTitle");
    placeholderTitle.textContent="PlaceHolderTitle";
    let placeholderPriorty=document.createElement("div");
    placeholderPriorty.classList.add("todoPriorty");
    for(let i=0;i<3;i++){
        let text="";
        let className="";
        let el=document.createElement("p");
        if(i==0){
            text="Low";
            className="green";
        }
        else if(i==1){
            text="Medium";
            className="yellow";

        }
        else{
            text="High";
            className="red";
        }
        el.classList.add(className);
        el.classList.add("priortyEl");
        el.textContent=text;
        placeholderPriorty.append(el)
    }
    const closeBtn=document.createElement("p");
    closeBtn.textContent="X";
    closeBtn.classList.add("closeBtn");
    todo.append(placeholderTitle,closeBtn,placeholdeText,placeholderPriorty);
    main.append(todo);
}


sidebar.classList.add("sidebar");
main.classList.add("main");

document.body.append(header,sidebar,main);

const closeBtns=document.querySelectorAll(".closeBtn");
closeBtns.forEach(closeBtn=>closeBtn.addEventListener("click",closeBtnFnc));

console.clear()