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
  //********SETS use add and delete**************

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    //Set uses add
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex in vertexArray){
      this.addVertex(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for(let node of this.nodes){
      if(this.nodes.adjacent.has(vertex)){
        node.adjacent.delete(vertex);
      }
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    //DFS = STACK
    const stack = [start]
    const result = [];
    const visited = new Set()
    let currentVertex; 

    visited.add(start);

    while(stack.length){
      currentVertex = stack.pop();
      //add node value
      result.push(currentVertex.value);

      currentVertex.adjacent.forEach(neighbor => {
        if(!visited.has(neighbor)){
          visited.add(neighbor);
          stack.push(neighbor)
        }
      })
    }
    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    //BFS = QUEUE
    const queue = [start];
    const result = [];
    const visited = new Set();
    let currentVertex;

    visited.add(start);

    //search while there are still vertices in the queue.
    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex.value);
      //handle adjacency
      currentVertex.adjacent.forEach(neighbor => {
        //check for duplicates in set using has. if not in set, add to set, add to queue. 
        if(!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

module.exports = {Graph, Node}
