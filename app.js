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

  prepend(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
  }

  get size() {
    return this.countNodes();
  }

  countNodes() {
    let size = 1;
    let curr = this.head;
    if (curr === null) {
      console.log(0);
    } else {
      while (curr.nextNode) {
        curr = curr.nextNode;
        size++;
      }
      console.log(size);
    }
  }

  get Head() {
    return this.getHead();
  }

  getHead() {
    console.log(this.head);
  }

  get Tail() {
    return this.getTail();
  }

  getTail() {
    let curr = this.head;
    while (curr.nextNode) {
      curr = curr.nextNode;
    }
    console.log(curr);
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
list.prepend('hi');
// list.prepend('howru');

list.append('good');
// list.append('fine');

// list.size;

list.Head;
list.Tail;

console.log(list);
