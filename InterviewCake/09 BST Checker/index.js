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

BinaryTreeNode.prototype.isValidBST = function() {
  var nodesLeftToCheck = [
    {
      node: this,
      lowerBound: -Infinity,
      upperBound: Infinity
    }
  ];

  while (nodesLeftToCheck.length > 0) {
    let { node, lowerBound, upperBound } = nodesLeftToCheck.pop();

    // Check whether we have an invalid value
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    // Add nodes with respective bounds
    if (node.left) {
      nodesLeftToCheck.push({
        node: node.left,
        lowerBound,
        upperBound: node.value
      });
    }
    if (node.right) {
      nodesLeftToCheck.push({
        node: node.right,
        lowerBound: node.value,
        upperBound
      });
    }
  }

  return true;
};

// Second attempt
// Working clean solution, but I want to avoid recursion if possible

// BinaryTreeNode.prototype.isValidBST = function() {
//   var currentValue = null;
//   var answer = true;

//   function traverseInOrder(node) {
//     if (answer === false) return;
//     // First process left side (thus starting at the lowest value)
//     if (node.left) traverseInOrder(node.left);

//     // Check whether value becomes larger, as expected
//     if (currentValue && node.value <= currentValue) answer = false;
//     currentValue = node.value;

//     // Finally process right side as well
//     if (node.right) traverseInOrder(node.right);
//   }

//   traverseInOrder(this);

//   return answer;
// };

// First attempt
// Doesn't work for trees looking like this
//      50
//   30    80
// 10 60  55 100

// BinaryTreeNode.prototype.isValidBST = function() {
//   var nodesLeftToCheck = [this];
//   var currentValue;
//   while (nodesLeftToCheck.length > 0) {
//     let currentItem = nodesLeftToCheck.pop();
//     if (currentItem.left) nodesLeftToCheck.push(currentItem.left);
//     if (!isValidNode(currentItem)) {
//       return false;
//     }
//     if (currentItem.right) nodesLeftToCheck.push(currentItem.right);
//   }
//   return true;

//   function isValidNode(node) {
//     if (
//       (!node.left || node.left.value < node.value) &&
//       (!node.right || node.value < node.right.value)
//     ) {
//       return true;
//     }
//     return false;
//   }
// };

module.exports = BinaryTreeNode;
