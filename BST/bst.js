class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(this.root === null){
      this.root = new Node(val);
      return this;
    }

    let current = this.root;
    while(true){
      if(val < current.val) {
        //make left branch
        if(current.left === null) {
          current.left = new Node(val);
          return this;
          //handle if the left node exists already, move to left node. 
        } else {
          current = current.left
        }
      }
      if(val > current.val){
        //make right branch
        if(current.right === null){
          current.right = new Node(val)
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if(this.root === null){
      this.root = new Node(val)
      return this;
    }
    if(val < current.val){
      if(current.left === null){
        current.left = new Node(val)
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if(val > current.val) {
        if(current.right === null){
          this.right = new Node(val)
          return this;
        }
      }
      return this.insertRecursively(val, current.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    let match = false;

    if(val === currentNode.val) return currentNode;

    while(!match && currentNode){
      //if val is less tahn node val, move left
      if(val < currentNode.val){
        currentNode = currentNode.left
        //if val greater than CN, move right. 
      } else if (val > currentNode){
        currentNode = currentNode.right
        //handle found
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return currentNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if(this.root === null) return undefined;

    if(val < currentNode.val) {
      if(currentNode.left === null) return undefined;
      return this.findRecursively(val, currentNode.left);
    } else if(val > currentNode.val) {
      if(currentNode.right === null) return undefined;
      return this.findRecursively(val, currentNode.right);
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = []
    let current = this.root;

    //traverse Pre order DFS and recurse through.
    function traversePre(node){
      arr.push(node.val) ///push at start for Pre Order. 
      node.left && traversePre(node.left); //go down left path
      node.right && traversePre(node.right);//go down right path.
    }
    traversePre(current)
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = []
    let current = this.root;

    //traverse Pre order DFS and recurse through.
    function traverse(node){
      node.left && traverse(node.left); //go down left path
      arr.push(node.val); //push in middle for IN ORDER. 
      node.right && traverse(node.right);//go down right path.
    }
    traverse(current)
    return arr;
  }
  

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = []
    let current = this.root;

    //traverse Pre order DFS and recurse through.
    function traversePost(node){
      node.left && traversePost(node.left); //go down left path
      node.right && traversePost(node.right);//go down right path.
      arr.push(node.val); //push at endfor POST ORDER. 
    }
    traversePost(current)
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */  //BFS = queue

  bfs() {
    let node = this.root;
    let queue = [];
    let arr =[];
    queue.push(node)

    while(queue.length){
      //queue uses shift. 
      node = queue.shift()
      arr.push(node.val);
      if(node.left) {
        queue.push(node.left)
      };
      if(node.right) { 
        queue.push(node.right)
      };
    }
    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
