const BinaryTreeNode = require('./index.js');

test('correctly identifies balanced tree', () => {
  var balancedTree = createTreeOfLevel(4);
  expect(balancedTree.isSuperbalanced()).toBeTruthy();
});

test('correctly identifies difference of one level as superbalanced', () => {
  var unbalancedTree = new BinaryTreeNode();
  unbalancedTree.insertLeft();
  unbalancedTree.insertRight().insertRight();
  expect(unbalancedTree.isSuperbalanced()).toBeTruthy();
});

test('correctly identifies non-superbalanced tree', () => {
  var unbalancedTree = new BinaryTreeNode();
  unbalancedTree
    .insertLeft()
    .insertLeft()
    .insertLeft();
  unbalancedTree.insertRight();
  expect(unbalancedTree.isSuperbalanced()).toBeFalsy();
});

function createTreeOfLevel(level) {
  if (level === 0) return null;

  var balancedTree = new BinaryTreeNode();
  balancedTree.left = createTreeOfLevel(level - 1);
  balancedTree.right = createTreeOfLevel(level - 1);
  return balancedTree;
}
