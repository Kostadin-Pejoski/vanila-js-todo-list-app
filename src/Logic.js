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
};


