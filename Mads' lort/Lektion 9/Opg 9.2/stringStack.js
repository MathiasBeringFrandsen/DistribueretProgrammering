class stringStack {
    #stack = [];
    push(s){
        if (typeof s === 'string') {
            this.#stack.push(s)
        }
    }

    pop(){
        return this.#stack.pop();
    }
}

const ss = new stringStack();
ss.push("Haj");
ss.push("Med");
ss.push("Dej");
ss.push(2);

console.log(ss.pop());
console.log(ss.pop());
console.log(ss.pop());