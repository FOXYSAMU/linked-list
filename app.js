class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    let currentNode = new Node(value);
    let curr; // finding actual node in loop

    if (this.head === null) this.head = currentNode;
    else {
      curr = this.head;
      while (curr.nextNode) curr = curr.nextNode;
      curr.nextNode = currentNode;
    }
  }

  prepend(value) {
    let node = new Node(value);
    if (this.head === null) this.head = node;
    else {
      node.nextNode = this.head;
      this.head = node;
    }
  }

  get size() {
    return this.countNodes();
  }

  countNodes() {
    let curr = this.head;
    let ListSize = 0;
    if (curr === null) {
      ListSize = 0;
      console.log(ListSize);
    } else {
      ListSize++;
      while (curr.nextNode) curr = curr.nextNode;
      ListSize++;
      console.log(ListSize);
      ListSize = 0;
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
    if (curr !== null) while (curr.nextNode) curr = curr.nextNode;
    console.log(curr);
  }

  at(index) {
    let curr = this.head;
    let count = 0;
    let wasFound = false;
    if (curr !== null) {
      if (index === 0) console.log(curr);
      else {
        while (curr.nextNode) {
          curr = curr.nextNode;
          count++;
          if (count === index) {
            console.log(curr);
            wasFound = true;
          }
        }
        if (count !== index && !wasFound) console.log('Node not found');
      }
    } else console.log('No nodes found');
  }

  get pop() {
    return this.removeLastNode();
  }

  removeLastNode() {
    let curr = this.head;
    let lastNode = new Node();
    if (curr !== null) {
      // Check for 1st and 2nd node
      if (this.head.nextNode !== null && this.head.nextNode.nextNode !== null) {
        // Get last node
        while (curr.nextNode) curr = curr.nextNode;

        lastNode = curr;

        // Remove the last node
        let current = this.head;
        while (current.nextNode) {
          current = current.nextNode;
          if (current.nextNode === lastNode) {
            current.nextNode = null;
          }
        }
      } else if (this.head.nextNode === null) {
        // Leave list empty if only 1 node present
        this.head = null;
      } else if (this.head.nextNode.nextNode === null) {
        // Leave list with only 1 node
        this.head.nextNode = null;
      }
    } else console.log('No nodes found');
  }

  contains(value) {
    let curr = this.head;
    let isThere = false;
    if (curr !== null) {
      if (this.head.value !== value) {
        while (curr.nextNode) {
          curr = curr.nextNode;
          if (curr.value === value) {
            isThere = true;
          }
        }
      } else {
        isThere = true;
      }
      console.log(isThere);
    } else console.log('The list is empty');
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

list.append(500);
list.prepend(300);
// list.pop;
list.prepend(20);
// list.size;
list.append(25);
// list.pop;
list.append(10);

list.contains(300);
list.contains(200);
// list.size;

// list.Head;
// list.Tail;

// list.at(3);

console.log(list);
