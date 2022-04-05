/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root) return 0;
    //recursive function to find min depth
    function minDepthCheck(node){
      //check left and right for end of tree. 
      if(node.left === null && node.right == null) return 1;
      //handle left or right nodes recursively and add to count for return. 
      if(node.left === null) return minDepthCheck(node.right) + 1;
      if(node.right === null) return minDepthCheck(node.left) + 1;
      //return depth as number, compare left and right depth and return min. 
      return(
        Math.min(minDepthCheck(node.left), minDepthCheck(node.right)) + 1
      )
    }
    return minDepthCheck(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0;
    
    function maxDepthCheck(node){
      //handle base, root only.
      if(node.left === null && node.right == null) return 1;

      if(node.left === null) return maxDepthCheck(node.right) + 1;
      if(node.right === null) return maxDepthCheck(node.left) + 1;
      //return max + 1(for root)
      return(
        Math.max(maxDepthCheck(node.left), maxDepthCheck(node.right)) + 1
      );
    }
    return maxDepthCheck(this.root)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let total = 0;

    function findTotal(node){
      //base case return 0 for empty node
      if(node === null) return 0;
      //recurse down path
      const leftTotal = findTotal(node.left);
      const rightTotal = findTotal(node.right);
      //handle total for node, compare to nodes to find highest path. 
      total = Math.max(total, node.val + leftTotal + rightTotal);

      return Math.max(0, leftTotal + node.val, rightTotal + node.val)
    }
    findTotal(this.root);
    return total;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null;

    //Breadth first search with queue, queue uses shift. 
    let queue = [this.root];
    let closest = null;

    //recurse through tree. 
    while(queue.length) {
      //shift first node out of queue
      let currentNode = queue.shift()
      let val = currentNode.val;
      //compare val to lowerbound
      let compareLowerBound = val > lowerBound;
      //see if val is lowest in tree or closest is null.
      let compareToNode = val < closest || closest === null;

      //if both are true, set closest to val. 
      if(compareLowerBound && compareToNode) {
        closest = val;
      }
      //push tree branches into queue
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };

