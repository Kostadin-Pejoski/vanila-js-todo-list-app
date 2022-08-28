export default function clearElement(element){
    element.innerHTML="";
}

import { grid } from ".";
import { projects } from ".";

export class toDo{
    constructor(title,dueDate,priorty,text){
        this.title=title;
        this.dueDate=dueDate;
        this.priorty=priorty;
        this.actualElement="";
        this.text=text;
        this.parentArr=[];
    }

    deleteYourself(){
        console.log(this.parentArr);
        for(let i=0;i<this.parentArr.length;i++){

            if(this.parentArr[i]==this){
                this.parentArr.splice(i,1);
            }
        }
    }

    changePriorty(newPriorty){
        this.priorty=newPriorty;
    }

    load(){
        console.log(this);
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
        closeBtn.addEventListener("click",()=>{
            this.deleteYourself();
        });

        todo.append(placeholderTitle,closeBtn,placeholdeText,placeholderPriorty);

        grid.append(todo);

        const priortyEls=document.querySelectorAll(".priortyEl");
        for(let i=0;i<priortyEls.length;i++){
            priortyEls[i].addEventListener("click",swtichClasses);
            priortyEls[i].addEventListener("click",()=>{
                if(priortyEls[i].id=="0"){
                    this.changePriorty("low");

                }
                else if(priortyEls[i].id=="1"){
                    this.changePriorty("medium");

                }
                else if(priortyEls[i].id=="2"){
                    this.changePriorty("high");
                }
            })
        }
    }
};


export class Project{
    constructor(title) {
        this.title=title;
        this.todos=[];
        this.isLoaded=false;
    }
    loadTodos(){
        clearElement(grid);
        if(this.isLoaded){
            this.todos.forEach(todo=>{
                todo.load();
            })
        }
        else{
            return;
        }
    }
}

export  function closeBtnFnc(){
    this.parentElement.remove();
}

function swtichClasses(){
    if(this.classList.contains("red") || this.classList.contains("yellow") || this.classList.contains("green")){
        return;
    }
    else if(this.id=="0"){
        this.classList.add("green");
        let second=this.nextElementSibling;
        second.classList.remove("yellow");

        let third=second.nextElementSibling;
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