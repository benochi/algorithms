/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let node = new Node(val);

    if(!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first; //assign current first
      this.first = node; //push first to second
      this.first.next = temp; //point to second from first.
    }
    //increase stack size.
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(!this.first){
      throw new Error('Stack is already empty.')
    }

    let temp = this.first;
    //handle edge case of 1 
    if (this.first == this.last) { 
      this.last = null;
    }
    //make 2nd node first. 
    this.first = this.first.next
    this.size--;
    //return the value of popped node. 
    return temp.val;

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(!this.first) return true;
    return false;
  }
}

module.exports = Stack;

let stack = new Stack;
stack.push(10);
console.log(stack.isEmpty()); //false
console.log(stack); //show stack
stack.pop();
console.log(stack.isEmpty()) //true
stack.push(10)
console.log(stack.peek()) //10
