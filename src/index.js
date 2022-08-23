
// imports
import "./file.css";
import clearElement from "./Logic";
import { toDo } from "./Logic";


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
madeBy.textContent="Made by Chicho Banche";
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



sidebar.classList.add("sidebar");
main.classList.add("main");

document.body.append(header,sidebar,main);
