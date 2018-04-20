// Given binary tree implementation

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

BinaryTreeNode.prototype.isSuperbalanced = function() {
  return traverse(this);

  function traverse(tree) {
    if (!tree) return;
    var stack = [[tree, 0]];
    var levels = [];

    while (stack.length > 0) {
      var [node, currentLevel] = stack.pop();

      if (isLeafNode(node)) {
        if (levels.indexOf(currentLevel) < 0) {
          levels.push(currentLevel);
        }
        if (
          levels.length > 2 ||
          (levels.length === 2 && Math.abs(levels[0] - levels[1]) > 1)
        ) {
          return false;
        }
      }

      if (node.left) {
        stack.push([node.left, currentLevel + 1]);
      }
      if (node.right) {
        stack.push([node.right, currentLevel + 1]);
      }
    }
    return true;
  }

  function isLeafNode(node) {
    return node.left === null && node.right === null;
  }

  // var minHeight = null;
  // var maxHeight = null;
  // function traverseRecursive(tree, level = 0) {
  //   if (isLeafNode(tree)) {
  //     if (!minHeight) {
  //       minHeight = level;
  //       maxHeight = level;
  //     } else {
  //       minHeight = Math.min(minHeight, level);
  //       maxHeight = Math.max(maxHeight, level);
  //     }
  //   } else {
  //     [tree.left, tree.right].forEach(node => {
  //       if (node) {
  //         traverse(node, level + 1);
  //       }
  //     });
  //   }
  // }
};

module.exports = BinaryTreeNode;
