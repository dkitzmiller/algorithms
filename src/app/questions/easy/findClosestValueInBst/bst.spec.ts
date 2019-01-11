import { BstNode } from './bstNode';
import {BstTree} from "./bstTree";

describe('BstNode', () => {
  let bst: BstNode;
  let tree: BstTree;

  beforeAll( () => {
    tree = BstTree.buildTestData();
  });

  it('should create a tree instance', () => {
    expect(tree).toBeTruthy();
  });

  it('should have height of 7', () => {
    expect(tree.height(tree.root)).toBe(7);
  });

  it( 'should have number of levels of', () => {
    tree.createLevelLists(tree.root);
    expect(tree.levelLists.length).toEqual(9);
    tree.printLevels(tree.levelLists);
  });

});

