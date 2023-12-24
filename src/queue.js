const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  queue = [];

  getUnderlyingList() {
    return this.queue[0];
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (this.queue.length > 0) {
      this.queue[this.queue.length - 1].next = node;
    }

    return this.queue.push(node);
  }

  dequeue() {
    let deqNode = this.queue.shift();
    return deqNode.value;
  }
}

module.exports = {
  Queue
};
