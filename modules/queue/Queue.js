class _Node {
  constructor(data) {
    this.data = data;
    this.next = null; //next is towards the beginning of the queue when looking at it vertically (down)
    this.prev = null; //prev is towards the back of the queue (up)
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  
  enqueue(item) {
    const node = new _Node(item);
    
    if (this.first === null) {
      this.first = node
    }
    //if the queue isnt empty
    //take the node that is currently
    //at the end of the queue
    // link it to the new node
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  
  dequeue() {
    if (this.first === null) {
      console.log('your queue is empty');
      return
    }
    let first = this.first;
    this.first = first.prev;
    
    //if this is the last item in the queue/there is only 1 item in queue
    if (first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first.next = null;
      //causes problems
    }
    
    return first.data
  }
}

function display(queue) {
  if (queue.first === null) {
    return
  }
  let current = queue.last;
  while (current !== null) {
    console.log(current.data);
    current = current.next
  }
}

function peek(queue) {
  if (queue.first === null) {
    return null
  }
  return queue.first.data
}

function isEmpty(queue) {
  return peek(queue) === null;
}

module.exports = Queue;
