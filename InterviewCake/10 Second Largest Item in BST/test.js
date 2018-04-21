const BinaryTreeNode = require('./index.js');

test('correctly retrieves second largest element', () => {
  var bst = new BinaryTreeNode(5);
  bst.insertRight(7);
  expect(bst.findSecondLargest().value).toEqual(5);
  bst = new BinaryTreeNode(7);
  bst.insertLeft(5);
  expect(bst.findSecondLargest().value).toEqual(5);
  bst = new BinaryTreeNode(7);
  bst
    .insertLeft(3)
    .insertRight(6)
    .insertLeft(5);
  expect(bst.findSecondLargest().value).toEqual(6);
  bst = new BinaryTreeNode(14);
  bst
    .insertRight(18)
    .insertRight(54)
    .insertLeft(42)
    .insertRight(53);
  expect(bst.findSecondLargest().value).toEqual(53);
});
