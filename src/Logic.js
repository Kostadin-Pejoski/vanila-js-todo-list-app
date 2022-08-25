export default function clearElement(element){
    element.innerHTML="";
}

export class toDo{
    constructor(title,dueDate,priorty){
        this.title=title;
        this.dueDate=dueDate;
        this.priorty=priorty;
        this.actualElement="";
    }
    load(){
        return;
    }
};


export class Project{
    constructor(title) {
        this.title=title;
        this.todos=[];
    }
    loadTodos(){
        this.todos.forEach(todo=>{
            todo.load();
        })
    }
}

export  function closeBtnFnc(){
    console.log(this)
    this.parentElement.remove();
}