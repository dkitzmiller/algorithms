import { FindClosestValueInBst } from './find-closest-value-in-bst';
import {BstTree} from "./bstTree";

describe('FindClosestValueInBst', () => {
  let tree: BstTree;

  beforeAll(() => {
    tree = BstTree.buildTestData();
  });

  it('should have the tree instance', () => {
    expect(tree).toBeTruthy();
  });

  it('should create an instance', () => {
    expect(new FindClosestValueInBst()).toBeTruthy();
  });

});
