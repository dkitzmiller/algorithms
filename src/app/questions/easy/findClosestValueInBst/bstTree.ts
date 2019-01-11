import {BstNode} from "./bstNode";

export class BstTree {
  root: BstNode;
  levelLists = [];

  constructor(value?: number) {
    if (value)
    this.root = new BstNode(value);
  }

  insertNode(value: number) {
    if (!this.root) {
      this.root = new BstNode(value);
    } else {
      this.root.insert(value);
    }
    return this;
  }

  height(node: BstNode): number {
    if (!node) return 0;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }
  createLevelLists() {
    let lh = 0;
    let rh = 0;
    if (this.root) {
      this.levelLists[0] = [];
      this.levelLists[0].push(this.root.value);
    }
    this.createLevelListsHelper(this.root, this.levelLists, lh, rh);
    return this.levelLists
  }

  createLevelListsHelper(node: BstNode, levelLists: Array<Array<number>>, lh: number, rh: number): void {
    if (!node) return;
    if (node.left) {
      lh++;
      if (!this.levelLists[lh]) {
        this.levelLists[lh] = [];
      }
      this.createLevelListsHelper(node.left, levelLists, lh, rh);
    }
    if (node.right) {
      rh++;
      if (!this.levelLists[rh]) {
        this.levelLists[rh] = [];
      }
      this.levelLists[rh].push(node.value);
      this.createLevelListsHelper(node.right, levelLists, lh, rh);
    }
  }

  printLevels(lvls: Array<Array<number>>): void {
    lvls.forEach((lvl,idx) => {
      lvl.forEach((v) => {
        console.log(`level: ${idx}, value: ${v}`);
      })
    })
  }

  inOrderPrint() {
    this.inOrderPrintHelper(this.root);
  }

  inOrderPrintHelper(node: BstNode) {
    if (node.left) {
      this.inOrderPrintHelper(node.left);
    }
    if (node) {
      console.log(node.value);
    }
    if (node.right) {
      this.inOrderPrintHelper(node.right);
    }
  }

  static buildTestData(): BstTree {
    const tree = new BstTree(100);
    tree.insertNode(5)
      .insertNode(5)
      .insertNode(15)
      .insertNode(5)
      .insertNode(2)
      .insertNode(1)
      .insertNode(1)
      .insertNode(1)
      .insertNode(3)
      .insertNode(1)
      .insertNode(502)
      .insertNode(55000)
      .insertNode(204)
      .insertNode(205)
      .insertNode(207)
      .insertNode(206)
      .insertNode(208)
      .insertNode(203)
      .insertNode(-51)
      .insertNode(-403)
      .insertNode(1001)
      .insertNode(57)
      .insertNode(60)
      .insertNode(4500);
    return tree;
  }

}
