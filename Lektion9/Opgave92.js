class StringStack{
    constructor() {
        this.stringArray = [];
    }

    pop() {
        this.stringArray.pop();
    }

    push(string){
        this.stringArray.push(string)
    }

    print(){
        console.log(this.stringArray);
    }
}

let stack = new StringStack();

stack.push("Hej")
stack.push("med")
stack.push("dig")
stack.push("din")
stack.push("steg")

stack.print();

stack.pop();
stack.pop();
stack.pop();
stack.pop();

stack.print();


