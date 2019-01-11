export class FindClosestValueInBst {
  findClosestValueInBst(tree, target) {
    // Write your code here.
    let x = tree.value;
    return this.findClosestHelper(tree, target, x);
  }

  findClosestHelper(tree, target, closest) {
    if (tree == null)
      return closest;

    if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
      closest = tree.value;
    }

    if (target < closest)
      return this.findClosestHelper(tree.left, target, closest);
    else
      return this.findClosestHelper(tree.right, target, closest);
  }

}
