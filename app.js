class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  append(value) {
    let currentNode = new Node(value);
    let curr; // finding actual node in loop

    if (this.head === null) {
      this.head = currentNode;
    } else {
      curr = this.head;
      while (curr.nextNode) {
        curr = curr.nextNode;
      }
      curr.nextNode = currentNode;
    }
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

// const node1 = new Node('hello');
// const node2 = new Node('bye bye');

let list = new LinkedList();

list.append('bye bye');
list.append('fj');
list.append('frant');

console.log(list);
