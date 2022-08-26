export default function clearElement(element){
    element.innerHTML="";
}

import { grid } from ".";

let todoTitleInput=document.querySelector(`[name="todoTitle"]`) || null;
let todoTextInput= document.querySelector(`[name="todoText"]`) || null;
let todoPriortyInput=document.querySelector(`[name="todoPriorty"]`) || null;

export class toDo{
    constructor(title,dueDate,priorty,text){
        this.title=title;
        this.dueDate=dueDate;
        this.priorty=priorty;
        this.actualElement="";
        this.text=text;
    }
    load(){
        let todo=document.createElement("div");
        todo.classList.add("todo");
        let placeholdeText=document.createElement("p");
        placeholdeText.classList.add("todoText");
        placeholdeText.textContent=this.text;
        let placeholderTitle=document.createElement("p");
        placeholderTitle.classList.add("todoTitle");
        placeholderTitle.textContent=this.title;
        let placeholderPriorty=document.createElement("div");
        placeholderPriorty.classList.add("todoPriorty");

        for(let i=0;i<3;i++){
            let text="";
            let className="";
            let el=document.createElement("p");
            if(i==0){
                el.id="0";
                text="low";
                className="green";
            }
            else if(i==1){
                el.id="1";
                text="medium";
                className="yellow";
    
            }
            else{
                el.id="2";
                text="high";
                className="red";
            }
            
            if(this.priorty==text){
                switch(this.priorty){
                    case "low":{
                        el.classList.add("green");
                        break;
                    }
                    case "medium":{
                        el.classList.add("yellow");
                        break;
                    }
                    case "high":{
                        el.classList.add("red");
                        break;
                    }
                }
            }


            el.classList.add("priortyEl");
            el.textContent=text;
            placeholderPriorty.append(el);
        }

        const closeBtn=document.createElement("p");
        closeBtn.textContent="X";
        closeBtn.classList.add("closeBtn");
        closeBtn.addEventListener("click",closeBtnFnc);

        todo.append(placeholderTitle,closeBtn,placeholdeText,placeholderPriorty);

        grid.append(todo);
        
        const priortyEls=document.querySelectorAll(".priortyEl");
        priortyEls.forEach(El=>{
            El.addEventListener("click",swtichClasses);
        })
    }
};


export class Project{
    constructor(title) {
        this.title=title;
        this.todos=[];
        this.isLoaded=false;
    }
    loadTodos(){
        this.todos.forEach(todo=>{
            todo.load();
        })
    }
}

export  function closeBtnFnc(){
    this.parentElement.remove();
}

function swtichClasses(){
    if(this.classList.contains("red") || this.classList.contains("yellow") || this.classList.contains("green")){
        console.log("ok");
        return;
    }
    else if(this.id=="0"){
        this.classList.add("green");
        let second=this.nextElementSibling;
        second.classList.remove("yellow");

        let third=second.nextElementSibling;
        console.log(third);
        third.classList.remove("red");
    }

    else if(this.id=="1"){ 
        this.classList.add("yellow");
        let first=this.previousElementSibling;
        first.classList.remove("green");
        let third=this.nextElementSibling;
        third.classList.remove("red");
    }
    else{
        this.classList.add("red");
        let second=this.previousElementSibling;
        second.classList.remove("yellow");
        let first=second.previousElementSibling;
        first.classList.remove("green");
        
    }
}