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

  find(value) {
    let curr = this.head;
    let count = 0;
    let wasFound = false;
    if (curr !== null) {
      if (curr.value === value) console.log(0);
      else {
        while (curr.nextNode) {
          curr = curr.nextNode;
          count++;
          if (curr.value === value) {
            console.log(count);
            wasFound = true;
          }
        }
        if (curr.value !== value && !wasFound) console.log('Node not found');
      }
    } else console.log('No nodes found');
  }

  get toString() {
    return this.turnToString();
  }

  turnToString() {
    let curr = this.head;
    let stringArr = [];
    if (curr !== null) {
      if (curr.nextNode === null) {
        stringArr.push(`(${curr.value})`);
      } else {
        stringArr.push(`(${curr.value})`);
        while (curr.nextNode) {
          curr = curr.nextNode;
          stringArr.push(`(${curr.value})`);
        }
      }
      stringArr.push('null');
      let result = stringArr.join(' -> ');
      console.log(result);
    } else console.log('No nodes found');
  }

  insertAt(value, index) {
    let node = new Node(value);
    let curr = this.head;
    let count = 0;
    let wasFound = false;
    if (curr !== null) {
      if (index === 0) {
        node.nextNode = this.head;
        this.head = node;
      } else if (index === 1) {
        node.nextNode = curr.nextNode;
        curr.nextNode = node;
      } else {
        while (curr.nextNode) {
          curr = curr.nextNode;
          count++;
          if (count === index) {
            let main = this.head;
            while (main.nextNode) {
              main = main.nextNode;
              if (main.nextNode === curr) {
                main.nextNode = node;
                node.nextNode = curr;
                break;
              }
            }
            wasFound = true;
          }
        }
        if (count !== index && !wasFound) {
          console.log('Cant insert node');
        }
      }
    } else this.head = node;
  }

  removeAt(index) {
    let curr = this.head;
    let count = 0;
    let currentNode;
    let already = false;
    if (curr !== null) {
      if (index === 0) {
        currentNode = curr.nextNode;
        curr = null;
        curr = currentNode;
        already = true;
      } else if (index === 1) {
        let next = curr.nextNode.nextNode;
        curr.nextNode = null;
        curr.nextNode = next;
        already = true;
      } else {
        while (curr.nextNode) {
          curr = curr.nextNode;
          count++;
          if (count === index) {
            console.log(curr);
            let next = curr.nextNode;
            let main = this.head;
            while (main.nextNode) {
              main = main.nextNode;
              if (main.nextNode === curr) {
                main.nextNode = null;
                main.nextNode = next;
                break;
              }
            }
            already = true;
          }
        }
      }
      if (count !== index && !already) {
        console.log('Node not found');
      }
    } else console.log('No nodes found');
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

list.append(10);
list.append(11);
list.append(13);
list.append(12);

// list.pop;
// list.contains(300);

// list.contains(200);
// list.size;

// list.toString;

// list.insertAt('hey', 1);
// list.insertAt('ciao', 3);
// list.insertAt('hola', 3);
// list.insertAt('seeya', 10);
// list.insertAt('test', 11);

list.removeAt(5);
list.removeAt(6);
list.removeAt(1);

// list.find(13);
// list.find(13);
// list.Head;
// list.Tail;

// list.at(3);

console.log(list);
