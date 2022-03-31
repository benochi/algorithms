/** Node: node for a singly linked list. */

class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
  getIndex(idx){
    let current = this.head;
    let count = 0;
    //check for nodes and move through list until index found or no more nodes. 
    while (current !== null && count != idx){
      count += 1;
      current = current.next ;
    }
    return current;
  }
  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if(!this.head === null){ //if no head, m,ke this the head. 
      this.head = newNode;
    } else {
      newNode.next = this.head; //unshift to front and set old head to this.next
      this.head = newNode; //set head to new node. 
    }

    if(this.length === 0) this.tail = this.head; 
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(this.length === 0){
      throw new Error("The list is empty");
    }
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.length === 0){
      throw new Error("The list is empty");
    }
    return this.removeAt(0); //remove first Index node(0)
  }

  /** getAt(idx): get val at idx. */
  //make sure index exists and is valid.
  getAt(idx) {
    if(idx >= this.length || idx < 0) {
      throw new Error("Invalid index.")
    }
    return this.getIndex(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */
  //make sure index exists and is valid. 
  setAt(idx, val) {
    if(idx >= this.length || idx < 0) {
      throw new Error("Invalid index.")
    }
    let currentNode = this.getIndex(idx);
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx >= this.length || idx < 0) {
      throw new Error("Invalid index.")
    }
    //check for head index of 0 and use unshift
    if(idx === 0) return this.unshift(val)
    // get the previous Node
    let previousNode = this.getIndex(idx - 1);
    //make node for insertion.
    let newNode = new Node(val);
    //copy previous node .next
    newNode.next = previousNode.next;
    //change previousnode.next to this node.
    previousNode.next = newNode;
    //update list length.
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    //handle head delete
    if (idx === 0) {
      //get head value to retrun
      let val = this.head.val;
      //set new head to node after head
      this.head = this.head.next;
      //update length
      this.length --;
      //handle if list tail is new head
      if (this.length < 2) this.tail = this.head;
      //return val
      return val;
    }
    let prev = this.getIndex(idx - 1);

    //handle tail delete
    if (idx === this.length - 1) {
      let val = prev.next.val;
      //set new tail .next
      prev.next = null;
      //set new list tail
      this.tail = prev;
      //update length of list
      this.length -= 1;
      //return val of new tail. 
      return val;
    }

    //normal case
    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let sum = 0;
    let current = this.head;
    //loop through entire list and add values. 
    while (current) {
      sum += current.val;
      current = current.next;
    }
    //divide sum by list length for average. 
    return sum / this.length;
  }
}

module.exports = LinkedList;
