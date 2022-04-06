class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


class Graph {
  constructor() {
    this.nodes = new Set();
  }
 areConectedRecursive(person1, person2, seen=new Set([person1])){
    if(person1 === person2) return true;
    for(let neighbor of person1.adjacent){
      if(!seen.has(neighbor)){
        seen.add(neighbor);
        if(this.areConectedRecursive(neighbor, person2, seen)){
          return true;
        }
      }
    }
    return false;
 }
}
