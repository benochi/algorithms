/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root){
      return 0;
    }
    let total = this.root.val;

    function findSum(node){
      //loop through children of node
      for(let child of node.children){
        //add to total
        total += child.val;
        //see if node has children and recurse if true.
        if(child.children.length > 0){
          findSum(child);
        }
      }
    }
    //initial call
    findSum(this.root)
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return 0;
    let count = this.root.val % 2 === 0 ? 1 : 0;

    function findEvens(node){
      for(let child of node.children){
        if(child.val % 2 === 0){
          count += 1;
        }
        //recurse through tree if children nodes. 
        if(child.children.length > 0){
          findEvens(child);
        }
      }
    }
    findEvens(this.root)
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0;
    let count = this.root.val > lowerBound ? 1 : 0;

    function findNumGreater(node){
      for(let child of node.children){
        if(child.val > lowerBound) {
          count ++;
        }
        if(child.children.length > 0){
          findNumGreater(child);
        }
      }
    }
    findNumGreater(this.root)
    return count;
  }
}

module.exports = { Tree, TreeNode };
