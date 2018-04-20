const BinaryTreeNode = require('./index.js');

test('correctly identifies valid BST', () => {
  var goodBST = new BinaryTreeNode(5);
  var badBST = new BinaryTreeNode(5);
  goodBST
    .insertLeft(3)
    .insertLeft(1)
    .insertRight(2);
  goodBST
    .insertRight(83)
    .insertLeft(42)
    .insertRight(67);
  badBST
    .insertLeft(3)
    .insertLeft(1)
    .insertRight(2);
  badBST.insertRight(10).insertRight(0);
  expect(goodBST.isValidBST()).toBeTruthy();
  expect(badBST.isValidBST()).toBeFalsy();
});

test('correctly identifies invalid BST with error spanning over multiple levels', () => {
  var badBST = new BinaryTreeNode(5);
  badBST.insertLeft(3).insertRight(10);
  expect(badBST.isValidBST()).toBeFalsy();
});
