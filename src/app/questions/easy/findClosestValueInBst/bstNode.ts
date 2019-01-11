export class BstNode {
  constructor(public value: number, public left?: BstNode, public right?: BstNode) {
  }

  insert(value: number): BstNode {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BstNode(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (!this.right) {
        this.right = new BstNode(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }
}
