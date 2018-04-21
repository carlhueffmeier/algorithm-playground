function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

BinaryTreeNode.prototype.findSecondLargest = function() {
  // CASE 1: Single element -> No second largest
  if (!this.right && !this.left) return null;

  var [largest, parent] = findLargest(this);

  // CASE 2: Largest element has a left subtree
  // -> Retrieve largest of the subtree
  if (largest.left) {
    return findLargest(largest.left)[0];
  }

  // CASE 3: If not -> Parent is the second largest
  return parent;

  function findLargest(tree) {
    var largest = tree;
    var parent = null;
    while (largest.right) {
      parent = largest;
      largest = largest.right;
    }
    return [largest, parent];
  }
};

module.exports = BinaryTreeNode;
