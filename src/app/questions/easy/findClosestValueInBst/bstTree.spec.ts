import { BstNode } from './bstNode';
import {BstTree} from "./bstTree";

describe('BstTree', () => {
  let bst: BstNode;
  let tree: BstTree;

  beforeAll( () => {
    tree = BstTree.buildTestData();
  });

  it('should create a tree instance', () => {
    expect(tree).toBeTruthy();
  });

  it('should have height of 6', () => {
    expect(tree.height(tree.root)).toBe(6);
    tree.inOrderPrint();
  });

  it( 'should have number of levels of 6', () => {
    tree.createLevelLists(tree.root);
    expect(tree.levelLists.length).toEqual(6);
    tree.printLevels(tree.levelLists);
    console.log(JSON.stringify(tree.levelLists));
  });

});
